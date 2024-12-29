import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import customer from "../../../assets/Home/WhyWorking/customer.svg";
import memberLove from "../../../assets/Home/WhyWorking/customerLove.svg";
import GoalPic from "../../../assets/Home/WhyWorking/Goal.svg";
import GrowPic from "../../../assets/Home/WhyWorking/GrowthPic.png";
import member from "../../../assets/Home/WhyWorking/member.svg";
import workingImg from "../../../assets/Home/WhyWorking/MobileMan.png";
import redLine from "../../../assets/Home/WhyWorking/redLine.svg";
import success from "../../../assets/Home/WhyWorking/success.svg";
import yellowLine from "../../../assets/Home/WhyWorking/yellowMan.svg";
import "./Working.css";

const Working = () => {
  const [onCounter, setOnCounter] = useState(false);
  const workingCard = [
    {
      icon: customer,
      count: 20,
      title: "Happy Customer",
    },
    {
      icon: success,
      count: 25,
      title: "Successful Projects",
    },
    {
      icon: member,
      count: 15,
      title: "Team Member",
    },
    {
      icon: memberLove,
      count: 22,
      title: "Customer Satfication",
    },
  ];

  return (
    <ScrollTrigger
      onEnter={() => {
        setOnCounter(true);
      }}
      onExit={() => {
        setOnCounter(false);
      }}
    >
      <div data-aos="zoom-in-up" className=" allContainer xl:mt-5 mt-24">
        <div className=" flex xl:justify-around xl:flex-row flex-col mx-auto xl:gap-0 gap-6">
          <div
            style={{
              backgroundImage: `url(${workingImg})`,
            }}
            className="relative mx-auto h-72 w-72 lg:h-[450px] lg:w-[450px] md:h-[400px] md:w-[400px] xl:h-[450px] xl:w-[450px] bg-cover bg-center mb-14"
          >
            {/* Why Working Image Top Card */}

            <div className="flex flex-col gap-1 absolute -top-16 -left-3   md:-top-16 md:-left-6 lg:-top-16 sm:-left-6    sm:-top-16 lg:-left-6   xl:-top-16 xl:-left-6  box-shadow-work w-[136px] lg:w-44 lg:h-44 h-[142px] md:w-44 md:h-40   ">
              <img
                draggable={false}
                className="px-4 py-3 w-14 lg:w-16"
                src={GoalPic}
                alt="Goal Pic"
              />
              <h2 className="lg:text-[22px] text-[16px] px-4 font-semibold leading-6">
                {onCounter && (
                  <CountUp start={0} end={250} duration={4}>
                    25000
                  </CountUp>
                )}
                {""}
                00{" +"}
              </h2>
              <p className="lg:text-[13px] text-[11px] px-4 leading-6 font-normal text-[#EE609C]">
                Total Customers
              </p>
              <div className="flex px-4 -space-x-2 overflow-hidden">
                <img
                  draggable={false}
                  className="inline-block xl:h-8   h-6 xl:w-8  w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Team Member 1"
                />
                <img
                  draggable={false}
                  className="inline-block xl:h-8   h-6 xl:w-8  w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Team Member 2"
                />
                <img
                  draggable={false}
                  className="inline-block xl:h-8   h-6 xl:w-8  w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt="Team Member 3"
                />

                <button className="xl:h-8   h-6 xl:w-8  w-6  bg-[#5E44FF] text-white rounded-full">
                  +
                </button>
              </div>
            </div>

            {/* Why Working Image Top Card End */}

            {/* Why Working Image Bottom Card */}
            <div className="flex gap-2 bottom-card absolute  box-shadow-work lg:w-72 lg:h-24 md:w-60 md:h-24 w-48 h-20  items-center mx-auto  xl:-right-16   xl:-bottom-14 lg:-right-16  md:-right-16 sm:-right-16  sm:-bottom-14    -right-2  -bottom-14   md:-bottom-14 lg:-bottom-14">
              <img
                draggable={false}
                className="px-3 py-4"
                src={GrowPic}
                alt="Grow Pic"
              />
              <div className="text-left ">
                <h3 className="lg:text-[20px] text-[12px] font-semibold leading-6">
                  {" "}
                  Total Growth
                </h3>
                <img
                  draggable={false}
                  className="h-4 md:w-40 w-20 animate-fadeIn"
                  src={yellowLine}
                  alt="Yellow Line"
                />
                <img
                  draggable={false}
                  className="h-[6px] md:w-20 w-12 animate-fadeIn "
                  src={redLine}
                  alt="Red Line"
                />
              </div>
            </div>
            {/* Why Working Image Bottom Card */}
          </div>
          <div>
            {/*Why Working Text */}
            <div className="  xl:w-[500px] lg:w-[500px] md:w-[500px] text-center mx-auto xl:mx-0 xl:text-left">
              <h1 className=" leading-normal xl:mt-0 mt-5 font-sora text-[#6F4FFF] font-bold text-[16px] lg:text-[22px]">
                Why choose us{" "}
              </h1>
              <h2 className="text-[25px] font-sora lg:text-[40px] font-bold leading-normal  bg-gradient-to-r text from-[#02022D]  to-[#5B3CE8] text  bg-clip-text text-transparent">
                Why Working With Us{" "}
              </h2>
              <p className=" text-center font-sora lg:text-justify mt-2 sm:px-10 px-10 xl:px-2 text-[#333] text-[13px] lg:text-[16px] font-normal leading-[22px]">
                Our driving force is to make a positive impact on the world
                through my work. we believe that everyone has the potential to
                contribute something meaningful, and we are committed to using
                our skills and talents to make a difference.
              </p>
            </div>
            {/*Why Working Text */}

            <div className=" grid lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 lg:px-20 md:px-20  xl:px-0  gap-4 py-6">
              {/* Maping the all card data from array */}
              {workingCard.map((card, index) => (
                <ScrollTrigger
                  key={index}
                  onEnter={() => {
                    setOnCounter(true);
                  }}
                  onExit={() => {
                    setOnCounter(false);
                  }}
                >
                  <div className="flex gap-2 box-shadow-work sm:w-[400px] md:w-full w-72 xl:w-72 h-28  items-center mx-auto ">
                    <img
                      draggable={false}
                      className="px-5 py-6"
                      src={card.icon}
                      alt="Card Icon"
                    />
                    <div className="text-left ">
                      <h3 className="text-[18px] font-semibold leading-6">
                        {" "}
                        {onCounter && (
                          <CountUp start={0} end={card.count} duration={6}>
                            {card.count}
                          </CountUp>
                        )}
                        {"0+"}
                      </h3>
                      <p className="text-[13px] leading-6 font-normal text-[#EE609C]">
                        {card.title}
                      </p>
                    </div>
                  </div>
                </ScrollTrigger>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Working;
