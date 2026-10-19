/* eslint-disable no-useless-catch */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getRefreshToken() {
      try {
        const response = await axios.get(
          "https://e-commerce-api-phi-sage.vercel.app/users/refresh",
          { withCredentials: true },
        );
        setUser(response.data.user);
        setAccessToken(response.data.accessToken);
        setIsLoggedIn(true);
      } catch (err) {
        if (err.response?.status !== 401) {
          setError(err);
        }
      }
    }
    getRefreshToken();
  }, []);

  const register = async ({ name, email, password }) => {
    try {
      const response = await axios.post(
        "https://e-commerce-api-phi-sage.vercel.app/users/signup",
        { name, email, password },
        { withCredentials: true },
      );
      return response.data.data;
    } catch (err) {
      throw err;
    }
  };

  const login = async ({ email, password }) => {
    try {
      const response = await axios.post(
        "https://e-commerce-api-phi-sage.vercel.app/users/login",
        { email, password },
        { withCredentials: true },
      );
      setUser(response.data.user);
      setAccessToken(response.data.accessToken);
      setIsLoggedIn(true);
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  const logOut = async () => {
    try {
      await axios.post(
        "https://e-commerce-api-phi-sage.vercel.app/users/logout",
        {},
        { withCredentials: true },
      );
    } catch (err) {
      setError(err);
    } finally {
      setUser(null);
      setAccessToken(null);
      setIsLoggedIn(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn, accessToken, error, register, login, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
