import { Link } from "react-router-dom";
import arrowImg from "../../../assets/Home/Our Product/arrow-right.png";
import cardImg from "../../../assets/Home/Our Product/ProductImg1.png";
import NexusProImage from "../../../assets/Products/Nextuspro/dashboard.webp";
import CommonTitle from "../../../components/Shared/CommonHomeTitle/CommonTitle";
import "../OurProduct/OurProduct.css";
import ShowProductCardData from "./ShowProductCardData";

const OurProduct = () => {
  // Product Main Array Data
  const ProductCardData = [
    {
      icon: cardImg,
      cardTitle: "E-Clearance",
      des: "E-Clearance by Codex Devware is a smart and efficient clearance solution for universities and polytechnics. ",
    },

    {
      icon: NexusProImage,
      cardTitle: "Nexus Pro",
      des: "We build high-end software that skyrockets your business growth. We build high-end software that skyrockets your business growth.  ",
    },
    {
      icon: cardImg,
      cardTitle: "Codex Mart",
      des: "We build high-end software that skyrockets your business growth. We build high-end software that skyrockets your business growth.  ",
    },
    {
      icon: cardImg,
      cardTitle: "Codex Mart",
      des: "We build high-end software that skyrockets your business growth. We build high-end software that skyrockets your business growth.  ",
    },
    {
      icon: cardImg,
      cardTitle: "Codex Mart",
      des: "We build high-end software that skyrockets your business growth. We build high-end software that skyrockets your business growth.  ",
    },
    {
      icon: cardImg,
      cardTitle: "Codex Mart",
      des: "We build high-end software that skyrockets your business growth. We build high-end software that skyrockets your business growth.  ",
    },
  ];

  return (
    <div data-aos="zoom-in-up" className=" xl:h-[750px] ">
      {/* Common Title Div */}
      <div className="mt-20">
        <CommonTitle
          title={"Explore Our Products"}
          subtitle={
            "Discover our innovative products through a journey of exploration. From groundbreaking features to unparalleled quality, explore excellence at your fingertips."
          }
        />
        <Link className="gap-2 flex justify-center items-center mt-6 text-[#6F4FFF] font-sora text-[16px] font-bold leading-normal">
          View More Products{" "}
          <img draggable={false} src={arrowImg} alt="Arrow Image" />
        </Link>
      </div>
      {/* Common Title Div */}
      <div className="   flex 2xl:flex-wrap  flex-wrap justify-center items-center xl:gap-8 gap-8 mt-10 allContainer">
        {/*Main data from get a array and share from the data on single components*/}
        {ProductCardData.map((data, index) => (
          <ShowProductCardData data={data} key={index} />
        ))}
      </div>
      {/* The main card Div */}
    </div>
  );
};

export default OurProduct;
