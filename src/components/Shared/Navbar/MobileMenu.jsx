import { Link } from "react-router-dom";
import mobileLogo from "../../../assets/Home/Logos/mobile-logo.svg";
import { useState } from "react";
import TabletMobileMenu from "../MegaMenu/TabletMobileMenu";
const MobileMenu = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  const [serviceMenu, setServicesMenu] = useState(false);

  const toggleServicesMenu = () => {
    setServicesMenu(!serviceMenu);
  };

  return (
    <nav
      className={`bg-[#02022D] fixed md:w-72 h-full z-20 top-0 left-0 transform ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:hidden font-sora`}
    >
      <div className="flex justify-between items-center p-0 mt-5">
        <Link to={"/"}>
          {" "}
          <img  draggable={false} className="w-12 h-10 ml-10" src={mobileLogo} alt="Mobile Logo" />
        </Link>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-0 w-12 h-12 justify-center text-sm text-gray-900 rounded-lg focus:outline-none"
        >
          <span className="sr-only">Close menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white font-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          {/* Close icon */}
        </button>
      </div>
      <ul className=" text-[#FFF] mt-4">
        <li>
          <Link
            href="#"
            className="block py-3 pl-10 text-[16px] font-medium border-b-[1px] border-gray-600"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/aboutUs"
            className="block py-3 pl-10 pr-4 border-b-[1px]  border-gray-600"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/featuredProduct"
            className="block py-3 pl-10 pr-4 border-b-[1px] border-gray-600"
          >
            Products
          </Link>
        </li>
        <li className=" cursor-pointer">
          <div
            onClick={toggleServicesMenu}
            className="gap-4 py-3 items-center flex pl-10 pr-4 border-b-[1px] border-gray-600 "
          >
            Services{" "}
            {serviceMenu ? (
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
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            )}
          </div>
          {/* Show the ui */}
          {serviceMenu && <TabletMobileMenu />}
        </li>

        <li>
          <Link className="block py-3 pl-10 pr-4">Blogs</Link>
        </li>
        <Link
          type="button"
          className="text-white mx-[108px] bg-[#886EFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl mt-10  text-sm px-10 py-2  mr-3 md:mr-0 "
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default MobileMenu;
