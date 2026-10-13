import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import { Link } from "react-router-dom";

export default function Register() {
  const [errorMessage, setErrorMessage] = useState("");
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setErrorMessage("");

      const result = await register(inputs);
      console.log(result);

      setInputs({
        name: "",
        email: "",
        password: "",
      });

      navigate("/login");
    } catch (err) {
      setErrorMessage(err.response.data.message);
    }
  };

  const { register } = useContext(AuthContext);

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
        Register
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
          value={inputs.name}
          onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          type="text"
          placeholder="Name"
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
          Register
        </button>

        <Link
          to="/login"
          className="
            mt-4
            text-sm
            sm:text-base
            text-gray-600
            hover:underline
            text-center
          "
        >
          Already have an account? Login
        </Link>

        {errorMessage && (
          <p className="text-red-500 text-sm sm:text-base text-center mt-4">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
}
