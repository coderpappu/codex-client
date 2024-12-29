const AboutTabButton = ({ activeTab, handleTabClick }) => {
  return (
    <>
      {/* first tab button */}
      <div
        onClick={() => handleTabClick(0, "web")}
        className={`flex items-center flex-wrap cursor-pointer gap-5 ${
          activeTab === 0 ? " duration-500 animate-slideInDown  rounded-sm" : ""
        } `}
      >
        <button
          className={` flex flex-wrap items-center ${
            activeTab === 0
              ? "  bg-[#6F4FFF] duration-500  text-white"
              : "text-[#4D40AF]   bg-[#D7E6FA]"
          } justify-center   rounded-full md:px-2 md:py-2 px-1 py-1`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="md:w-10 md:h-10 w-7 h-7 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>{" "}
        </button>{" "}
        <span className="text-[20px]  md:block hidden font-normal text-center">
          Web
        </span>
      </div>
      {/* second tab button */}
      <div
        onClick={() => handleTabClick(1, "app")}
        className={`flex items-center flex-wrap cursor-pointer   gap-5 ${
          activeTab === 1
            ? " duration-500 animate-slideInDown   rounded-sm"
            : ""
        } `}
      >
        <button
          className={` flex flex-wrap items-center ${
            activeTab === 1
              ? "  bg-[#6F4FFF] duration-500  text-white"
              : "text-[#4D40AF]   bg-[#D7E6FA]"
          } justify-center   rounded-full px-2 py-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="md:w-10 md:h-10 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>{" "}
        </button>{" "}
        <span className="text-[20px]  font-normal md:block hidden">App</span>
      </div>
      {/* third tab button */}
      <div
        onClick={() => handleTabClick(2, "seo")}
        className={`flex items-center cursor-pointer flex-wrap ${
          activeTab === 2 ? " duration-500 animate-slideInDown rounded-sm" : ""
        }  md:justify-start gap-5 justify-center`}
      >
        <button
          className={` flex flex-wrap  items-center ${
            activeTab === 2
              ? "  bg-[#6F4FFF] duration-500  text-white"
              : "text-[#4D40AF]   bg-[#D7E6FA]"
          } justify-center   rounded-full px-2 py-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="md:w-10 md:h-10 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
            />
          </svg>
        </button>{" "}
        <span className="text-[20px] text-black font-normal md:block hidden">
          SEO
        </span>
      </div>
      {/* fourth tab button */}
      <div
        onClick={() => handleTabClick(3, "graphics")}
        className={`flex items-center cursor-pointer flex-wrap ${
          activeTab === 3 ? " duration-500 animate-slideInDown rounded-sm" : ""
        }  justify-center md:justify-start gap-5`}
      >
        <button
          className={` flex flex-wrap items-center ${
            activeTab === 3
              ? "  bg-[#6F4FFF] duration-500  text-white"
              : "text-[#4D40AF]   bg-[#D7E6FA]"
          } justify-center   rounded-full px-2 py-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="md:w-10 md:h-10 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </button>{" "}
        <span className="text-[20px] text-black font-normal md:block hidden">
          Graphics
        </span>
      </div>
    </>
  );
};

export default AboutTabButton;
