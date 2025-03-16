import React from "react";
import { FaCircleChevronRight } from "react-icons/fa6";

const Infrastructure = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Side */}
      <div className="left w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary pb-4">
          Infrastructure for HR and Payroll Software
        </h1>
        <p className="text-gray-600 leading-7 mb-4">
          To successfully implement HR and payroll software, educational
          institutions require a robust infrastructure that encompasses reliable
          hardware, secure network connections, and comprehensive IT support.
          Ensuring data integrity and security must be a top priority, with
          appropriate measures such as data encryption and regular system
          updates. Training staff on the effective use of the software is
          equally important, enhancing adoption rates and maximizing the
          software’s capabilities. With a solid infrastructure in place,
          organizations can fully realize the benefits of their HR systems.
        </p>
        <p className="text-gray-600 py-4">
          Payroll software that is an extremely effective and user-friendly
          solution is readily available.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
          <li className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg cursor-pointer">
            <FaCircleChevronRight className="text-blue-800" />
            This is an item
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg cursor-pointer">
            <FaCircleChevronRight className="text-blue-800" />
            This is an item
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg cursor-pointer">
            <FaCircleChevronRight className="text-blue-800" />
            This is an item
          </li>

          <li className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg cursor-pointer">
            <FaCircleChevronRight className="text-blue-800" />
            This is an item
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg cursor-pointer">
            <FaCircleChevronRight className="text-blue-800" />
            This is an item
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg cursor-pointer">
            <FaCircleChevronRight className="text-blue-800" />
            This is an item
          </li>
        </ul>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-gray-600">
          <img
            src="/check-price-hr-castle.webp"
            alt="HR Software Pricing"
            className="w-01 rounded-lg shadow-md"
          />
          <p className="text-center sm:text-left">
            Are you looking for HR & payroll software that can help automate
            your processes?
            <br />
            <span className="font-semibold text-blue-800">
              Check out our pricing for next-level HR Software in Bangladesh.
            </span>
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="right w-full bg-gradient-to-b from-blue-100 to-[#DCE2FF] p-6 sm:p-12 rounded-2xl mt-8 sm:mt-0 shadow-lg flex flex-col items-center">
        <p className="text-gray-600 text-xl leading-8 text-center py-10">
          “The reason behind choosing PiHR is they know the pain points and
          customer journeys, and they have a fully structured support team.”
        </p>
        <img
          src="/img6.webp"
          alt="Testimonial"
          className="w-full sm:w-3/4 mt-4 rounded-b-2xl"
        />
      </div>
    </div>
  );
};

export default Infrastructure;
