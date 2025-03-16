import React from "react";

const details = [
  {
    img: "/Attendance-Management.webp",
    title: "Time & Attendance",
    content:
      "Track employee work hours accurately with a cloud-based system for real-time attendance management.",
  },
  {
    img: "/Attendance-Management.webp",
    title: "Payroll Automation",
    content:
      "Automate payroll calculations, tax deductions, and compliance with a seamless integrated system.",
  },
  {
    img: "/Attendance-Management.webp",
    title: "Employee Self-Service",
    content:
      "Empower employees with a self-service portal to manage their profiles, leaves, and payroll details.",
  },
  {
    img: "/Attendance-Management.webp",
    title: "Recruitment & Onboarding",
    content:
      "Simplify hiring with an applicant tracking system, interview scheduling, and seamless onboarding.",
  },
  {
    img: "/Attendance-Management.webp",
    title: "Performance Management",
    content:
      "Monitor employee performance with real-time analytics, KPIs, and goal tracking tools.",
  },
  {
    img: "/Attendance-Management.webp",
    title: "HR Analytics & Insights",
    content:
      "Make data-driven HR decisions with AI-powered analytics and detailed reporting tools.",
  },
  {
    img: "/Attendance-Management.webp",
    title: "Leave & Absence Management",
    content:
      "Manage leave requests efficiently with automated approval workflows and real-time tracking.",
  },
  {
    img: "/Attendance-Management.webp",
    title: "Compliance & Security",
    content:
      "Ensure legal compliance and data security with end-to-end encryption and policy enforcement.",
  },
  {
    img: "/Attendance-Management.webp",
    title: "Mobile HR Solutions",
    content:
      "Access HR features on the go with a fully responsive mobile app for HR and payroll tasks.",
  },
];

const HRCastleFeatures = () => {
  return (
    <div className="container mx-auto py-10 mt-12">
      {/* Header Section */}
      <div className="text-center pb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          HR Castle Features: SaaS-Based HRMS & Payroll Software
        </h1>
        <p className="text-gray-700 leading-7 mt-4 max-w-2xl mx-auto">
          Explore our cloud-based **HR & Payroll Software** at your own pace.
          Schedule a demo or start your **free trial** today to experience
          Bangladesh’s leading **SaaS-based HRMS** solution.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {details.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg text-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HRCastleFeatures;
