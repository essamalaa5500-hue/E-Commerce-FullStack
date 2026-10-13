import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setErrorMessage("");

      const result = await login(inputs);
      console.log(result);

      setInputs({
        email: "",
        password: "",
      });

      navigate("/");
    } catch (err) {
      setErrorMessage(err.response.data.message);
    }
  };

  return (
    <div
      className="
        w-[90%]
        sm:w-[80%]
        md:w-[60%]
        lg:w-[45%]
        xl:w-[35%]
        2xl:w-[30%]
        mx-auto
        my-8
        sm:my-12
        lg:my-16
        border-2
        border-gray-200
        p-5
        sm:p-6
        lg:p-8
        shadow-2xl
        rounded-xl
      "
    >
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold">
        Login
      </h1>

      <form
        onSubmit={handleSubmit}
        className="
          flex
          flex-col
          justify-center
          items-center
          w-full
          mt-6
          sm:mt-8
        "
      >
        <input
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          type="email"
          placeholder="Email"
          className="
            w-full
            p-3
            sm:p-3.5
            border-2
            border-gray-400
            rounded-full
            mb-4
            outline-none
            focus:border-black
          "
        />

        <input
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          type="password"
          placeholder="Password"
          className="
            w-full
            p-3
            sm:p-3.5
            border-2
            border-gray-400
            rounded-full
            mb-4
            outline-none
            focus:border-black
          "
        />

        <button
          type="submit"
          className="
            font-semibold
            rounded-full
            px-5
            py-2.5
            sm:px-6
            sm:py-3
            text-white
            text-lg
            sm:text-xl
            lg:text-2xl
            bg-black
            hover:cursor-pointer
            hover:scale-105
            transition-all
            duration-200
          "
        >
          Login
        </button>

        {errorMessage && (
          <p className="text-red-500 text-sm sm:text-base text-center mt-4">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
}
