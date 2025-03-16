import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import ManPromotion from "../../../assets/Products/Clearance/man-promotion.png";

const PayrollSystem = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between xl:allContainer py-8">
      {/* Left Section */}
      <div className="w-[50%]">
        <h1 className="text-3xl sm:text-4xl font-bold leading-10 text-primary pb-6">
          Effortless Clearance Management for Your Institute
        </h1>
        <p className="text-gray-600 leading-[40px] mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <AiOutlineCheckCircle className="text-green-600" size="20" />{" "}
            Auto-generate student clearance certificates with zero manual
            effort. <br></br>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {" "}
            <AiOutlineCheckCircle className="text-green-600" size="20" />{" "}
            Eliminate paperwork and reduce administrative costs. <br></br>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {" "}
            <AiOutlineCheckCircle className="text-green-600" size="20" />{" "}
            Provide seamless access for students and staff anytime, anywhere.{" "}
            <br></br>
          </div>
        </p>
        <button className="bg-primary text-white px-8 py-2 rounded-lg mt-6 hover:bg-blue-700 transition duration-300">
          Call Us
        </button>
      </div>

      {/* Right Section */}
      <div className="flex-1 mt-8 sm:mt-0">
        <img
          src={ManPromotion}
          alt="Payroll System"
          className="w-full sm:w-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default PayrollSystem;
