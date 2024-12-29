import { threeDots } from "../../assets/Home/Common SVG Images/svg";

const OverviewTopCards = () => {
  return (
    <>
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 m-6 gap-6">
        {/* single card wrapper  */}
        <div className="bg-white rounded">
          <div className="grid grid-cols-2 p-4 gap-4 text-[#777]">
            <h3 className="font-semibold">Total Revenue</h3>
            <div className="relative">
              <div className="absolute right-0 text-[#555]">
                <div className="dropdown dropdown-bottom dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn m-1 bg-transparent border-none shadow-none"
                  >
                    {threeDots}
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-blue-50 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div
                className="radial-progress text-warning bg-gray-100 text-md"
                style={{
                  "--value": "70",
                  "--size": "70px",
                  "--thickness": "5px",
                }}
                role="progressbar"
              >
                70%
              </div>
            </div>
            <div>
              <h4 className="text-[28px] text-black">256</h4>
              <span className="text-sm">Revenue today</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded">
          <div className="grid grid-cols-2 p-4 gap-4 text-[#777]">
            <h3 className="font-semibold">Total Revenue</h3>
            <div className="relative">
              <div className="absolute right-0 text-[#555]">
                {" "}
                <div className="absolute right-0 text-[#555]">
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn m-1 bg-transparent border-none shadow-none"
                    >
                      {threeDots}
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-blue-50 rounded-box w-52"
                    >
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="badge badge-warning gap-2 text-white">
                info
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="white"
                    d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-[28px] text-black">256</h4>
              <span className="text-sm">Revenue today</span>
            </div>
          </div>
          <div className="mx-4">
            <progress
              className="progress progress-warning w-full"
              value="70"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="bg-white rounded">
          <div className="grid grid-cols-2 p-4 gap-4 text-[#777]">
            <h3 className="font-semibold">Total Revenue</h3>
            <div className="relative">
              <div className="absolute right-0 text-[#555]">
                {" "}
                <div className="absolute right-0 text-[#555]">
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn m-1 bg-transparent border-none shadow-none"
                    >
                      {threeDots}
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-blue-50 rounded-box w-52"
                    >
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className="radial-progress text-success bg-gray-100 text-md"
                style={{
                  "--value": "70",
                  "--size": "70px",
                  "--thickness": "5px",
                }}
                role="progressbar"
              >
                70%
              </div>
            </div>
            <div>
              <h4 className="text-[28px] text-black">256</h4>
              <span className="text-sm">Revenue today</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded">
          <div className="grid grid-cols-2 p-4 gap-4 text-[#777]">
            <h3 className="font-semibold">Total Revenue</h3>
            <div className="relative">
              <div className="absolute right-0 text-[#555]">
                {" "}
                <div className="absolute right-0 text-[#555]">
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn m-1 bg-transparent border-none shadow-none"
                    >
                      {threeDots}
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-blue-50 rounded-box w-52"
                    >
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="badge badge-success gap-2 text-white">
                info
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="white"
                    d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-[28px] text-black">256</h4>
              <span className="text-sm">Revenue today</span>
            </div>
          </div>
          <div className="mx-4">
            <progress
              className="progress progress-success w-full"
              value="70"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewTopCards;