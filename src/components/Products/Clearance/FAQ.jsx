import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const details = [
  {
    id: 1,
    title: "How does HR Castle Software streamline HR processes?",
    content:
      "HR Castle Software automates key HR tasks such as recruitment, payroll, and employee management, reducing manual effort and increasing efficiency.",
  },
  {
    id: 2,
    title: "Is HR Castle Software suitable for small businesses?",
    content:
      "Yes! HR Castle Software is designed to scale and is perfect for businesses of all sizes looking to simplify HR operations efficiently.",
  },
  {
    id: 3,
    title: "Does HR Castle Software integrate with other tools?",
    content:
      "Absolutely! It integrates with various third-party applications such as accounting software, communication tools, and analytics platforms.",
  },
  {
    id: 4,
    title: "Can HR Castle Software help with compliance and regulations?",
    content:
      "Yes, it ensures compliance with labor laws by maintaining accurate records, generating reports, and automating regulatory updates.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-4">
      <div className="w-full">
        <h1 className="text-3xl md:text-4xl font-bold pb-8 text-center text-primary">
          Frequently Asked Questions
        </h1>

        <div className="max-w-3xl">
          {details.map((item, index) => (
            <div
              key={item.id}
              className="border-b border-gray-300 p-4 transition-all duration-300"
            >
              <button
                className="w-full flex items-center justify-between text-left text-lg md:text-xl font-medium focus:outline-none cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <span
                  className={`text-lg font-semibold ${
                    activeIndex === index ? "text-[#6142eb]" : "text-gray-800"
                  }`}
                >
                  {item.title}
                </span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-[#6142eb] text-xl" />
                ) : (
                  <FaChevronDown className="text-gray-500 text-xl" />
                )}
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-700 text-sm transition-all duration-300">
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <img
        src="/faq.svg"
        className="w-full sm:w-2/3 md:w-4/5"
        alt="FAQ Image"
      />
    </div>
  );
};

export default FAQ;
