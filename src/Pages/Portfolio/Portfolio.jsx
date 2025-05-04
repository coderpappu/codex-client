import { useState } from "react";

import { Helmet } from "react-helmet-async";
import BrcHome from "../../assets/Portfolio/brc-profile.png";
import ProjectImage from "../../assets/Portfolio/contest-home.png";
import LMSImage from "../../assets/Portfolio/lms-system.png";
import MinidokanImage from "../../assets/Portfolio/MiniShop.png";

const portfolioItems = [
  {
    id: 1,
    category: "Portfolio",
    title: "BRC - Corporate",
    image: BrcHome,
    link: "https://brc.codexdevware.com",
  },
  {
    id: 2,
    category: "Management",
    title: "Quiz Management",
    image: ProjectImage,
    link: "https://ictcontest.codexdevware.com",
  },
  {
    id: 3,
    category: "Ecommerce",
    title: "Mini Dokan - Multi Vendor",
    image: MinidokanImage,
    link: "https://eshop.codexdevware.com",
  },

  {
    id: 4,
    category: "LMS",
    title: "LMS Website ",
    image: LMSImage,
    link: "https://academy.codexdevware.com",
  },
];

const categories = ["all", "Ecommerce", "LMS", "Portfolio", "Management"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[80px]">
      <Helmet>
        <title>
          Our Portfolio | Client Projects & Case Studies | Codex Devware
        </title>
        <meta
          name="description"
          content="See our successful software, website, and SaaS projects for clients in Bangladesh. Discover how Codex Devware can help your business grow."
        />
        <link rel="canonical" href="https://codexdevware.com/portfolio" />
        <meta
          property="og:title"
          content="Our Work | Codex Devware Portfolio"
        />
        <meta
          property="og:description"
          content="Explore our client projects — from custom software to websites and SaaS solutions — built for businesses in Bangladesh."
        />
        <meta property="og:url" content="https://codexdevware.com/portfolio" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[25px] font-sora lg:text-[40px] font-bold leading-normal  bg-gradient-to-r text from-[#02022D]  to-[#5B3CE8] text  bg-clip-text text-transparent">
            Our Recent Projects
          </h2>
          <p className="text-base text-gray-600">
            Discover our latest creative and marketing projects.
          </p>
        </div>

        <div className="flex flex-wrap justify-center space-x-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 text-base font-semibold rounded-lg transition ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-primary hover:text-white"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 gap-y-20">
          {filteredItems.map((item) => (
            <div key={item.id} className="relative mb-12">
              <div className="overflow-hidden rounded-[10px]">
                <img
                  src={item.image}
                  width={500}
                  height={300}
                  alt="portfolio"
                  className="w-full"
                />
              </div>
              <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white px-3 py-[34px] text-center shadow-portfolio border border-gray-300">
                <span className="mb-2 block text-sm font-medium text-primary">
                  {item.category}
                </span>
                <h3 className="mb-5 text-xl font-bold">{item.title}</h3>
                <a
                  href="#"
                  className="inline-block rounded-md border border-stroke px-7 mx-1 py-[10px] text-sm font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
                >
                  View Details
                </a>

                <a
                  target="_blank"
                  href={item?.link}
                  className="inline-block rounded-md border border-stroke mx-1 px-7 py-[10px] text-sm font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
                  rel="noreferrer"
                >
                  Live Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
