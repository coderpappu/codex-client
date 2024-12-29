const AboutText = ({ tabData, activeTab }) => {
  return (
    <>
      <h2 className="text-[#6F4FFF] md:text-[20px] text-[16px] leading-normal font-bold">
        {tabData[activeTab].title}{" "}
      </h2>
      <h1 className="text-[#02022D] md:px-40 lg:px-0 px-0 xl:px-0 md:text-[22px] text-[22px] sm:text-[28px] leading-normal mt-3 font-bold">
        {tabData[activeTab].title2}{" "}
      </h1>
      <p className="text-[#333] text-[12px] md:px-40 lg:px-0 px-0 xl:px-0 md:text-[14px] font-normal leading-normal mt-3">
        {tabData[activeTab].text}
      </p>
      <button className="bg-[#6F4FFF] text-white px-4 py-3 mt-5 font-semibold btnz text-[15px] rounded-lg">
        Check more
      </button>
    </>
  );
};

export default AboutText;
