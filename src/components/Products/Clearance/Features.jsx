import {
  Cloud,
  DollarSign,
  RefreshCcw,
  Settings,
  Terminal,
  Users,
} from "lucide-react"; // Lucide Icons
import React from "react";
import ReportImg from "../../../assets/Products/Clearance/report.png";
const featuresData = [
  {
    icon: <Terminal size={24} />,
    title: "Student Clearance Tracking",
    content:
      "Easily monitor and approve student clearance requests with an automated workflow, reducing paperwork and delays.",
  },
  {
    icon: <DollarSign size={24} />,
    title: "Payment Management",
    content:
      "Keep track of student fees, outstanding balances, and payment history with a seamless financial management system.",
  },
  {
    icon: <Cloud size={24} />,
    title: "Automated Report Generation",
    content:
      "Generate detailed reports on clearance status, financial transactions, and student records with a single click.",
  },
  {
    icon: <Users size={24} />,
    title: "User Role Management",
    content:
      "Assign different roles to users, such as administrators, finance staff, and department heads, to ensure controlled access and data security.",
  },
  {
    icon: <Settings size={24} />,
    title: "Fully Customizable SaaS Solution",
    content:
      "As a SaaS-based application, every feature is customizable—from workflows to user roles and report formats.",
  },
  {
    icon: <RefreshCcw size={24} />,
    title: "Customizable Workflows",
    content:
      "Adapt the software to fit your institute’s specific clearance processes, ensuring flexibility and efficiency.",
  },
];

const Features = () => {
  return (
    <div className="mt-20 xl:allContainer flex flex-col lg:flex-row items-center gap-0 sm:gap-12">
      {/* Left section */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl font-bold pb-4 text-primary">
          Benefits of an Integrated Clearance System
        </h1>
        <p className="text-gray-700 leading-7 pb-6">
          An integrated Clearance Management System enhances efficiency by
          streamlining processes like student clearance tracking, payment
          management, and report generation. It reduces administrative burdens,
          ensures compliance, and fosters better decision-making through
          centralized data and automated workflows.
        </p>
        <img src={ReportImg} className="w-full" alt="HR Benefits" />
      </div>

      {/* Right section */}
      <div className="flex-1 mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {featuresData.map((item, index) => (
          <div
            key={index}
            className="p-6 border border-gray-300 rounded-lg transition-all duration-300 hover:border-l-4 hover:border-blue-600"
          >
            <div className="text-gray-800 mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold text-black">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
