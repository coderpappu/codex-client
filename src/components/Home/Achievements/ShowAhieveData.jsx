import CountUp from "react-countup";

const ShowAhieveData = ({ data, onCounter }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <img
        draggable={false}
        src={data.icon}
        alt="Team Image"
        className="h-11 w-11"
      />
      <h1 className=" font-sora lg:text-[40px] text-[32px] font-bold leading-5 text-[#02022D]">
        {onCounter && (
          <CountUp duration={5} start={0} end={data.count}>
            {data.count}
          </CountUp>
        )}
        +
      </h1>
      <h3 className=" text-[#000] font-sora lg:text-[16px] text-[14px] font-normal leading-5">
        {data.name}
      </h3>
    </div>
  );
};

export default ShowAhieveData;
