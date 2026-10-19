import { useState, useEffect } from "react";
import axios from "axios";

export default function Category() {
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getCategory() {
      try {
        const response = await axios.get(
          "https://e-commerce-api-phi-sage.vercel.app/category",
        );

        setCategory(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getCategory();
  }, []);
  if (category)
    return (
      <div className="w-full">
        <h1 className="text-center text-2xl sm:text-3xl font-bold px-4 py-6 sm:py-8">
          Our Categories
        </h1>

        {isLoading ? (
          <div className="flex justify-center items-center">...</div>
        ) : error ? (
          <p className="text-center text-red-500 py-8">
            Failed to load categories. Please try again later.
          </p>
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {category.map((item) => (
                <div
                  key={item._id}
                  onClick={() => (window.location.href = `/products`)}
                  className="
                bg-gray-100
                  border-2 border-black
                  rounded-lg
                  p-4
                  w-full
                  hover:scale-105
                  transition-all
                  duration-200
                  hover:cursor-pointer
                "
                >
                  <h1 className="text-center text-xl sm:text-2xl font-bold mb-4">
                    {item.name}
                  </h1>

                  <img
                    src={item.image.url}
                    alt={item.name}
                    className="w-full aspect-square object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
}
