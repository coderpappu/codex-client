import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      className="relative w-full h-60 md:h-80 bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/hero-sec.png')" }}
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col items-start justify-center">
        <div className="xl:allContainer">
          {/* Banner Title */}
          <h1 className="text-white text-3xl md:text-5xl font-extrabold">
            E-Clearance
          </h1>

          {/* Breadcrumb Navigation */}
          <p className="text-gray-200 mt-2 text-sm md:text-lg flex items-center gap-2">
            Home
            <span className="text-blue-700">
              <FaAngleDoubleRight />
            </span>{" "}
            E-Clearance
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
