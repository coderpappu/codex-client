import React from "react";
import MobileApp from "../../../assets/Products/Clearance/mobile-mockup-clearance.png";
import ReportDashboard from "../../../assets/Products/Clearance/report-mockup-2.png";
import StudentDetails from "../../../assets/Products/Clearance/student-details.png";
import StudentList from "../../../assets/Products/Clearance/student-list.png";
const ProductDemo = () => {
  return (
    <div className="xl:allContainer ">
      {/* Product demo 1 */}
      <div className="mt-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h1 className="text-4xl font-bold pb-4 text-primary">E-Clearance</h1>
          <p className="text-gray-500 max-w-lg text-center sm:text-left">
            E-Clearance by Codex Devware – The Smartest Way to Manage Student
            Clearance! Automate due tracking, streamline approvals, and generate
            clearance certificates effortlessly. Fast, paperless, and
            hassle-free!
          </p>
        </div>
        <img
          src={ReportDashboard}
          className="w-full mt-10 rounded-lg "
          alt="HR Castle"
          aria-label="HR Castle product demonstration"
        />
      </div>

      {/* Product demo 2 */}
      <div className="mt-16 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <img
            src={MobileApp}
            className="mt-6 w-full sm:w-3/4 md:w-lg mx-auto"
            alt="Mobile HR Solution"
            aria-label="Mobile HR Solution"
          />
        </div>
        <div className="flex flex-col-reverse lg:flex-col flex-1 text-gray-700 space-y-4">
          <h1 className="text-3xl sm:text-4xl text-primary font-bold leading-snug">
            The Future of Student Clearance Management!
          </h1>
          <img
            src={StudentList}
            className="w-full  mx-auto rounded-lg shadow-md"
            alt="HR Modules"
            aria-label="HR modules"
          />

          <ul className="list-disc mt-6 px-5 text-gray-700 space-y-2 pb-4">
            <li>Automated & Paperless Clearance</li>
            <li>Seamless University Integration</li>
            <li>Instant Certificate Generation</li>
          </ul>

          <p className="leading-relaxed pt-4">
            E-Clearance by Codex Devware is a smart and efficient clearance
            solution for universities and polytechnics. It simplifies the
            clearance process by tracking student dues, managing approvals, and
            generating clearance certificates—all in one platform!
          </p>
          <p>
            Our system ensures a fast, hassle-free, and transparent clearance
            process, helping institutions save time and eliminate manual errors.
          </p>
        </div>
      </div>

      {/* Product demo 3 */}
      <div className="mt-8 flex flex-col lg:flex-row items-center gap-8">
        <div className="">
          <h1 className="text-3xl sm:text-4xl font-bold pb-6 text-primary">
            Student Profile & Reports – Everything at a Glance!
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Stay informed with a comprehensive student dashboard that provides a
            detailed profile, real-time payment due reports, and insightful
            charts to track financial status with ease. With E-Clearance,
            students and institutions can monitor clearance progress, review
            reports, and ensure a smooth process—all in one place!
            <br />
            <br />
            📞 Need a demo? Call us at +880 1865-139597
          </p>
          <button className="mt-6 bg-primary transition px-3 py-2 md:px-6 md:py-4 text-white font-bold rounded-lg shadow-md">
            Get Started
          </button>
        </div>
        <div className="">
          <img
            src={StudentDetails}
            className="w-full mx-auto border border-gray-300"
            alt="HR Software"
            aria-label="HR Software"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDemo;
