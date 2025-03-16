import { useState } from "react";
import { Link } from "react-router-dom";
import bannerCircle from "../../../assets/Home/Common SVG Images/circle-home.png";
import yelloCircle from "../../../assets/Home/Common SVG Images/circle.png";
import whiteCircle from "../../../assets/Home/Common SVG Images/white-circle.png";
import whitePolyGonal from "../../../assets/Home/Common SVG Images/white-polygonal.png";
import "../Banner/Banner.css";
import VideoBanner from "./VideoBanner";
const Banner = () => {
  const [click, setClick] = useState(1);
  const handleButtonClick = (id) => {
    setClick(id);
  };

  return (
    <div className="relative xl:h-[1100px] lg:h-[1100px]  ">
      <div className="  absolute top-44 -z-10">
        <img
          draggable={false}
          className="w-44 md:block hidden"
          src={bannerCircle}
          alt="Banner Circle"
        />
      </div>
      <img
        draggable={false}
        className=" animate-bounce absolute md:left-[210px] top-20 left-8   -z-10"
        src={whiteCircle}
        alt="Polygon"
      />
      {/* Banner Text Area */}
      <div className="xl:allContainer">
        {/* <div className="bg-gradient-to-r lg:h-40 md:w-40 h-24 w-24 absolute top-10 left-10 md:left-60  from-[#d41a7a] rounded-3xl  via-[#c024e2] blur-3xl text to-orange-500 z-40 "></div> */}
        <div className="flex flex-col justify-center items-center mt-6 xl:h-[950px] ">
          <h3
            data-aos="zoom-in-up"
            className="text-[#6F4FFF] md:text-[18px] text-[10px] sm:text-[12px] font-bold"
          >
            THE TRUSTED DIGITAL AGENCY
          </h3>
          <h1
            data-aos="zoom-in-up"
            className="xl:text-[64px] lg:text-[58px] md:text-[56px] px-[6px]  text-center  text-[32px] bg-gradient-to-r  lg:px-44 from-[#010608]  via-violet-700  to-orange-400 bg-clip-text text-transparent leading-tight mt-3 font-bold"
          >
            Grow Your Business with Our Expert Solutions
          </h1>
          <img
            draggable={false}
            className=" animate-spin absolute md:left-44 top-96 -z-10"
            src={whitePolyGonal}
            alt="Polygon"
          />
          <p
            data-aos="zoom-in-up"
            className="md:text-[15px] text-[11px] mt-7 lg:px-64 px-4 font-normal md:leading-6 text-center text-[#02022dca]"
          >
            These titles are all positive and encouraging, and they focus on the
            benefits of working with your company. They also use strong action
            verbs, such as {"grow"}. These titles are all positive and
            encouraging, and they focus on the benefits of working with your
            company. They also use strong action verbs, such as {"grow"}
          </p>
          <img
            draggable={false}
            className=" animate-bounce md:block hidden absolute md:right-48 top-2 -z-10"
            src={yelloCircle}
            alt="Polygon"
          />
          {/* Banner Text Button */}
          <div className="mt-7 gap-6 mx-auto flex justify-center items-center relative">
            <div data-aos="zoom-in-up">
              <Link
                onClick={() => handleButtonClick(1)}
                className={`md:px-8 px-5 md:text-md text-sm py-2 font-medium md:py-[11px] md:font-semibold get-btn ${
                  click === 1
                    ? "bg-[#6F4FFF] text-white duration-500"
                    : "border-[#6F4FFF] border-[1px] text-[#6F4FFF]"
                } text-[18px] rounded`}
              >
                Get Started
              </Link>
            </div>
            <div data-aos="zoom-in-up">
              <Link
                onClick={() => handleButtonClick(2)}
                className={`md:px-8 md:py-[11px] -z-10 px-5 md:text-md text-sm py-2 pro-btn font-medium  md:font-semibold   ${
                  click === 2
                    ? "bg-[#6F4FFF] text-white duration-500"
                    : "border-[#6F4FFF] text-[#6F4FFF] border-[1px]"
                } text-[18px] rounded`}
              >
                Our Products
              </Link>
            </div>
            <div className=" absolute -bottom-2 md:block hidden -right-40 ">
              <svg
                className="banner-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="101"
                height="92"
                viewBox="0 0 101 92"
                fill="none"
              >
                <path
                  className="banner-path"
                  d="M99.9022 0.595576C99.926 14.5166 95.1965 45.3524 76.0889 57.3271C52.2044 72.2955 42.1046 40.6381 74.5801 40.8328C107.056 41.0275 106.837 77.5686 74.3001 87.5395C48.271 95.5162 21.4132 91.2604 0.413584 75.8316"
                  stroke="#D6D6D6"
                />
                <line
                  className="banner-line"
                  y1="-0.5"
                  x2="12.1675"
                  y2="-0.5"
                  transform="matrix(0.311427 0.95027 -0.972873 0.23134 0.090332 76.1044)"
                  stroke="#D6D6D6"
                />
                <line
                  y1="-0.5"
                  x2="14.035"
                  y2="-0.5"
                  transform="matrix(0.997621 0.0689341 -0.0920441 0.995755 0.733398 76.1083)"
                  stroke="#D6D6D6"
                />
              </svg>
            </div>
          </div>
          <div className=" mt-7">
            {/*This is the Video Part Components */}
            <VideoBanner />
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
