import React from "react";

const EmployeeManagement = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row mt-16 items-center gap-12 container mx-auto">
      {/* Left Side (Text) */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold pb-4 text-primary">
          Employee Management Software That Gives You Control
        </h1>
        <p className="text-gray-700 leading-7 pb-6">
          The Project Module equips educators and administrators with essential
          tools for managing academic and operational projects efficiently. It
          enables task assignments, deadlines, real-time tracking, and resource
          management for better budgeting. With reporting features, teams can
          assess project outcomes and enhance strategic planning.
        </p>
        <a
          href="#"
          className="inline-block text-white bg-primary hover:bg-blue-700 transition-all duration-300 px-6 py-2 rounded-lg shadow-md"
        >
          Explore Employee Management Tool →
        </a>
      </div>

      {/* Right Side (Image) */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/img7.webp"
          alt="Employee Management"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default EmployeeManagement;
