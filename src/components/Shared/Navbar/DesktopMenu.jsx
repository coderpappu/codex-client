import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MegaMenu from "../MegaMenu/MegaMenu";

const DesktopMenu = () => {
  const [blog, setBlog] = useState(0);
  const menuRef = useRef(null);
  const [isMegaMenuVisible, setMegaMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMegaMenuVisible((prevState) => !prevState);
  };

  const route = useLocation();

  const inactiveMenu =
    "block text-[14px] mx-auto py-2 px-5 font-semibold border-[2px] border-transparent ";
  const activeMenu =
    "block text-[14px] px-5 border-[2px] rounded-md text-center   border-[#7F7CFF] py-1 font-semibold ";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setMegaMenuVisible(false);
      }
    };

    // Add an event listener for clicks outside the menu
    if (isMegaMenuVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMegaMenuVisible]);

  return (
    <>
      <ul className="flex flex-col  items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row gap-2  md:mt-0 md:border-0 md:bg-white text-black">
        <li>
          <Link
            to="/"
            className={route.pathname === "/" ? activeMenu : inactiveMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/aboutUs"
            className={
              route.pathname === "/aboutUs" ? activeMenu : inactiveMenu
            }
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className={
              route.pathname === "/portfolio" ? activeMenu : inactiveMenu
            }
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/featuredProduct"
            className={
              route.pathname === "/featuredProduct" ? activeMenu : inactiveMenu
            }
          >
            Products
          </Link>
        </li>
        <li className="relative" ref={menuRef}>
          <button
            onClick={toggleMenu}
            className={`${
              blog ? activeMenu : inactiveMenu
            } items-center flex gap-2`}
          >
            Services{" "}
            {isMegaMenuVisible === false ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            )}
          </button>
          {isMegaMenuVisible && <MegaMenu />}
        </li>
        <li className=" ">
          <Link
            onClick={() => setBlog(0)}
            to="/blogs"
            className={route.pathname === "/blogs" ? activeMenu : inactiveMenu}
          >
            Blogs
          </Link>
        </li>
        <Link
          onClick={() => setBlog(0)}
          type="button"
          to="/contact"
          className={
            "text-white bg-[#6142eb]  font-medium rounded-md text-sm uppercase px-7 py-[9px] text-center mr-3 md:mr-0"
          }
        >
          Contact
        </Link>
      </ul>
    </>
  );
};

export default DesktopMenu;
