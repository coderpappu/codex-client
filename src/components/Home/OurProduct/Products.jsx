import { Link } from "react-router-dom";
import arrowImg from "../../../assets/Home/Our Product/arrow-right.png";
import ProductImage from "../../../assets/Products/Clearance/report.png";
import NextusPro from "../../../assets/Products/Nextuspro/dashboard.webp";
import SchoolManagement from "../../../assets/Products/school/school_management.webp";
import CommonTitle from "../../Shared/CommonHomeTitle/CommonTitle";
const cards = [
  {
    id: 1,
    image: ProductImage,
    title: "E-Clearance",
    description:
      "E-Clearance by Codex Devware is a smart and efficient clearance solution for universities and polytechnics.",
    tags: ["Clearance", "Software", "Management"],
    link: "/clearance",
  },
  {
    id: 2,
    image: NextusPro,
    title: "Nextus Pro",
    description:
      "Nextus Pro is a modern, efficient, and user-friendly dashboard designed to streamline eCommerce operations and save time.",
    tags: ["Dashboard", "Design", "Ecommerce"],
    link: "https://nexuspro.codexdevware.com/",
  },
  {
    id: 3,
    image: SchoolManagement,
    title: "Academia",
    description:
      "Academia is a complete school management solution. With this software, you can efficiently manage all aspects of your school",
    tags: ["School", "Exam", "Result", "Attendance"],
    link: "https://academia.codexdevware.com",
  },
];

export default function ProductSection() {
  return (
    <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
      <div className="container text-center">
        <div className="mt-20">
          <CommonTitle
            title={"Explore Our Products"}
            subtitle={
              "Discover our innovative products through a journey of exploration. From groundbreaking features to unparalleled quality, explore excellence at your fingertips."
            }
          />
          <Link
            className="gap-2 flex justify-center items-center my-6 text-[#6F4FFF] font-sora text-[16px] font-bold leading-normal"
            to="/featuredProduct"
          >
            View More Products{" "}
            <img draggable={false} src={arrowImg} alt="Arrow Image" />
          </Link>
        </div>
        <div className="mx-4 flex flex-wrap">
          {cards.map((card) => (
            <div key={card.id} className="w-full px-2 md:w-1/2 xl:w-1/3">
              <div className="mb-10 border border-gray-300 overflow-hidden rounded-md shadow-md duration-300 hover:shadow-lg bg-white p-2">
                <img
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={300}
                  className="w-full rounded-sm"
                />
                <div className="p-4 text-center sm:p-4 md:p-4 xl:p-5">
                  <h3>
                    <Link
                      to={card?.link}
                      className="mb-2 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                      {card.title}
                    </Link>
                  </h3>
                  <p className="mb-6 text-justify px-1 leading-relaxed text-body-color">
                    {card.description}
                  </p>
                  <div className="mb-5 flex justify-center space-x-2">
                    {card.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-gray-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    target="_blank"
                    to={card.link}
                    className="inline-block rounded-full border border-gray-300 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
