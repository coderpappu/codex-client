import cardImg1 from "../../../assets/Home/Work Progress/cardImg1.svg";
import cardImg2 from "../../../assets/Home/Work Progress/cardImg2.svg";
import cardImg3 from "../../../assets/Home/Work Progress/cardImg3.svg";
import cardImg4 from "../../../assets/Home/Work Progress/cardImg4.svg";
import ArrowUp from "../../../assets/Home/Common SVG Images/ArrowUp.png";
import cardArrow from "../../../assets/Home/Common SVG Images/arrowDown.png";
const WorkProcess = () => {
  return (
    <div data-aos="zoom-in-up">
      <h1 className=" font-sora my-6 lg:text-[22px] text-[18px] mt-10 font-bold leading-normal text-center text-[#6F4FFF]">
        Process{" "}
      </h1>
      <div className="text-center mt-4">
        <h1 className=" font-sora lg:text-[40px] md:text-[32px] text-[22px] font-bold leading-normal title">
          Workflow Excellence Unleashed
        </h1>
        <p className="text-[#333] mt-1 px-6 sm:w-[516px] md:w-[750px] mx-auto  lg:text-[14px] text-[12px] xl:text-[16px] font-sora font-normal leading-5 text-center">
          We begin with thorough research, followed by creative designing,
          precise development, and conclude with a seamless delivery. This
          structured process ensures our projects meet high standards and client
          expectations.
        </p>
      </div>

      {/* Main Container  */}
      <div className=" grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 allContainer xl:mt-20 mt-10">
        {/* ====First Card======= */}
        <div className="flex flex-col justify-center items-center">
          <div className=" h-16 w-16 mb-6 flex justify-center items-center rounded-[8px] bg-[#FFFFFF] shadow-lg">
            <h1 className=" text-[#5849FF] font-sora text-[24px] font-bold leading-normal">
              1
            </h1>
          </div>
          <div className=" flex justify-center items-center relative">
            <img
              className="lg:w-52 lg:h-52 h-48 w-48"
              src={cardImg1}
              draggable={false}
              alt="Card Image One"
            />
            <img
              draggable={false}
              className=" w-20 h-6 mx-auto xl:block lg:block md:block hidden absolute md:left-60 lg:left-72 xl:left-56 top-20"
              src={cardArrow}
              alt="Card Image Arrow"
            />
          </div>
          <div className=" text-center">
            <h2 className=" xl:text-[22px] text-[20px]  mt-5 font-semibold leading-5 font-sora text-black">
              Research
            </h2>
            <p className="w-[251px]  text-[14px] mt-2 font-normal leading-5 font-sora text-[#333]">
              Thorough research informs, guides, and fuels our creative design
              process effectively.{" "}
            </p>
          </div>
        </div>
        {/* ======Second Card =======*/}
        <div className="flex flex-col justify-center items-center">
          <div className=" h-16 w-16 mb-8 xl:mt-0 mt-5 lg:mt-0 md:mt-0 flex justify-center items-center rounded-[8px] bg-[#FFFFFF] shadow-lg">
            <h1 className=" text-[#5849FF] font-sora text-[24px] font-bold leading-normal">
              2
            </h1>
          </div>
          <div className=" flex justify-center items-center relative">
            <img
              draggable={false}
              className="lg:w-52 lg:h-52 h-48 w-48"
              src={cardImg2}
              alt="Card Image One"
            />
            <img
              draggable={false}
              className=" w-20 h-6 xl:block lg:block md:block hidden  absolute xl:left-56 top-20"
              src={cardArrow}
              alt="Card Image Arrow"
            />
          </div>
          <div className=" text-center">
            <h2 className=" text-[18px] mt-5 font-semibold leading-5 font-sora text-black">
              Designing
            </h2>
            <p className="w-[251px]  text-[14px] mt-2 font-normal leading-5 font-sora text-[#333]">
              In design, creativity thrives, shaping ideas into visually
              compelling solutions.{" "}
            </p>
          </div>
        </div>
        {/* ======Third Card =======*/}
        <div className="flex flex-col justify-center order-none md:order-4 xl:mt-0 lg:mt-6 md:mt-6 mt-0 lg:order-4 xl:order-none items-center">
          <div className=" h-16 w-16  mb-8 xl:mt-0 mt-5 lg:mt-0 md:mt-0 flex justify-center items-center rounded-[8px] bg-[#FFFFFF] shadow-lg">
            <h1 className=" text-[#5849FF] font-sora text-[24px] font-bold leading-normal">
              3
            </h1>
          </div>
          <div className=" flex justify-center items-center relative">
            <img
              draggable={false}
              className="lg:w-52 lg:h-52 h-48 w-48"
              src={cardImg3}
              alt="Card Image One"
            />
            <img
              draggable={false}
              className=" w-20 h-6 absolute  lg:hidden md:hidden hidden  xl:flex justify-center md:left-60 lg:left-72 xl:left-56 top-20"
              src={cardArrow}
              alt="Card Image Arrow"
            />
            <img
              draggable={false}
              className=" w-20 h-6 absolute  lg:block md:block hidden  xl:hidden justify-center lg:right-72 md:right-60 xl:left-48 top-20"
              src={ArrowUp}
              alt="Card Image Arrow"
            />
          </div>
          <div className=" text-center">
            <h2 className=" text-[18px] mt-5 font-semibold leading-5 font-sora text-black">
              Development
            </h2>
            <p className="w-[251px]  text-[14px] mt-2 font-normal leading-5 font-sora text-[#333]">
              Innovation unfolds during dedicated development, shaping ideas
              seamlessly
            </p>
          </div>
        </div>
        {/* ======Fourth Card =======*/}
        <div className="flex flex-col justify-center order-none md:order-3 xl:mt-0 lg:mt-6 md:mt-6 mt-0 lg:order-3 xl:order-none items-center">
          <div className=" h-16 w-16  mb-8 xl:mt-0 mt-5 lg:mt-0 md:mt-0 flex justify-center items-center rounded-[8px] bg-[#FFFFFF] shadow-lg">
            <h1 className=" text-[#5849FF] font-sora text-[24px] font-bold leading-normal">
              4
            </h1>
          </div>
          <div className=" flex justify-center items-center ">
            <img
              draggable={false}
              className="lg:w-52 lg:h-52 h-48 w-48"
              src={cardImg4}
              alt="Card Image One"
            />
          </div>

          <div className=" text-center">
            <h2 className=" text-[18px] mt-5 font-semibold leading-5 font-sora text-black">
              Deliver
            </h2>
            <p className="w-[251px]  text-[14px] mt-2 font-normal leading-5 font-sora text-[#333]">
              Flawless execution, on-time delivery—our commitment to project
              culmination excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
