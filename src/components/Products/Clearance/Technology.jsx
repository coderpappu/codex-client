import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Ai from "../../../assets/Products/Clearance/adobe-illustrator-logo.svg";
import AiC from "../../../assets/Products/Clearance/ai-color.png";
import AWSC from "../../../assets/Products/Clearance/aws-color.png";
import AWS from "../../../assets/Products/Clearance/aws-logo.svg";
import Javascript from "../../../assets/Products/Clearance/Component-6.svg";
import Figma from "../../../assets/Products/Clearance/Figma-logo-logo.svg";
import Figmac from "../../../assets/Products/Clearance/figma.png";
import Python from "../../../assets/Products/Clearance/Frame-11.svg";
import ReactB from "../../../assets/Products/Clearance/Group-9.svg";
import JavascriptC from "../../../assets/Products/Clearance/js-color.png";
import LaravelC from "../../../assets/Products/Clearance/laravel-color.png";
import MongoC from "../../../assets/Products/Clearance/mongodb-color.png";
import Mongo from "../../../assets/Products/Clearance/mongodb-icon-1-1.svg";
import Mysql from "../../../assets/Products/Clearance/MySQL-logo.svg";
import NodeC from "../../../assets/Products/Clearance/node-color.png";
import Node from "../../../assets/Products/Clearance/Node.js-logo.svg";
import PostmanC from "../../../assets/Products/Clearance/posman-color.png";
import Postman from "../../../assets/Products/Clearance/postman-icon-logo.svg";
import MysqlC from "../../../assets/Products/Clearance/Property-1Default-2.png";
import PythonC from "../../../assets/Products/Clearance/python-color.png";
import ReactC from "../../../assets/Products/Clearance/react-color.png";
import Laravel from "../../../assets/Products/Clearance/Vector-Stroke.svg";

// Tech Stack Data
const techStack = [
  { bw: Postman, color: PostmanC, name: "Postman" },
  { bw: Mongo, color: MongoC, name: "MongoDB" },
  { bw: AWS, color: AWSC, name: "AWS" },
  { bw: Figma, color: Figmac, name: "Figma" },
  { bw: Ai, color: AiC, name: "Illustrator" },
  { bw: Python, color: PythonC, name: "Python" },
  { bw: Javascript, color: JavascriptC, name: "JavaScript" },
  { bw: ReactB, color: ReactC, name: "React Js" },
  { bw: Node, color: NodeC, name: "Node Js" },
  { bw: Laravel, color: LaravelC, name: "Laravel" },
  { bw: Mysql, color: MysqlC, name: "MySQL" },
];

const firstRowTechStack = techStack.slice(0, techStack.length);
const secondRowTechStack = techStack.slice(0, techStack.length).reverse();

const TechnologyCarousel = () => {
  return (
    <div className="bg-gradient-to-r from-[#02022D] via-[#4d2ddd] to-[#02022D] text-white py-12 my-12">
      <div className="text-center mb-8">
        <h2 className="font-sora lg:text-[40px] md:text-[32px] text-[22px] font-bold ">
          Technology
        </h2>
        <p className="text-gray-400 text-sm md:text-base ">
          That Power Our Design & Development
        </p>
      </div>

      <div className="xl:allContainer">
        {/* First Row */}
        <Swiper
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000 }}
          modules={[Autoplay]}
          breakpoints={{
            320: { slidesPerView: 3 },
            480: { slidesPerView: 4 },
            640: { slidesPerView: 5 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 8 },
            1280: { slidesPerView: 10 },
          }}
          className="mb-10"
        >
          {firstRowTechStack.map((tech, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="relative w-12 h-12 md:w-14 md:h-14 group">
                <img
                  src={tech.bw}
                  alt={tech.name}
                  className="w-full absolute top-0 left-0 transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                  src={tech.color}
                  alt={tech.name}
                  className="w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Second Row */}
        <Swiper
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2500 }}
          modules={[Autoplay]}
          breakpoints={{
            320: { slidesPerView: 3 },
            480: { slidesPerView: 4 },
            640: { slidesPerView: 5 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 8 },
            1280: { slidesPerView: 10 },
          }}
        >
          {secondRowTechStack.map((tech, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="relative w-12 h-12 md:w-14 md:h-14 group">
                <img
                  src={tech.bw}
                  alt={tech.name}
                  className="w-full absolute top-0 left-0 transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                  src={tech.color}
                  alt={tech.name}
                  className="w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TechnologyCarousel;
