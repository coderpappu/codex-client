import blogAuthor from "../../assets/blogAuthor.png";
import { blogShare } from "../../assets/Home/Common SVG Images/svg";
export default function BlogDetails({ details }) {
  const { title, description, consolation, image, featured } = details || {};
  return (
    <section className="allContainer text-justify">
      <div className="flex justify-center">
        <img draggable={false} src={image} alt="" />
      </div>
      <h2 className="text-[46px] text-center font-bold max-w-xl mx-auto">
        {title}
      </h2>

      <div className="text-center flex justify-center items-center">
        <p
          style={{ backgroundImage: `url(${blogAuthor})` }}
          className="bg-top bg-cover h-[40px] w-[40px] rounded-full"
        ></p>
        <span className="border-r-2 p-[2px] border-[#383838]">
          Mohammad Ikhtira uddin
        </span>
        <span className="border-r-2 p-[2px] border-[#383838]">
          27 September 2023
        </span>
        <span className="border-r-2 p-[2px] border-[#383838]">{blogShare}</span>
      </div>
      <div>{description}</div>
      {}
      {featured && <div dangerouslySetInnerHTML={{ __html: featured }} />}
      {consolation && (
        <p>
          <span className="font-bold">Conclusion:</span> <br />
          {consolation}
        </p>
      )}
    </section>
  );
}
