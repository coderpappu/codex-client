import AboutUS from "../../components/Home/AboutUS/AboutUS";
import Achievement from "../../components/Home/Achievements/Achievement";
import Banner from "../../components/Home/Banner/Banner";
import FrequentlyAsk from "../../components/Home/FrequentlyAsk/FrequentlyAsk";
import OurProduct from "../../components/Home/OurProduct/OurProduct";
import Testimonial from "../../components/Home/Testimonial/Testimonial";
import WhatOffer from "../../components/Home/WhatOffer/WhatOffer";
import Working from "../../components/Home/WhyWorking/Working";
import WorkProcess from "../../components/Home/WorkProcess/WorkProcess";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUS />
      <Working />
      <WorkProcess />
      <OurProduct />
      <Achievement />
      <WhatOffer />
      <Testimonial />
      <FrequentlyAsk />
    </>
  );
};

export default Home;
