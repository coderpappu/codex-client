import CommonTitle from "../../../components/Shared/CommonHomeTitle/CommonTitle";
import "../Testimonial/Testimonial.css";
import ShowTestimonial from "./ShowTestimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import img1 from "../../../assets/Home/Testimonial/pic2.jfif";
import img2 from "../../../assets/Home/Testimonial/pci3.jfif";
import img3 from "../../../assets/Home/Testimonial/pic4.jfif";
import img4 from "../../../assets/Home/Testimonial/pic5.jfif";

const Testimonial = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [windowSize, setWindowSize] = useState(1024);
  const [countPagination, setCountPagination] = useState(0);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span id="swiper-pagination-bullet-testimonial-${index}" className="invisible testimonial-pagination-bullet ${
        className + "-testimonial-" + index
      } ${className}"></span>`;
    },
  };

  const testimonialData = [
    {
      text: "Did everything he said he was going to do and more. Went above and beyond to meet expectations. Made numerous changes to meet needs and wants! Highly recommend this seller! You won’t be disappointed!",
      icon: img1,
      author: "David Rush",
      designation: "Engineer at DevAds",
    },
    {
      text: "Very easy and pleasant work together. All questions were answered in detail and friendly at all times. There was good communication and everything was delivered more than on time. again and again and anytime 👍🏽",
      icon: img2,
      author: "Mitchill Marsh",
      designation: "Developer at MadMan",
    },
    {
      text: "Very easy and pleasant work together. All questions were answered in detail and friendly at all times. There was good communication and everything was delivered more than on time. again and again and anytime 👍🏽",
      icon: img3,
      author: "Mitchill Marsh",
      designation: "Developer at MadMan",
    },
    {
      text: "Very easy and pleasant work together. All questions were answered in detail and friendly at all times. There was good communication and everything was delivered more than on time. again and again and anytime 👍🏽",
      icon: img4,
      author: "Mitchill Marsh",
      designation: "Developer at MadMan",
    },
    {
      text: "Very easy and pleasant work together. All questions were answered in detail and friendly at all times. There was good communication and everything was delivered more than on time. again and again and anytime 👍🏽",
      icon: img2,
      author: "Mitchill Marsh",
      designation: "Developer at MadMan",
    },
    {
      text: "Very easy and pleasant work together. All questions were answered in detail and friendly at all times. There was good communication and everything was delivered more than on time. again and again and anytime 👍🏽",
      icon: img2,
      author: "Mitchill Marsh",
      designation: "Developer at MadMan",
    },
  ];
  useEffect(() => {
    const testimonialPagination = document
      .getElementById("testimonial")
      .querySelector(".swiper-pagination-bullets").children.length;
    setCountPagination(testimonialPagination);
    if (activeTab === 0) {
      document.getElementById("swiper-pagination-bullet-testimonial-0").click();
    }
    if (activeTab === 1) {
      document.getElementById("swiper-pagination-bullet-testimonial-1").click();
    }
    if (activeTab === 2) {
      document.getElementById("swiper-pagination-bullet-testimonial-2").click();
    }
    if (activeTab === 3) {
      document.getElementById("swiper-pagination-bullet-testimonial-3").click();
    }
    const windowInnerWidth = window.innerWidth;
    setWindowSize(windowInnerWidth);
    window.addEventListener("resize", function (event) {
      const windowWidth = event.target.innerWidth;
      setWindowSize(windowWidth);
    });

    return () => {
      window.removeEventListener("resize", function (event) {
        const windowWidth = event.target.innerWidth;
        setWindowSize(windowWidth);
      });
    };
  }, [activeTab]);

  return (
    <section data-aos="zoom-in-up" className="mt-10 allContainer">
      {
        <CommonTitle
          title={"Our Happy Client Say"}
          subtitle={
            " Our happy clients consistently praise our exceptional service, confirming our commitment to exceeding expectations and building lasting partnerships"
          }
        />
      }

      <section id="testimonial" className="bg-white py-12 md:py-24">
        <div className=" px-8 card-shadows">
          <Swiper
            onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
            slidesPerView={1}
            spaceBetween={10}
            pagination={pagination}
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {testimonialData.map((data, index) => (
              <SwiperSlide key={index}>
                <ShowTestimonial
                  activeTab={windowSize < 1024 ? activeTab : activeTab + 1}
                  index={index}
                  data={data}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className=" mx-auto w-24 flex justify-center items-center pt-6">
          {Array(countPagination)
            .fill(0)
            .map((data, index) => (
              <button
                onClick={() => setActiveTab(index)}
                className={` ${
                  activeTab === index ? "bg-red-600" : "bg-slate-400"
                } w-2 h-2 mx-auto rounded-full `}
                key={index}
              ></button>
            ))}
        </div>
      </section>
    </section>
  );
};

export default Testimonial;
