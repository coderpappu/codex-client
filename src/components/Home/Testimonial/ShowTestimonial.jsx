const ShowTestimonial = ({ data, index, activeTab }) => {
  return (
    <div
      className={` items-center text-center sm:mx-10 md:mx-20 lg:mx-0 xl:w-96`}
    >
      <div
        className={`relative flex flex-col items-center ${
          activeTab === index ? "bg-[#02022D]" : "bg-white"
        } px-8 py-6 rounded-lg `}
      >
        <div className="flex justify-center items-center absolute bottom-0 z-10">
          <div
            className={`mx-auto ${
              activeTab === index ? "bg-[#02022D]" : "bg-white"
            } rotate-45 absolute h-9 w-9`}
          ></div>
        </div>

        <h1
          className={`${
            activeTab === index ? "text-[#FF7D00] font-bold" : "text-[#a2a2a2]"
          } text-[18px] font-sora`}
        >
          Customer Support
        </h1>
        <p
          className={`${
            activeTab === index ? "text-white" : "text-[#adadad]"
          } font-normal py-3 leading-6 font-sora text-justify `}
        >
          {data.text}
        </p>
      </div>

      {/* profile text */}
      <div className=" mx-auto mt-8  flex flex-col justify-center items-center ">
        <img draggable={false}
          src={data.icon}
          className={`mx-auto  ${
            activeTab === index
              ? "w-12 opacity-100 h-12 rounded-full"
              : "w-12 opacity-75 h-12 rounded-full "
          }`}
          alt="Test"
        />
        <h1
          className={`${
            activeTab === index ? "text-[#6F4FFF] font-bold" : "text-[#B7A7FF]"
          } text-center text-[16px] font-bold leading-6 mt-3`}
        >
          {data.author}
        </h1>
        <h2
          className={`${
            activeTab === index ? "text-[#000] font-bold" : "text-[#808080]"
          } leading-6 text-center text-[14px]`}
        >
          {data.designation}
        </h2>
      </div>
    </div>
  );
};

export default ShowTestimonial;
