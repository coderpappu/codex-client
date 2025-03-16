import React from "react";

const HRManagement = () => {
  return (
    <div className="container mx-auto">
      {/* First Section */}
      <div className="flex flex-col md:flex-row mt-20 px-6 sm:px-12 gap-6 items-center">
        {/* Left Side */}
        <img
          src="/all-in-one.svg"
          alt="HR Management Software"
          className="w-3/4 sm:w-1/2 mx-auto mb-8 sm:mb-0"
        />

        {/* Right Side */}
        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
            HR Management Software – All in One
          </h1>
          <p className="text-gray-700 leading-7 mb-6">
            Storing information electronically can improve efficiency in
            recording and finding information. HR Software used by companies can
            be beneficial where information is routinely lost or misplaced, or
            where large filing cabinets are needed to contain the information of
            a large workforce. <br />
            <br />
            In addition to being able to store the information using less space
            and find needed data in seconds, electronic data can also be
            analyzed for strategic purposes and better secured against breaches
            and hacking. Contact us today to experience the best HR Management
            Software in Bangladesh.
          </p>
          <button className="px-8 py-4 bg-primary text-white font-semibold mt-6 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">
            Get HR Castle
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col-reverse md:flex-row mt-20 px-6 sm:px-12 gap-6 items-center">
        {/* Left Side */}
        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
            HR Management Software – All in One
          </h1>
          <p className="text-gray-700 leading-7 mb-6">
            Storing information electronically can improve efficiency in
            recording and finding information. HR Software used by companies can
            be beneficial where information is routinely lost or misplaced, or
            where large filing cabinets are needed to contain the information of
            a large workforce. <br />
            <br />
            In addition to being able to store the information using less space
            and find needed data in seconds, electronic data can also be
            analyzed for strategic purposes and better secured against breaches
            and hacking. Contact us today to experience the best HR Management
            Software in Bangladesh.
          </p>
          <button className="px-8 py-4 bg-primary text-white font-semibold mt-6 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">
            Get HR Castle
          </button>
        </div>

        {/* Right Side */}
        <img
          src="/all-in-one.svg"
          alt="HR Management Software"
          className="w-3/4 sm:w-1/2 mx-auto mb-8 sm:mb-0"
        />
      </div>
    </div>
  );
};

export default HRManagement;
