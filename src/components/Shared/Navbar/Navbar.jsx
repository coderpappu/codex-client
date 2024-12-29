import { useState, useEffect } from "react";
import Logo from "../../../assets/Home/Logos/logo.svg";
import { Link } from "react-router-dom";
import menuIcon from "../../../assets/Home/Common SVG Images/menubar.svg";
import "../Navbar/Navbar.css";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
  //Main state for tabletes and mobile devices
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  //using useRef for accessibility

  //the main menu toggle function for mobile & tablet devices
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  //handle the side effects in exact screen devices
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    // this is outside handle function, like, this menu is tablet or mobile devices then when click outside of the screen then hide the menus
    // const handleClickOutside = (event) => {
    //   if (!mobileMenuRef.current.contains(event.target)) {
    //     setIsMobileMenuOpen(false);
    //   }
    // };
    //adding event listener
    window.addEventListener("resize", handleResize);
    // document.addEventListener("mousedown", handleClickOutside);
    //remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
      // document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Show to mobile menu for the tablet and mobile */}
      <MobileMenu
        toggleMobileMenu={toggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      {/* Show to mobile menu for the tablet and mobile */}

      {/* This is the main div */}
      <div className="allContainer max-lg:px-4 box-shadow m-auto sm:box-shadow box-shadow flex items-center justify-between xl:px-0 md:py-6 py-4">
        <Link to={"/"} className="">
          <img className="  xl:w-56 w-44" src={Logo} alt="Desktop-Menu-Logo" />
        </Link>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-gray-900 rounded-lg focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <img  draggable={false} src={menuIcon} alt="Menu Icon" />
            ) : (
              <img  draggable={false} src={menuIcon} alt="Menu Icon" />
            )}
          </button>
        </div>

        <div className="items-center justify-between hidden lg:block w-full xl:flex md:w-auto">
          <DesktopMenu />
        </div>
      </div>
    </>
  );
};

export default Navbar;
