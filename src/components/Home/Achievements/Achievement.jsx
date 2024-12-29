import { useState } from "react";
import "../Achievements/achivement.css";
import achiveImg from "../../../assets/Home/AchievementsSection/achievement.png";

import teamImg from "../../../assets/Home/AchievementsSection/team.png";
import projectImg from "../../../assets/Home/AchievementsSection/project.png";
import experinceImg from "../../../assets/Home/AchievementsSection/experince.png";
import clientImg from "../../../assets/Home/AchievementsSection/client.png";

import ShowAhieveData from "./ShowAhieveData";
import ScrollTrigger from "react-scroll-trigger";
import CommonTitle from "../../../components/Shared/CommonHomeTitle/CommonTitle";

const Achievement = () => {
  const [onCounter, setOnCounter] = useState(false);
  const achiveData = [
    { icon: teamImg, count: 69, name: "Team Member" },
    { icon: projectImg, count: 76, name: "Project Completed" },
    { icon: experinceImg, count: 52, name: "Professional Experinces" },
    { icon: clientImg, count: 98, name: "Happy Client" },
  ];
  return (
    //ScrollTrigger When page will be scrolled
    <ScrollTrigger
      onEnter={() => {
        setOnCounter(true);
      }}
      onExit={() => {
        setOnCounter(false);
      }}
    >
      <div data-aos="zoom-in-up" className=" allContainer px-6 py-14">
        <div className=" mx-auto shadows lg:h-[350px] xl:h-[350px] md:w-[640px]  lg:w-[860px] xl:w-[1078px] relative">
          <img
            draggable={false}
            src={achiveImg}
            className=" xl:w-44 xl:h-44 sm:w-24 sm:h-24 md:w-28 md:h-28 w-20 h-20 absolute md:-top-10 md:-left-10 sm:-top-8 -top-8 -left-6 sm:-left-4 lg:-top-10 lg:-left-10 xl:-top-20 xl:-left-14 "
            alt="Achievement Image"
          />
          <div className=" py-1">
            <CommonTitle
              title={"Our Achievement"}
              subtitle={
                "We build high-end software that skyrockets your business growth. Let;s explore our products and choose the best fit for your business"
              }
            />
          </div>

          <div className="w-[70%] xl:w-full mx-auto lg:w-full md:w-1/2 flex flex-wrap xl:flex-row justify-center items-center xl:gap-28 gap-12 py-8 px-8">
            {achiveData.map((data, index) => (
              <ShowAhieveData data={data} onCounter={onCounter} key={index} />
            ))}
          </div>
        </div>
      </div>
      {/* ScrollTrigger When page will be scrolled */}
    </ScrollTrigger>
  );
};

export default Achievement;
