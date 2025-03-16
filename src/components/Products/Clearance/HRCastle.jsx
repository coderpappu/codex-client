import React from "react";

const details = [
  {
    img: "/hr-castle-customization.svg",
    title: "Employee Attendance Tracking",
    content:
      "Track employee attendance with real-time updates, automated reports, and customizable settings for efficiency.",
  },
  {
    img: "/hr-castle-customization.svg",
    title: "Payroll Management",
    content:
      "Automate salary processing, tax calculations, and compliance management with accurate and efficient payroll solutions.",
  },
  {
    img: "/hr-castle-customization.svg",
    title: "Leave & Absence Management",
    content:
      "Manage employee leaves seamlessly with an integrated system for requests, approvals, and tracking.",
  },
  {
    img: "/hr-castle-customization.svg",
    title: "HR Analytics & Insights",
    content:
      "Gain valuable insights into employee performance and HR metrics with real-time reports and dashboards.",
  },
  {
    img: "/hr-castle-customization.svg",
    title: "Recruitment & Onboarding",
    content:
      "Simplify hiring processes with applicant tracking, interview scheduling, and automated onboarding workflows.",
  },
  {
    img: "/hr-castle-customization.svg",
    title: "Employee Self-Service",
    content:
      "Empower employees with a self-service portal for accessing payroll details, leave requests, and HR documents.",
  },
];

const HRCastle = () => {
  return (
    <div className="mt-28 container mx-auto flex flex-col-reverse lg:flex-row gap-8 items-center">
      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {details.map((item, index) => (
          <div
            key={index}
            className="p-5 text-center bg-blue-50 rounded-xl shadow-md transition-transform transform hover:scale-105"
          >
            <img
              src={item.img}
              className="w-16 mx-auto mb-3"
              alt={item.title}
            />
            <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
            <p className="text-gray-700 text-sm">{item.content}</p>
          </div>
        ))}
      </div>

      {/* Header Section */}
      <div className="px-4 w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-primary pb-4">
          Why HR Castle: HR & Payroll Software?
        </h1>
        <p className="text-gray-700 leading-7">
          HR Castle is the leading HR & Payroll Software in Bangladesh,
          simplifying HR operations for both employees and managers. It ensures
          accurate record-keeping, automates payroll, and enhances employee
          satisfaction. With a **powerful web and mobile application**, it
          offers robust features at competitive prices for companies of all
          sizes.
        </p>

        {/* Embedded YouTube Video */}
        <div className="relative mt-8 w-full mx-auto">
          <iframe
            src="https://www.youtube.com/embed/yv9L0mNFXgM?si=_-IeRg_OrJr59lS3"
            title="YouTube video player"
            className="w-full h-56 sm:h-80 lg:h-96 rounded-lg shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HRCastle;
