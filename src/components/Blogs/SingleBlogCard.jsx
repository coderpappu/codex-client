import "../../components/Home/OurProduct/OurProduct.css";
import { Link } from "react-router-dom";
const SingleBlogCard = ({ blogList }) => {
  const {
    title,
    category,
    image,
    description,
    author,
    publishedDate,
    _id,
    animation,
  } = blogList || {};
  return (
    <div
      className="rounded-[12px] mt-3 md:mt-0 lg:pb-2 shadow-3xl px-3 py-3 hover:bg-gradient-to-tr from-white  via-blue-100 to-[#fff] ease-in-out duration-1000"
      data-aos={animation}
    >
      <div className="p-4">
        <img draggable={false} className="rounded-[4px]" src={image} alt="" />
      </div>
      <div className="p-4">
        <h3 className="lg:text-xl xl:text-2xl md:text-[18px] text-[14px] font-semibold my-4">
          {title}
        </h3>
        <div className="lg:text-[18px] md:text-[15px] text-[12px]3 font-medium flex gap-1">
          <span>Blog</span>
          <span>|</span>
          <span>{category} </span>
        </div>
        <div className="text-[12px] mt-4">
          {description.length > 100 ? (
            <p>
              {description.slice(0, 100)} {"..."}
              <Link
                to={`/blogDetails/${_id}`}
                className="ml-2 font-bold underline"
              >
                Learn More
              </Link>
            </p>
          ) : (
            <p>{description}</p>
          )}
        </div>
        <div className="flex mt-4 gap-0.5 lg:text-[11px] xl:text-[14px] text-[10px]">
          <span>Written By</span>
          <h5 className="font-bold">{author}</h5>
          <span>|</span>
          <span className="font-bold">{publishedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogCard;
