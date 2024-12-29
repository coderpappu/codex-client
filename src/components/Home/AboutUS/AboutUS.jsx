import { Fragment, useEffect, useState } from "react";
import AppImg from "../../../assets/Home/About/app.png";
import graphicsImg from "../../../assets/Home/About/graphics.jpeg";
import seoImg from "../../../assets/Home/About/seo.jpeg";
import webFrameBlue from "../../../assets/Home/About/web.jpeg";
// Import Swiper styles
import "swiper/css";

import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./about.css";
import AboutTabButton from "./AboutTabButton";
import AboutText from "./AboutText";
const AboutUS = () => {
  const [activeTab, setActiveTab] = useState(0);

  //handleClickMainFunction
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span id="swiper-pagination-bullet-about-${index}" className="invisible ${
        className + "-about-" + index
      } ${className}"></span>`;
    },
  };
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  //tabdata array
  const tabData = [
    {
      id: 0,
      sliderImage: [webFrameBlue, seoImg, AppImg, graphicsImg],
      title: "Build Website with Codex Devware",
      title2: "Elevate Online Productivity with Premium Web Development.",
      text: "If you want to grow your Business or create a website to connect with more people then it will be the best option for you. Check our services and build your websites,",
    },
    {
      id: 1,
      sliderImage: [webFrameBlue, webFrameBlue, webFrameBlue, webFrameBlue],
      title: "App Develop with Codex Devware",
      title2: "Expertly Crafted App Development for Your Business.",
      text: "Transform your app ideas into reality with our expert app development services.High-quality apps that exceed your expectations.",
    },
    {
      id: 2,
      sliderImage: [seoImg, seoImg, seoImg, seoImg],
      title: "SEO with Codex Devware",
      title2: "Boost Your Online Visibility with Our Expert SEO Team",
      text: "Elevate your online presence and attract more visitors with our comprehensive SEO services. Our team of experts will optimize your website and content to rank higher in search engine results",
    },
    {
      id: 3,
      sliderImage: [webFrameBlue, webFrameBlue, webFrameBlue, webFrameBlue],
      title: "Graphics with Codex Devware",
      title2: "Highlight Your Brand with Premier Graphics Design.",
      text: "Visualize your ideas and captivate your audience with our expert graphic design services. Our team of skilled designers will translate your concepts into impactful visuals",
    },
  ];
  useEffect(() => {
    if (activeTab === 0) {
      document.getElementById("swiper-pagination-bullet-about-0").click();
    }
    if (activeTab === 1) {
      document.getElementById("swiper-pagination-bullet-about-1").click();
    }
    if (activeTab === 2) {
      document.getElementById("swiper-pagination-bullet-about-2").click();
    }
    if (activeTab === 3) {
      document.getElementById("swiper-pagination-bullet-about-3").click();
    }
  }, [activeTab]);

  return (
    // main container and main section div
    <div className="lg:flex lg:justify-around allContainer py-6 md:gap-6">
      {/* Tab Buttons */}
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
        className="flex  lg:flex-col lg:w-60 mt-4 justify-center lg:justify-start  flex-row md:gap-6 sm:gap-12 gap-8   mx-auto md:mx-0 lg:mx-0  "
      >
        {/* Tab button compoents */}
        <AboutTabButton activeTab={activeTab} handleTabClick={handleTabClick} />
      </div>
      <div className=" lg:w-[3px]  gap rounded-md xl:h-[310px] lg:h-[310px]  relative bg-[#E9E9E9]">
        <div
          className={`lg:w-full md:w-[55px] bg-[#6F4FFF] lg:h-[55px] rounded-md absolute duration-700 ${
            activeTab === 0
              ? "top-0"
              : activeTab === 1
              ? "top-[90px]"
              : activeTab === 2
              ? "top-[180px]"
              : activeTab === 3
              ? "top-[255px]"
              : "top-[210px]"
          }`}
        ></div>
      </div>
      {/* About Us Image */}
      <div
        id="aboutSlider"
        className="relative mx-auto md:mt-28 lg:mt-0 mt-28 aboutImg sm:mt-20 "
      >
        <div>
          {
            <Swiper
              onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
              pagination={pagination}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              className={`relative bottom-14 w-[207px]  rounded-xl`}
            >
              {tabData.map((tab, i) => {
                return (
                  <Fragment key={`tab-${+tab.id + i}`}>
                    <SwiperSlide>
                      {/* <div > */}
                      <Swiper
                        loop={true}
                        autoplay={{
                          delay: 2000,
                          disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Navigation]}
                        slidesPerView={1}
                      >
                        {tab.sliderImage.map((img, j) => {
                          return (
                            <div key={`tabImage-${j}`}>
                              <SwiperSlide>
                                <img
                                  draggable={false}
                                  className={`md:h-[450px] h-[440px] -z-10 mx-auto mt-[76px] duration-700`}
                                  src={img}
                                  alt="Web Frame"
                                />
                              </SwiperSlide>
                            </div>
                          );
                        })}
                      </Swiper>
                      {/* </div> */}
                    </SwiperSlide>
                  </Fragment>
                );
              })}
            </Swiper>
          }
        </div>
      </div>
      {/* About us text */}
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="linear"
        data-aos-anchor-placement="top-bottom"
        className=" text-center md:mt-6 lg:w-96 lg:mt-0 mt-0 md:mx-0 mx-auto md:text-center lg:text-left"
      >
        {/* About Us Text Compoents */}
        <AboutText tabData={tabData} activeTab={activeTab} />
      </div>
    </div>
  );
};

export default AboutUS;
