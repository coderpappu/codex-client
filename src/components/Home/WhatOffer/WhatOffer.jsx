import FirstIcon from "../../../assets/Home/What Offer/firstIcon.svg";
import SecondIcon from "../../../assets/Home/What Offer/secondIcon.svg";
import ThirdIcon from "../../../assets/Home/What Offer/third.svg";
import FourthIcon from "../../../assets/Home/What Offer/fourth.svg";
import FifthIcon from "../../../assets/Home/What Offer/fifth.svg";
import SixthIcon from "../../../assets/Home/What Offer/sixth.svg";
import ShowOfferData from "./ShowOfferData";
import CommonTitle from "../../../components/Shared/CommonHomeTitle/CommonTitle";

const WhatOffer = () => {
  const OfferData = [
    {
      icon: FirstIcon,
      text: "We are open source contributor",
    },
    {
      icon: SecondIcon,
      text: "Make a Awesome Software",
    },
    {
      icon: ThirdIcon,
      text: "We Are Creative Team",
    },
    {
      icon: FourthIcon,
      text: "Creative & Unique Design",
    },
    {
      icon: FifthIcon,
      text: "Grow Your Own Product",
    },
    {
      icon: SixthIcon,
      text: "Seamless Design & Customizable",
    },
  ];
  return (
    <div data-aos="zoom-in-up" className="">
      <CommonTitle
        title={"What will we offer for you?"}
        subtitle={
          "You have to know about all of thing that, which will you have to need"
        }
      />
      <div className=" flex xl:flex-wrap  flex-wrap justify-center items-center mt-8 allContainer">
        {OfferData?.map((data, i) => (
          <ShowOfferData data={data} key={`offerData${i}`} />
        ))}
      </div>
    </div>
  );
};

export default WhatOffer;
