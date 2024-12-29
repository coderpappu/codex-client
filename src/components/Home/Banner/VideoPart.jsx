const VideoPart = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center cursor-pointer transition-opacity duration-700 justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm z-50 ${
        isOpen ? "block opacity-100" : "hidden opacity-0"
      }`}
    >
      <div className=" ">
        <div
          className="  flex flex-row justify-end cursor-pointer "
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9 rounded-full text-gray-900 bg-gray-100 px-1  py-1 duration-300 hover:bg-slate-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div className=" bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 rounded-md p-1">
          <div className=" w-[300px] sm:w-[400px] md:w-[500px] lg:w-[800px] lg:h-[450px] xl:w-[800px] xl:h-[450px] md:h-[280px] h-[200px] sm:h-[250px] bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 rounded-md">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/nhPNeo3nC0I?si=AaWL2NmIb_GD_Nre&rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPart;
