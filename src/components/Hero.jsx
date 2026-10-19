import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

export default function Hero() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="w-full h-56 md:h-96 lg:h-[500px] pb-10! md:pb-12!"
    >
      <SwiperSlide>
        <img src={img1} alt="img1" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="img2" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="img3" className="w-full h-full object-cover" />
      </SwiperSlide>
    </Swiper>
  );
}
