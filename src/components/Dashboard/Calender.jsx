import MainCalender from "./MainCalender";
const Calender = () => {
  return (
    <section className="allContainer xl:px-40 xl:py-20 flex xl:gap-40">
      <div>
        <h1 className=" text-[24px] font-semibold">Calender</h1>
        <button className=" flex items-center justify-center gap-2 mt-4 bg-green-600 px-4 py-2 text-white rounded-md">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Create New
        </button>
        <button className=" flex items-center justify-center gap-2 mt-4 bg-violet-800 px-10 py-2 text-white rounded-md">
          {" "}
          My Event
        </button>
      </div>
      <MainCalender />
    </section>
  );
};

export default Calender;
