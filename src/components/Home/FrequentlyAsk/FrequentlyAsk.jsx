import { useState } from "react";
import "../FrequentlyAsk/Frequently.css";

import faqpic from "../../../assets/Home/FAG/faq.svg";

import ShowFrequently from "./ShowFrequently";

const FrequentlyAsk = () => {
  //main state
  const [activeElement, setActiveElement] = useState("element1");

  //frequently section data here
  const frequentlyData = [
    {
      title: "What services does Codex Devware offer?",
      description:
        "Codex Devware specializes in a range of digital solutions, including software development, tech consultancy, graphic design, and content creation.",
      element: "element1",
    },
    {
      title: "How can I contact Codex DevWare for inquiries?",
      description:
        "You can reach us through the Contact page on our website, where you'll find information on how to email or call our team. We're always eager to hear from you!",
      element: "element2",
    },
    {
      title: "Can Codex Devware customize solutions as needs?",
      description:
        "Absolutely! We pride ourselves on tailoring our services to meet the unique requirements of each client. Let's discuss your needs, and we'll create a customized solution for you.",
      element: "element3",
    },
    {
      title: "Does Codex Devware provide ongoing support?",
      description:
        "Yes, we offer post-launch support and maintenance services to ensure the continued success and optimal performance of the solutions we provide.",
      element: "element4",
    },
  ];
  //frequently section data here

  //this is main handle function
  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  //this is main handle function

  return (
    //main section started
    <section
      data-aos="zoom-in-up"
      className=" grid xl:grid-cols-2  allContainer mt-10 sm:0"
    >
      <div>
        <div className="md:px-10 xl:px-0 lg:px-0 sm:px-6 px-4 xl:text-left lg:text-left md:text-left text-center">
          <h2 className="text-[#6F4FFF] font-sora font-bold text-[18px] md:text-[20px] xl:text-[20px] leading-normal">
            FAQS
          </h2>
          <h1 className="title xl:text-[36px] lg:text-[34px] md:text-[34px]  text-[20px] sm:text-[28px] font-bold leading-normal">
            Do You Have Any Questions?
          </h1>
        </div>
        <div
          id="accordionExample"
          className="mt-8 flex flex-col gap-5 xl:w-[540px] md:px-10 xl:px-0 lg:px-0 sm:px-1 px-0"
        >
          {/* to show data on the single Components */}
          {frequentlyData.map((data, index) => (
            <ShowFrequently
              data={data}
              key={index}
              handleClick={handleClick}
              activeElement={activeElement}
            />
          ))}
          {/* to show data on the single Components */}
        </div>
      </div>

      {/* main frequently div image section area */}
      <div>
        <img
          draggable={false}
          className=" mx-auto xl:w-full xl:h-full w-full sm:w-[60%] md:w-[65%] md:h-[90%] lg:w-[70%]  "
          src={faqpic}
          alt="FAQ Img"
        />
      </div>
      {/* main frequently div image section area */}
    </section>
  );
};

export default FrequentlyAsk;
