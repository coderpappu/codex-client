import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorPage from "../../assets/Home/Common SVG Images/error.svg";
import Lottie from "lottie-react";
import errorAnimationData from "../../animationJSON/errorAnimation.json";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      {/* <img className="w-80" src={errorPage} alt="Error Image" />
      
      */}
      <Lottie
        className="w-[450px]"
        animationData={errorAnimationData}
        loop={true}
      ></Lottie>
      <div className="flex flex-col items-center justify-center">
        <p className=" font-sora font-bold text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-4">
          Page Not Found
        </p>
        <p className="md:text-lg lg:text-xl font-medium text-gray-600 mt-8">
          Sorry, the page you are looking for could not be found.
        </p>
        <p className="text-xl font-semibold md:text-2xl mb-4 mt-4">
          <span className=" text-red-600"> {error?.message}</span>
        </p>
        <Link
          to={"/"}
          className="flex items-center space-x-2 bg-violet-600 hover:bg-violet-700 text-gray-100 px-7 gap-2 py-4 rounded transition duration-500"
          title="Return Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
