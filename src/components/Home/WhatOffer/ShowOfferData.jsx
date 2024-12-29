const ShowOfferData = ({ data }) => {
  return (
    <div className=" bg-white w-[280px] h-[180px] xl:w-[326px] xl:h-[220px]  cursor-pointer border shadow hover:shadow-md   ">
      <div className=" flex flex-col hover:scale-110  duration-700 justify-center items-center xl:py-10 py-4">
        <div className="bg-[#EFF6FF]  px-4 rounded-xl  py-4">
          <img src={data.icon} className=" w-[30px] h-[30px] " alt="" />
        </div>
        <h1 className=" xl:px-[68px] px-6 text-[#333] xl:py-6 py-8  text-center font-sora xl:text-[18px] text-[16px] font-semibold leading-normal">
          {data.text}
        </h1>
      </div>
    </div>
  );
};

export default ShowOfferData;
