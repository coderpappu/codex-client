import { TECollapse } from "tw-elements-react";

const ShowFrequently = ({ data, activeElement, handleClick }) => {
  return (
    <>
      <div className=" rounded-md text-[#000] bg-white faqshadows ">
        <h2 className="mb-0   " id="headingOne">
          {/* main button */}
          <button
            className={`${
              activeElement === data.element && `text-primary   `
            } group relative gap-1 flex w-full items-center rounded-md border-0 bg-white px-5 py-4 text-left   transition [overflow-anchor:none] hover:z-[2] focus:z-[3] sm:text-[16px] text-[11px] md:text-[18px] font-semibold leading-normal  `}
            type="button"
            onClick={() => handleClick(data.element)}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {data.title}

            {/* show to ui svg img */}
            <span
              className={`${
                activeElement === data.element
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] `
              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="xl:h-6 xl:w-6 h-4 w-4 md:h-6 md:w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>

        {/* to show card description ui */}
        <TECollapse
          show={activeElement === data.element}
          className="!mt-0 !rounded-b-none transition-all duration-500 !shadow-none"
        >
          <div className="px-5 py-4 text-[12px] lg:text-[15px] font-normal leading-6">
            {data.description}
          </div>
        </TECollapse>
        {/* to show card description ui */}
      </div>
    </>
  );
};

export default ShowFrequently;
