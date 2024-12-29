import { Link, useParams } from "react-router-dom";
import "../../Shared/MegaMenu/MegaMenu.css";
import megaMenuData from "./MegaMenuData";
import { useState } from "react";

const MegaMenu = () => {
  const [menuActive, setMenuActive] = useState({ menuIndex: -1, subIndex: -1 });

  const handleActive = (menuIndex, subIndex) => {
    setMenuActive({ menuIndex, subIndex });
  };

  return (
    <div className="  menu-menu text-black p-4 w-[780px]  absolute top-12   z-30 xl:right-0 lg:-right-40 ">
      <div className=" flex justify-between gap-4 px-6 py-4">
        {megaMenuData.map((menu, menuIndex) => (
          <div key={menu.id}>
            <h3 className="text-[22px] font-bold mb-3 text-[#000] leading-normal">
              {menu.category}
            </h3>
            <ul className="">
              {menu?.subcategory?.map((data, subIndex) => (
                <li
                  className={`mt-3${
                    menuActive.menuIndex === menuIndex &&
                    menuActive.subIndex === subIndex
                      ? "text-violet-700 duration-300 font-semibold"
                      : ""
                  }`}
                  key={data.id}
                >
                  <Link
                    onClick={() => handleActive(menuIndex, subIndex)}
                    to={`services/${menu?.catId}/${data.id}`}
                  >
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

export default MegaMenu;
