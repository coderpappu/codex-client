import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AIDImg from "../../../assets/Partner/aid-coaching.png";
import BrcImg from "../../../assets/Partner/brc_logo.png";
import CpiImg from "../../../assets/Partner/cpi_logo.png";
import GacImg from "../../../assets/Partner/gac_log.png";
import MQCImg from "../../../assets/Partner/MQC.jpg";
import ProbortonImg from "../../../assets/Partner/proborton.png";

const images = [BrcImg, GacImg, ProbortonImg, MQCImg, AIDImg, CpiImg];

const Partners = () => {
  return (
    <div className="container mx-auto mt-20 px-4">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold title">Key Client Portfolio</h2>
        <p className="text-gray-600 mt-3 text-lg">
          Leading companies that collaborate with us.
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="mySwiper"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center p-4 transition-transform transform hover:scale-105 w-[150px] h-[150px] my-8">
              <img
                src={item}
                alt={`Partner ${index + 1}`}
                className="object-contain  p-2"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Partners;
