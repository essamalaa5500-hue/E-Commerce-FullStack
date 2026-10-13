import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext.jsx";

export default function Products() {
  const { addToCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    getProducts();
  }, []);

  return (
    <>
      <h1 className="text-center mt-6 sm:mt-8 text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold px-4">
        Shop Our Products
      </h1>

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : error ? (
        <p className="text-center text-red-500 py-8">
          Failed to load products. Please try again later.
        </p>
      ) : (
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            2xl:grid-cols-5
            gap-5
            sm:gap-6
            lg:gap-6
            2xl:gap-8
            p-4
            sm:p-6
            lg:p-8
            2xl:px-12
            max-w-[1800px]
            mx-auto
          "
        >
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="
                  rounded-lg
                  p-4
                  sm:p-5
                  bg-gray-50
                  flex
                  flex-col
                  items-center
                  justify-between
                  min-w-0
                  hover:scale-105
                  transition-all
                  duration-200
                "
              >
                <div className="w-full">
                  <h1 className="text-xl sm:text-2xl font-bold leading-tight">
                    {product.title}
                  </h1>

                  <p className="text-sm sm:text-base lg:text-lg mt-3 sm:mt-4 line-clamp-3">
                    {product.description}
                  </p>

                  <img
                    className="
                      w-full
                      max-w-[220px]
                      sm:max-w-[240px]
                      lg:max-w-[260px]
                      2xl:max-w-[280px]
                      aspect-square
                      object-contain
                      mx-auto
                      mt-4
                    "
                    src={product.thumbnail}
                    alt={product.title}
                  />
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="
                    font-semibold
                    rounded-full
                    bg-black
                    px-4
                    py-2
                    mt-5
                    text-sm
                    sm:text-base
                    text-white
                    hover:bg-gray-600
                    hover:cursor-pointer
                    transition-colors
                    duration-200
                  "
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
