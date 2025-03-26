import AboutUS from "../../components/Home/AboutUS/AboutUS";
import Achievement from "../../components/Home/Achievements/Achievement";
import Banner from "../../components/Home/Banner/Banner";
import FrequentlyAsk from "../../components/Home/FrequentlyAsk/FrequentlyAsk";
import ProductSection from "../../components/Home/OurProduct/Products";
import Partners from "../../components/Home/Partner/Partner";
import Testimonial from "../../components/Home/Testimonial/Testimonial";
import WhatOffer from "../../components/Home/WhatOffer/WhatOffer";
import Working from "../../components/Home/WhyWorking/Working";
import WorkProcess from "../../components/Home/WorkProcess/WorkProcess";
import TechnologyCarousel from "../../components/Products/Clearance/Technology";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUS />

      <Working />
      <Partners />
      <WorkProcess />
      <ProductSection />
      <TechnologyCarousel />
      <Achievement />

      <WhatOffer />

      <Testimonial />

      <FrequentlyAsk />
    </>
  );
};

export default Home;
