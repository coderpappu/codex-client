import { useEffect, useRef, useState } from "react";
import CommonTitle from "../Shared/CommonHomeTitle/CommonTitle";
import { featuredFilterSetting } from "../../assets/Home/Common SVG Images/svg";

const menu = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Latest",
  },
  {
    id: 3,
    title: "Programming",
  },
  {
    id: 4,
    title: "Technology",
  },
  {
    id: 5,
    title: "Web",
  },
  {
    id: 6,
    title: "App",
  },
  {
    id: 7,
    title: "Marketing",
  },
  {
    id: 8,
    title: "Marketing",
  },
];
const BlogsMenu = () => {
  const [filter, setFilter] = useState(false);
  const [filterData, setFilterData] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    const toggleFilterData = (e) => {
      if (!ref.current.contains(e.target)) setFilter(false);
    };
    document.addEventListener("mousedown", toggleFilterData);
    return () => {
      document.removeEventListener("mousedown", toggleFilterData);
    };
  }, [filter]);
  const handleFilterData = (id) => {
    setFilterData(id);
  };
  const smClass = `sm:bg-gradient-to-r from-white via-[rgba(166,173,255,0.20)] to-[#fff] sm:border  sm:border-[#7D7D7D]`;

  const extraSm = `${
    filter
      ? "max-sm:border border-[#7D7D7D] max-sm:h-[250px]"
      : "max-sm:h-0 max-sm:border border-transparent"
  } max-sm:overflow-hidden duration-500 max-sm:text-left sm:flex sm:justify-center max-w-5xl mx-auto  rounded-md max-sm:absolute z-10  max-sm:right-0 max-sm:bg-gradient-to-r from-white  via-blue-100 to-[#fff]  max-sm:px-6`;
  return (
    <div className="mt-8">
      <CommonTitle title={"Here is our Best Blog Ever"} />
      <div ref={ref} className="relative text-right mt-6">
        <button
          onClick={() => setFilter(!filter)}
          className="justify-end sm:hidden py-1 px-2 rounded-lg border border-[#4A4A4A] mr-3"
        >
          <span className="flex items-center">
            <span className="w-6">{featuredFilterSetting}</span>
            <span>Filter</span>
          </span>
        </button>
        <ul
          className={`${extraSm} max-sm:w-[240px] allContainer flex flex-wrap`}
        >
          {menu.map((m) => (
            <li
              onClick={() => handleFilterData(m.id, menu)}
              className={`last:border-b-0 max-sm:border-b border-[#7D7D7D] sm:ml-2 mt-3`}
              key={m.id}
            >
              <button
                onClick={() => handleFilterData(m.id)}
                className={`${
                  filterData === m.id
                    ? "sm:bg-[#7433FF] max-sm:text-[#7433FF] sm:text-white sm:border-[#7433FF]"
                    : smClass
                }  max-sm:font-bold mx-sm:w-full text-[#333] max-sm:py-3 sm:py-1 font-semibold sm:rounded-full sm:px-3`}
              >
                {m.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogsMenu;
