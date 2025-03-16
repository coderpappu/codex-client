import { Link } from "react-router-dom";
import arrowImg from "../../../assets/Home/Our Product/arrow-right.png";
const ShowProductCardData = ({ data }) => {
  return (
    //   show all data from the main components
    <div className=" product-bg  xl:w-[350px] w-[280px] h-[200px] xl:h-[200px] relative  rounded-lg shadow px-5 py-5">
      <div className="card-hover">
        <div className=" items-center flex gap-4">
          <img draggable={false} src={data.icon} alt="Card Images" />
          <h1 className=" text-[#02022D] font-sora text-[22px] font-bold leading-normal">
            {data.cardTitle}
          </h1>
        </div>
        <p className=" text-[#525252] xl:mt-3 mt-2 text-justify font-sora text-[12px] font-normal leading-normal">
          {data.des}
        </p>

        <div className=" flex justify-between items-center z-50">
          <button className="flex xl:mt-6 mt-4 gap-2 items-center justify-center text-[#1C008A] text-[13px] font-semibold leading-normal cursor-pointer">
            <Link to="/featuredProduct" className="flex gap-2 items-center">
              Explore More{" "}
              <img draggable={false} src={arrowImg} alt="Arrow Image" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowProductCardData;
