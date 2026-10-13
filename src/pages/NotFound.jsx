import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-20 md:py-32">
      <h1 className="text-6xl md:text-8xl font-bold text-gray-800">404</h1>
      <p className="text-lg md:text-xl text-gray-600 mt-4">Page not found</p>
      <p className="text-gray-500 mt-2 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 font-semibold rounded-full px-5 py-2
        bg-black text-white hover:bg-gray-600 transition-all duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
}
