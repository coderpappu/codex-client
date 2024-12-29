import { useEffect, useRef, useState } from "react";
import { featuredFilterSetting } from "../../assets/Home/Common SVG Images/svg";

const menu = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Animation",
  },
  {
    id: 3,
    title: "CMS",
  },
  {
    id: 4,
    title: "E-Commerce",
  },
  {
    id: 5,
    title: "LMS",
  },
];
export default function FeaturedMenu({ setCategory }) {
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
  const handleFilterData = (id, category) => {
    setFilterData(id);
    setCategory(category);
  };
  const smClass = `sm:bg-gradient-to-r from-white via-[rgba(166,173,255,0.20)] to-[#fff] sm:border  sm:border-[#7D7D7D]`;

  const extraSm = `${
    filter
      ? "max-sm:border border-[#7D7D7D] max-sm:h-[250px]"
      : "max-sm:h-0 max-sm:border border-transparent"
  } max-sm:overflow-hidden duration-500 max-sm:text-left sm:flex justify-between max-w-xl mx-auto  rounded-md max-sm:absolute z-10  max-sm:right-0 max-sm:bg-gradient-to-r from-white  via-[rgba(166,173,255,0.13)] to-[#fff]  max-sm:px-6`;
  return (
    <div ref={ref} className="relative text-right">
      <button
        onClick={() => setFilter(!filter)}
        className="justify-end sm:hidden py-2 px-5 rounded-lg border border-[#4A4A4A] mb-3"
      >
        <span className="flex">
          <span className="w-10">{featuredFilterSetting}</span>
          <span>Filter</span>
        </span>
      </button>
      <ul className={`${extraSm} max-sm:w-[240px]`}>
        {menu.map((m) => (
          <li
            onClick={() => handleFilterData(m.id, m.title)}
            className={`last:border-b-0 max-sm:border-b border-[#7D7D7D] `}
            key={m.id}
          >
            <button
              onClick={() => handleFilterData(m.id)}
              className={`${
                filterData === m.id
                  ? "sm:bg-[#7433FF] max-sm:text-[#7433FF] sm:text-white sm:border-[#7433FF]"
                  : smClass
              }  max-sm:font-bold mx-sm:w-full max-sm:py-3 sm:py-2 sm:rounded-lg sm:px-5`}
            >
              {m.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
