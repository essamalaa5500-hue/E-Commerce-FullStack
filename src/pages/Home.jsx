import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Category from "../pages/Category";
import About from "../components/About";
import Footer from "../components/Footer";
import Features from "../components/Features";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="w-full">
      <Hero />

      <div
        className="bg-gray-100 flex flex-col justify-center 
      items-center text-center px-4 py-12
       sm:px-6 sm:py-16 lg:px-8 lg:py-20 2xl:py-24"
      >
        <h1
          className=" text-3xl sm:text-4xl md:text-5xl 
        lg:text-6xl 2xl:text-7xl font-bold"
        >
          Get Inspired
        </h1>

        <p
          className="text-sm sm:text-base lg:text-lg 
        text-center mt-5 sm:mt-6 lg:mt-8 font-mono
         max-w-3xl 2xl:max-w-4xl leading-7 sm:leading-8"
        >
          Browsing for your next long-haul trip, everyday journey, or just fancy
          a look at what's new? From community favorites to-about-to-sell-out
          items, see them all here.
        </p>
      </div>

      <FeaturedProducts />

      <Category />

      <div id="about">
        <About />
      </div>

      <Features />

      <Footer />
    </div>
  );
}
