import { Link } from "react-router-dom";
import megaMenuData from "./MegaMenuData";
import { useState } from "react";

const TabletMobileMenu = () => {
  const [menuStates, setMenuStates] = useState("");
  const [menuHide, setMenuHide] = useState(true);

  // Toggle main function hide show menu
  const toggleMenu = (menuName) => {
    setMenuStates(menuName);
    setMenuHide(!menuHide);
  };
  return (
    <div className=" text-white px-4  md:w-[320px] w-[260px] transition-transform origin-top ease-linear duration-500">
      <div className=" flex flex-col justify-between flex-wrap gap-4 px-6 py-4">
        {megaMenuData.map((menu) => (
          <div key={menu.catId}>
            <h3
              onClick={() => toggleMenu(menu.category)}
              className="text-[13px] cursor-pointer font-bold mb-3 flex items-center justify-between ml-3 text-white leading-normal"
            >
              {menu.category}
              <span
                className={`text-2xl transition-transform transform ${
                  menuStates === menu.category ? "transform rotate-60" : ""
                }`}
              >
                {menuStates === menu.category && menuHide ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 text-[#777]"
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
                    className="w-4 h-4 text-[#777]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </span>
            </h3>
            <ul
              className={`transition-transform origin-top ease-linear duration-500 ${
                menuStates === menu.category && menuHide
                  ? "max-h-96 opacity-100 transform scale-y-100"
                  : "max-h-0 opacity-0 transform scale-y-0"
              }`}
            >
              {menu.subcategory.map((data) => (
                <li className=" text-[13px] mt-2 ml-4" key={data.id}>
                  <Link to={`services/${menu.catId}/${data.id}`}>
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabletMobileMenu;
