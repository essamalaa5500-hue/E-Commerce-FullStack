import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { CartContext } from "../context/CartContext.jsx";
import { BsCart4 } from "react-icons/bs";

export default function Header() {
  const { isLoggedIn, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex justify-between items-center
     px-4 md:px-8 lg:px-12 py-2 h-18 bg-gray-50">
      <Link
        className="font-bold text-xl md:text-2xl text-black font-serif"
        to="/"
      >
        Home
      </Link>

      <div className="hidden lg:flex flex-row items-center gap-6">
        <Link
          className="font-semibold text-black hover:text-gray-600"
          to="/products"
        >
          Products
        </Link>
        <Link
          className="font-semibold text-black hover:text-gray-600"
          to="/#about"
        >
          About
        </Link>
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        {isLoggedIn ? (
          <button
            className="font-semibold rounded-full bg-black px-3 py-2
            hover:cursor-pointer text-white hover:bg-gray-600 text-sm md:text-base"
            onClick={logOut}
          >
            Logout
          </button>
        ) : (
          <div className="flex flex-row gap-2 md:gap-4">
            <Link
              className="font-semibold rounded-full p-2 text-black
              hover:text-gray-600 text-sm md:text-base"
              to="/register"
            >
              Sign up
            </Link>
            <Link
              className="font-semibold rounded-full bg-black px-3 py-2
              text-white hover:bg-gray-600 text-sm md:text-base"
              to="/login"
            >
              Log in
            </Link>
          </div>
        )}
        <Link to="/cart" className="relative">
          <BsCart4 className="text-xl md:text-2xl" />
          {totalItems > 0 && (
            <span
              className="absolute -top-2 -right-2 bg-red-500 text-white
            text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
            >
              {totalItems}
            </span>
          )}
        </Link>

        <div className="relative flex lg:hidden">
          <button
            className="p-2 rounded-full hover:cursor-pointer font-bold text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
          {isOpen && (
            <div
              className="fixed inset-0 top-14 flex 
              flex-col p-4 text-white
              bg-gray-300 font-semibold z-50
               overflow-y-auto"
            >
              <Link
                onClick={() => setIsOpen(false)}
                className="p-4 border-2 bg-black rounded-full m-4"
                to="/products"
              >
                Products
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                className="p-4 border-2 bg-black rounded-full m-4"
                to="/cart"
              >
                Cart
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
