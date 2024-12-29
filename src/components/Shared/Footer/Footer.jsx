import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Home/Logos/logo.svg";
import facebook from "../../../assets/Home/Social Icon/facebook.svg";
import insta from "../../../assets/Home/Social Icon/insta.svg";
import linkdin from "../../../assets/Home/Social Icon/linkdin.svg";
import youtube from "../../../assets/Home/Social Icon/yt.svg";
import "../Footer/Footer.css";
import FooterCompanyMenu from "./FooterCompanyMenu";
import FooterProjectsMenu from "./FooterProjectsMenu";
import FooterResourcesMenu from "./FooterResourcesMenu";

const Footer = () => {
  const [menuStates, setMenuStates] = useState("");
  const [menuHide, setMenuHide] = useState(true);

  // Toggle main function hide show menu
  const toggleMenu = (menuName) => {
    setMenuStates(menuName);
    setMenuHide(!menuHide);
  };
  // const style = { boxShadow: "0px 30px 50px 0px rgba(0, 0, 0, 0.09)" };

  const MobileTabletFooterMenu = [
    {
      title: "Explore Codex Devware",
      subtitle: [
        {
          linkTitle: "About Us",
          link: "/aboutUs",
        },
        {
          linkTitle: "Testimonials",
          link: "/",
        },
        {
          linkTitle: "Our Team",
          link: "/aboutUs",
        },
        {
          linkTitle: "FAQS",
          link: "/aboutUs",
        },
      ],
    },
    {
      title: "Connect With Us",
      subtitle: [
        {
          linkTitle: "Youtube",
          link: "https://www.youtube.com/channel/UC3KTj2-Cqn4j3Gxo3UVm9FQ",
        },
        {
          linkTitle: "Facebook",
          link: "https://www.facebook.com/codexdevwareacad",
        },
        {
          linkTitle: "Instagram",
          link: "https://www.instagram.com/academy.codexdevware/",
        },
        {
          linkTitle: "LinkedIn",
          link: "https://www.linkedin.com/company/codex-devware/",
        },
      ],
    },
    {
      title: "Quick Links",
      subtitle: [
        {
          linkTitle: "Services",
          link: "services/web_development/3",
        },
        {
          linkTitle: "Contact Us",
          link: "/contact",
        },
      ],
    },
  ];
  return (
    <>
      <footer className="relative border-t-[1px] w-full mt-20  border-[#DDD]  z-10 bg-gradient-to-r from-white via-white   to-violet-200 pt-14  pb-4">
        <div className="md:hidden lg:flex absolute -z-20 xl:flex sm:hidden hidden w-full justify-between px-14">
          <div className=" relative bottom-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              className=" md:hidden lg:hidden opacity-20 xl:flex sm:hidden hidden animate-spin"
            >
              <path
                d="M1.63752 4.22185C1.20074 3.15295 2.08488 2.01206 3.22897 2.16825L22.9645 4.86262C24.1086 5.01882 24.6545 6.35495 23.9472 7.26766L11.7461 23.0119C11.0388 23.9246 9.60866 23.7294 9.17188 22.6605L1.63752 4.22185Z"
                stroke="#00C2FF"
                strokeWidth="3"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="mt-56 mb-5 animate-spin opacity-20"
            >
              <path
                d="M8.25267 2.8346C9.20262 0.74989 11.706 -0.112606 13.7384 0.944577L29.1495 8.96078C31.0604 9.95472 31.8411 12.2833 30.9156 14.2282L23.5509 29.7048C22.6017 31.6996 20.2151 32.5471 18.2203 31.5979L2.81024 24.2649C0.838797 23.3268 -0.0162193 20.9811 0.889083 18.9944L8.25267 2.8346Z"
                fill="#A737CE"
                fillOpacity="0.8"
              />
            </svg>
          </div>
          <div className=" relative bottom-12 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              className=" mt-12 animate-ping opacity-40"
            >
              <circle cx="15.5" cy="15.5" r="15.5" fill="#FFA800" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              className="mt-40 mb-4 ml-10 animate-bounce opacity-40"
            >
              <circle cx="22.5" cy="22.5" r="22" stroke="#ED0E0E" />
            </svg>
          </div>
        </div>
        <div className="  container mx-auto  m-auto">
          {/* Footer Vector and elipses icon and animated positioning */}
          {/* Footer Vector and elipses icon and animated positioning */}
          <div className="grid mb-8 lg:grid-cols-6 sm:grid-cols-2 grid-cols-1 md:grid-cols-2">
            {/* Footer Left side item */}

            <div className=" mx-auto lg:col-span-2">
              {/* Footer Logo */}
              <img
                draggable={false}
                className="xl:w-56 w-44"
                src={Logo}
                alt="footer-logo"
              />
              {/* Channel Subscribe Form Link  */}
              <div className="mt-4 lg:max-w-sm">
                <p className="md:text-[22px] text-[20px] mt-5  text-gray-900 font-inter">
                  <a
                    href="https://www.youtube.com/channel/UC3KTj2-Cqn4j3Gxo3UVm9FQ"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-[#6F4FFF]"
                  >
                    Subcribe
                  </a>{" "}
                  to our Channel
                </p>
                {/* main send form */}
                <div className="relative flex items-stretch shadow-sm w-[240px] font-inter mt-5">
                  <input
                    type="text"
                    className="flex-1 px-3 py-2 border text-[14px]  border-gray-300 placeholder-gray-800 rounded-l-md"
                    placeholder="Email Address..."
                  />
                  <button
                    className="px-4 py-[4px] rounded-md bg-[#407BFF] text-white text-[12px]  absolute top-0 right-0 h-full"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
                {/* Social media icons */}
                <div className=" flex mt-3 sm:justify-center sm:items-center md:justify-start md:items-start justify-center items-center">
                  {/* facebook icon */}
                  <Link
                    target="_BLANK"
                    to="https://www.facebook.com/academy.codexdevware"
                  >
                    <img
                      draggable={false}
                      className="w-10 h-8"
                      src={facebook}
                      alt="facebook-icon"
                    />
                  </Link>
                  {/* linkdin icon */}
                  <Link
                    target="_BLANK"
                    to="https://www.linkedin.com/company/codex-devware/"
                  >
                    <img
                      draggable={false}
                      className="w-10 h-8"
                      src={linkdin}
                      alt="linkdin icon"
                    />
                  </Link>
                  {/* youtube icon */}
                  <Link
                    target="_BLANK"
                    to="https://www.youtube.com/channel/UC3KTj2-Cqn4j3Gxo3UVm9FQ"
                    href=""
                  >
                    <img
                      draggable={false}
                      className="w-10 h-8"
                      src={youtube}
                      alt="youtube-icon"
                    />
                  </Link>
                  {/* instagram icon */}
                  <Link
                    target="_BLANK"
                    to="https://www.instagram.com/academy.codexdevware/"
                  >
                    <img
                      draggable={false}
                      className="w-10 h-8"
                      src={insta}
                      alt="instagram-icon"
                    />
                  </Link>
                </div>
              </div>
              {/* Channel Subscribe Form Link  */}
            </div>
            {/* Desktop Footer Menu & Right side items */}
            <div className="lg:grid  md:hidden sm:hidden hidden   font-inter grid-cols-2 lg:gap-32 md:gap-20 gap-14 row-gap-8 lg:col-span-4 md:grid-cols-3">
              <FooterCompanyMenu />
              <FooterResourcesMenu />
              <FooterProjectsMenu />
            </div>
            {/* Desktop Footer Menu & Right side items */}
            {/* Tab & Mobile footer Menu */}
            <div className="md:block lg:hidden sm:block block px-4 sm:px-0 md:px-6  font-inter grid-cols-2 md:grid-cols-3">
              {MobileTabletFooterMenu.map((menus, index) => (
                <div key={index}>
                  {/* Footer Comapny Menu Header */}
                  <p
                    onClick={() => toggleMenu(menus.title)}
                    className="font-bold cursor-pointer text-[16px] underline border-b py-2 flex items-center justify-between tracking-wide text-[#6F4FFF] menu-header"
                  >
                    {menus.title}
                    <span
                      className={`text-2xl transition-transform transform ${
                        menuStates === menus.title ? "transform rotate-60" : ""
                      }`}
                    >
                      {menuStates === menus.title && menuHide ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-[#777]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 15.75l7.5-7.5 7.5 7.5"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-[#777]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      )}
                    </span>
                  </p>

                  <ul
                    className={`mt-2 space-y-2 transition-transform origin-top ease-in-out duration-700 ${
                      menuStates === menus.title && menuHide
                        ? "max-h-96 opacity-100 transform scale-y-100"
                        : "max-h-0 opacity-0 transform scale-y-0"
                    }`}
                  >
                    {menus.subtitle.map((menu, index) => (
                      <li className="" key={index}>
                        <Link
                          to={menu.link}
                          className="text-gray-800 text-sm  hover:text-deep-purple-accent-400"
                        >
                          {menu.linkTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* Tab & Mobile footer Menu */}
          </div>
          {/* Copyright Section  */}
          <p className="text-center md:heading-desktop  text-[#333333] px-2 font-semibold pt-4 border-t-[1px]  border-[#DDD] ">
            © {new Date().getFullYear()} Codex Devware. All rights reserved
          </p>{" "}
          {/* Copyright Section  */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
