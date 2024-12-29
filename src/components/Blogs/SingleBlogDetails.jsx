//import "./SingleBlogDetails.css";
import KawsarImage from "../../assets/mdKawsar.jpg";
import { blogDetailsShare } from "../../assets/Home/Common SVG Images/svg";

const SingleBlogDetails = ({ blogDetails }) => {
  const { title, description, featured, image, consolation, date } =
    blogDetails ||{};
  return (
    <>
      <div className="relative -z-10 lg:flex hidden">
        <svg
          width="264"
          height="252"
          viewBox="0 0 414 402"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute lg:right-28 xl:right-52 top-60 animate-pulse"
        >
          <rect
            width="414"
            height="402"
            rx="201"
            fill="#B6CDDA"
            fillOpacity="0.32"
          />
        </svg>
      </div>
      <div className="allContainer z-50">
        <section className="grid justify-items-center mt-10">
          {/* svg wrapper  */}
          <div className="lg:flex absolute -z-20 xl:flexhidden w-full justify-between px-14">
            <div className="relative hidden lg:flex">
              <svg
                width="65"
                height="59"
                viewBox="0 0 95 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-4 ml-20 animate-slideInLeft hidden lg:flex"
              >
                <path
                  d="M2.47971 47.467C2.02599 47.3732 1.61114 47.1011 1.32575 46.7102C1.04036 46.3193 0.907626 45.8413 0.956542 45.3805C1.007 44.9467 2.24314 34.7043 13.4697 26.5086C19.2752 22.2704 25.8529 22.2775 32.2139 22.2782C38.3158 22.2923 44.1094 22.2878 49.0985 18.6455C59.141 11.3142 60.3114 2.12925 60.3316 2.02943C60.3829 1.56709 60.6131 1.16089 60.9717 0.900188C61.3303 0.639483 61.7878 0.545629 62.2436 0.63927C62.6994 0.732912 63.1162 1.00638 63.4022 1.39951C63.6882 1.79265 63.8201 2.27324 63.7688 2.73558C63.7217 3.16692 62.4856 13.4093 51.2591 21.605C45.4535 25.8432 38.8758 25.8362 32.5148 25.8354C26.4129 25.8213 20.6194 25.8259 15.6302 29.4681C5.5877 36.7994 4.41734 45.9844 4.39713 46.0842C4.37105 46.3131 4.30076 46.5304 4.19026 46.7237C4.07976 46.9171 3.93123 47.0827 3.75315 47.2111C3.57507 47.3396 3.37095 47.4283 3.15244 47.4722C2.93393 47.5161 2.70533 47.5143 2.47971 47.467ZM75.4485 22.7509C75.435 22.8457 74.2646 32.0307 64.2222 39.362C59.233 43.0043 53.4395 43.0089 47.3376 42.9947C40.9765 42.994 34.3988 42.9869 28.5933 47.2251C17.3668 55.4208 16.1306 65.6632 16.0835 66.0946C16.0581 66.3235 16.0775 66.5593 16.1404 66.7886C16.2033 67.0178 16.3085 67.236 16.4502 67.4307C16.5918 67.6253 16.767 67.7926 16.9658 67.9231C17.1646 68.0535 17.3831 68.1445 17.6087 68.1909C17.8344 68.2373 18.0629 68.2381 18.2811 68.1933C18.4994 68.1485 18.7031 68.0591 18.8806 67.93C19.0582 67.8009 19.2061 67.6347 19.3159 67.441C19.4258 67.2472 19.4954 67.0297 19.5208 66.8007C19.541 66.7009 20.7113 57.5159 30.7538 50.1847C35.743 46.5424 41.5365 46.5378 47.6384 46.5519C53.9995 46.5527 60.5738 46.5622 66.3827 42.3215C77.6092 34.1258 78.8453 23.8834 78.8924 23.4521C78.9437 22.9897 78.8119 22.5092 78.5258 22.116C78.2398 21.7229 77.823 21.4494 77.3672 21.3558C76.9114 21.2621 76.4539 21.356 76.0953 21.6167C75.7368 21.8774 75.5065 22.2836 75.4552 22.7459L75.4485 22.7509ZM90.5721 43.4674C90.5586 43.5623 89.3883 52.7472 79.3458 60.0785C74.3566 63.7208 68.5631 63.7254 62.4612 63.7112C56.1001 63.7105 49.5225 63.7034 43.7169 67.9417C32.4904 76.1373 31.2543 86.3798 31.2072 86.8111C31.1559 87.2734 31.2878 87.754 31.5738 88.1472C31.8598 88.5403 32.2766 88.8138 32.7324 88.9074C33.1882 89.001 33.6457 88.9072 34.0043 88.6465C34.3628 88.3858 34.5931 87.9796 34.6444 87.5172C34.6646 87.4174 35.835 78.2324 45.8774 70.9012C50.8666 67.2589 56.6601 67.2543 62.7621 67.2684C69.1231 67.2692 75.6974 67.2787 81.5063 63.038C92.7328 54.8424 93.969 44.5999 94.0161 44.1686C94.0415 43.9397 94.0222 43.7039 93.9593 43.4746C93.8963 43.2454 93.7911 43.0272 93.6495 42.8325C93.5078 42.6379 93.3326 42.4705 93.1338 42.3401C92.935 42.2097 92.7166 42.1186 92.4909 42.0723C92.2652 42.0259 92.0367 42.0251 91.8185 42.0699C91.6002 42.1146 91.3965 42.2041 91.219 42.3332C91.0414 42.4623 90.8935 42.6284 90.7837 42.8222C90.6739 43.016 90.6042 43.2335 90.5788 43.4624L90.5721 43.4674Z"
                  fill="#A7DCB9"
                />
              </svg>

              <svg
                width="37"
                height="32"
                viewBox="0 0 47 42"
                className=" md:hidden lg:flex xl:flex sm:hidden hidden animate-spin absolute top-72 xl:left-24 lg:left-12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.0905 1.54922C28.5754 0.988174 29.4808 1.13158 29.7686 1.81501L45.2824 38.654C45.5868 39.3767 44.9789 40.1525 44.2044 40.0298L2.55221 33.4328C1.77774 33.3101 1.43933 32.3844 1.95207 31.7912L28.0905 1.54922L27.3339 0.895304L28.0905 1.54922Z"
                  stroke="#38AF76"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-12 animate-ping absolute right-20 hidden lg:flex"
              >
                <circle cx="12" cy="12" r="12" fill="#FFA800" />
              </svg>
            </div>
          </div>
          {/* banner image wrapper  */}
          {image && (
            <div className="xl:w-[60%] lg:w-[80%] lg:h-96 md:w-[90%] sm:h-96 h-80 w-full overflow-hidden rounded-lg">
              <img draggable={false} src={image} alt="" />
            </div>
          )}
          {/* details wrapper */}
          <div className="text-center mt-[70px] grid justify-items-center">
            <h3 className="lg:text-5xl text-xl sm:text-2xl md:text-3xl md:w-[70%] w-full font-bold">
              {title}
            </h3>
            <div className="flex justify-center items-center mt-10 gap-0.5 md:gap-3">
              <img draggable={false} className="w-16 h-16 rounded-full" src={KawsarImage} />
              <h5 className="font-bold text-sm md:text-lg">Md Kawsar</h5>
              <span>|</span>
              <h5 className="text-sm md:text-lg">14 March 2023</h5>
              <span>|</span>
              <span>{blogDetailsShare}</span>
            </div>
            <div className="border-b-2 w-[40%] mt-7"></div>
          </div>
        </section>
        {/* details section  */}
        <section className="mt-7">
          <p>{description}</p>
          {featured && <div dangerouslySetInnerHTML={{ __html: featured }} />}
          {consolation && (
            <>
              <h3 className="font-bold mt-7">Conclusion:</h3>
              <p>{consolation}</p>
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default SingleBlogDetails;
