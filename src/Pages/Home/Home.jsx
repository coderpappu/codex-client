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

import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Codex Devware | Best Custom Software, SaaS & Web Development Company
          in Bangladesh
        </title>
        <meta
          name="description"
          content="Codex Devware is a leading software company in Bangladesh offering custom software, SaaS solutions, website development, SEO, and digital marketing services."
        />
        <link rel="canonical" href="https://codexdevware.com/" />
        <meta
          property="og:title"
          content="Codex Devware | Software, SaaS & Web Development in Bangladesh"
        />
        <meta
          property="og:description"
          content="Build powerful software, SaaS apps, websites, and get SEO & marketing services from Codex Devware."
        />
        <meta property="og:url" content="https://codexdevware.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="../../assets/services/UiUX Design/firstImg.svg"
        />
      </Helmet>
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
