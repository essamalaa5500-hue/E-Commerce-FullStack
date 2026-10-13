import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (err) {
        console.log(err);
      }
    }
    getProducts();
  }, []);

  return (
    <div className="p-4 md:p-6 lg:p-8 ">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
        Featured Products
      </h2>
      <Swiper
        onClick={() => (window.location.href = `/products`)}
        slidesPerView={1.5}
        centeredSlides={true}
        spaceBetween={16}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="pb-12! cursor-pointer"
        breakpoints={{
          768: { slidesPerView: 2.5, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
        }}
      >
        {products.slice(0, 14).map((product) => (
          <SwiperSlide key={product.id}>
            <div
              className="bg-gray-100 rounded p-3 md:p-4 text-center
              hover:scale-105 transition-all duration-200"
            >
              <img
                className="w-full h-32 md:h-40 lg:h-48 object-contain"
                src={product.thumbnail}
                alt={product.title}
              />
              <h3 className="font-bold text-sm md:text-base mt-2 truncate">
                {product.title}
              </h3>
              <p className="font-semibold text-sm md:text-base">
                ${product.price}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
