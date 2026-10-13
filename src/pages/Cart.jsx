import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

export default function Cart() {
  const { cart, removeFromCart, addToCart } = useContext(CartContext);
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 md:py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
        Your Cart
      </h1>

      {cart.length === 0 && (
        <p className="text-center text-gray-500 text-lg">Your cart is empty</p>
      )}

      {cart.length > 0 && (
        <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-3 p-3 md:p-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-16 h-16 md:w-24 md:h-24 object-contain flex-shrink-0"
              />

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm md:text-lg truncate">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 truncate hidden sm:block">
                  {item.description}
                </p>
                <p className="text-xs md:text-base mt-1 text-gray-600">
                  {item.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 flex-shrink-0">
                <div className="flex items-center gap-1 md:gap-2">
                  <button
                    className="font-semibold rounded-full w-6 h-6 md:w-8 md:h-8 text-sm
                    border border-gray-300 hover:bg-gray-100 hover:cursor-pointer"
                    onClick={() => removeFromCart(item)}
                  >
                    -
                  </button>
                  <span className="w-4 md:w-6 text-center text-sm">
                    {item.quantity}
                  </span>
                  <button
                    className="font-semibold rounded-full w-6 h-6 md:w-8 md:h-8 text-sm
                    border border-gray-300 hover:bg-gray-100 hover:cursor-pointer"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </div>

                <p className="font-semibold text-sm md:text-lg sm:w-20 text-right">
                  {(item.price * item.quantity).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
          <span className="text-lg md:text-xl font-bold">Total</span>
          <span className="text-lg md:text-xl font-bold">
            {cart
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toLocaleString("en-US", { style: "currency", currency: "USD" })}
          </span>
        </div>
      )}
    </div>
  );
}
