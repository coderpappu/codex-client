import "aos/dist/aos.css";
import "../../Shared/CommonHomeTitle/CommonTitle.css";
const CommonTitle = ({ title, subtitle }) => {
  return (
    <div data-aos-anchor-placement="top-bottom" className="text-center mt-4">
      <h1 className=" font-sora lg:text-[40px] md:text-[32px] text-[22px] font-bold leading-normal title">
        {title}
      </h1>
      <p className="text-[#333] mt-1 lg:w-[516px] px-6 sm:w-[516px] md:w-[516px] xl:w-[516px] mx-auto  lg:text-[14px] text-[12px] xl:text-[16px] font-sora font-normal leading-5 text-center">
        {subtitle}
      </p>
    </div>
  );
};
export default CommonTitle;
