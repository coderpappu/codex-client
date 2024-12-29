import { useState } from "react";
import videoImg from "../../../assets/Home/Banner/jspromo.png";
import playIcon from "../../../assets/Home/Banner/play.png";
import VideoPart from "./VideoPart";
const VideoBanner = () => {
  const [isVideoOpen, setVideoOpen] = useState(false);
  const videoOpen = () => {
    setVideoOpen(true);
  };
  const videoClose = () => {
    setVideoOpen(false);
  };
  return (
    <section className=" cursor-pointer shadow-xl lg:mt-[30px] mb-6">
      <div onClick={videoOpen}>
        <div className="  relative w-[300px] sm:w-[400px] md:w-[500px] lg:w-[800px] lg:h-[455px] xl:w-[800px] xl:h-[455px] md:h-[285px] h-[172px] sm:h-[230px]  p-[6px]  bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 rounded-md">
          <img draggable={false}
            draggable={false}
            className=""
            src={videoImg}
            alt="Video Image"
          />
        </div>
        <div className="banner-shadows flex relative justify-center items-center ">
          <img draggable={false}
            draggable={false}
            className="  animate-button absolute xl:bottom-48 w-[55px] h-[55px]  md:w-[60px] md:h-[60px] lg:w-[85px] lg:h-[85px] xl:w-[85px] xl:h-[85px] lg:bottom-48 md:bottom-32 sm:bottom-28 bottom-14  cursor-pointer  "
            src={playIcon}
            alt="Play Icon"
          />
        </div>
      </div>
      <VideoPart
        isOpen={isVideoOpen}
        onClose={videoClose}
        setVideoOpen={setVideoOpen}
      />
    </section>
  );
};

export default VideoBanner;
