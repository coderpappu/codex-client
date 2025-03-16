import { AiOutlineLike } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";

export default function Pricing() {
  const plans = [
    {
      icon: <AiOutlineLike size={25} />,
      name: "Free Plan",
      price: "$0",
      features: ["10 Projects", "5GB Storage", "Basic Support"],
    },
    {
      icon: <IoBagHandleOutline size={25} />,
      name: "Pro",
      price: "$49",
      features: ["50 Projects", "50GB Storage", "Priority Support"],
    },
    {
      icon: <FaRegAddressBook size={25} />,
      name: "Enterprise",
      price: "$99",
      features: ["Unlimited Projects", "1TB Storage", "24/7 Support"],
    },
  ];

  return (
    <section className="py-24 relative mt-12">
      <div className="absolute h-[36.5rem] w-full top-0 bg-gradient-to-r from-[#02022d] to-[#5b3ce8] -z-10"></div>
      <div className="mx-auto max-w-7xl px-3 sm:px-[1vw] md:px-[3vw] lg:px-[5vw]">
        <div className="mb-12">
          <h2 className="font-manrope text-5xl text-center font-bold text-white mb-4">
            Suitable pricing plans
          </h2>
          <p className="text-gray-300 text-xl text-center leading-6">
            7 Days free trial. No credit card required.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
          {plans.map((item, index) => {
            return (
              <div
                key={index}
                className="group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-2xl transition-all duration-300  p-8 xl:p-12  "
              >
                <div className="border-b border-solid border-gray-200 pb-9 mb-9">
                  <div className="w-16 h-16 rounded-full bg-indigo-50 mx-auto flex justify-center items-center transition-all duration-300 group-hover:bg-indigo-600">
                    <p className="w-6 h-6 text-indigo-600 transition-all duration-300 group-hover:text-white">
                      {item.icon}
                    </p>
                  </div>
                  <h3 className="font-manrope text-2xl font-bold my-7 text-center text-indigo-600">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-center">
                    <span className="font-manrope text-4xl font-medium text-gray-900">
                      $0
                    </span>
                    <span className="text-xl text-gray-500 ml-3">
                      |&nbsp; Month
                    </span>
                  </div>
                </div>
                <ul className="mb-12 space-y-6 text-left text-lg text-gray-600 group-hover:text-gray-900">
                  {item.features.map((feature, index) => {
                    return (
                      <li key={index} className="flex items-center space-x-3.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                        <span>{feature}</span>
                      </li>
                    );
                  })}
                </ul>
                <a
                  href="javascript:;"
                  className="py-2.5 px-5 bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-fit mx-auto group-hover:bg-indigo-600 group-hover:text-white "
                >
                  Purchase Plan
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
