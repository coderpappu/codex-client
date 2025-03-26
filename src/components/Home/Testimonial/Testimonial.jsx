import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img2 from "../../../assets/Home/Testimonial/arc.jpeg";
import img1 from "../../../assets/Home/Testimonial/brc.png";
import img3 from "../../../assets/Home/Testimonial/gac.jpeg";
import AIDImg from "../../../assets/Partner/aid-coaching.png";
import MQCImg from "../../../assets/Partner/MQC.jpg";
import ProbortonImg from "../../../assets/Partner/proborton.png";
import CommonTitle from "../../../components/Shared/CommonHomeTitle/CommonTitle";
import "../Testimonial/Testimonial.css";
import ShowTestimonial from "./ShowTestimonial";
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
      text: "Working with Codex Devware was an excellent experience. They built a user-friendly, dynamic website that perfectly aligns with our brand. Their commitment to quality and attention to detail truly stand out.",
      icon: img1,
      author: "Mohammad Rafi",
      designation: "Marketing Manager at BRC, Saudi Arabia",
    },

    {
      text: "Codex Devware's Coaching Management Software and website have transformed how we operate. The system is efficient and user-friendly, making our day-to-day tasks significantly easier. We are thoroughly impressed with their excellent work!",
      icon: ProbortonImg,
      author: "MD Ayanul Islam",
      designation: "Founder at Proborton,Fulgazi , Feni",
    },
    {
      text: "Codex Devware didn't just create a UI for us — they brought our ideas to life. Their team was responsive and professional, ensuring the final design met all our expectations. Highly recommended!",
      icon: img2,
      author: "Billal Hossain",
      designation: "Manager at ARRC, Saudi Arabia",
    },
    {
      text: "Our branding has never looked better! Codex Devware's graphic design team designed a sleek logo and an elegant company profile that we are proud to showcase. Exceptional service and creativity!",
      icon: img3,
      author: "Musthafa Kamal",
      designation: "Director at GAC, Saudi Arabia",
    },
    {
      text: "We are beyond satisfied with the website Codex Devware created for us. The UI design is modern and visually appealing, offering a seamless experience for both students and staff. A big thank you to their talented team!",
      icon: AIDImg,
      author: "Riyad Chowdhury",
      designation: "Director at AID, Muradpur , Chattogram",
    },
    {
      text: "Codex Devware designed a logo for our company that perfectly captures our work and values. We were surprised and thrilled by how well the design represented our identity. Truly outstanding creativity and professionalism!",
      icon: MQCImg,
      author: "Mohib Contracting Team",
      designation: "Construction Company in Saudi Arabia",
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
