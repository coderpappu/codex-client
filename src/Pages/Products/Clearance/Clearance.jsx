import Banner from "../../../components/Products/Clearance/Banner";
import Features from "../../../components/Products/Clearance/Features";
import PayrollSystem from "../../../components/Products/Clearance/PayrollSystem";
import ProductDemo from "../../../components/Products/Clearance/ProductDemo";
import TechnologyCarousel from "../../../components/Products/Clearance/Technology";

const ClearancePage = () => {
  return (
    <>
      <Banner />
      <ProductDemo />
      {/* <Pricing /> */}
      {/* <Softwares /> */}
      <TechnologyCarousel />
      <PayrollSystem />

      <Features />

      {/* <RightHRManagement />
      <Infrastructure />
      <HRCastle />
      <HRManagement />
      <HRCastleFeatures />
      <EmployeeManagement /> */}

      <div className="my-12 bg-gradient-to-r from-[#02022d] to-[#5b3ce8] text-white py-12 sm:py-20">
        <div className="xl:allContainer  mx-auto flex flex-col sm:flex-row items-center justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-semibold pb-4">
              Available for new projects.
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Let’s Work Together
            </h2>
          </div>
          <button className="bg-gray-50 px-8 py-4 rounded-4xl font-semibold hover:bg-transparent hover:text-gray-50 text-gray-900 border-2 border-gray-50 cursor-pointer hover:border-gray-50 mt-6 sm:mt-0">
            Contact Us
          </button>
        </div>
      </div>

      {/* <FAQ /> */}
    </>
  );
};

export default ClearancePage;
