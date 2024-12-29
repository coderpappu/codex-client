import ellipseSvg from "../../assets/featuredProduct/Ellipse.svg";
import leftEllipseSvg from "../../assets/featuredProduct/leftEllipse.png";
import Button from "../../utils/Button";
export default function FeatureCard({
  product,
  orderImg,
  orderContent,
  position,
}) {
  const { title, subtitle, text, image, animation } = product || {};
  return (
    <div
      data-aos={animation}
      className="border-2 rounded-md py-5 lg:px-14 px-5 border-[#DDDDDD] relative"
    >
      <div
        className={`absolute  -z-10 hidden lg:block ${
          position ? "left-0 bottom-0" : "right-0 top-0"
        }`}
      >
        <img
          draggable={false}
          className="hidden md:block"
          src={position ? leftEllipseSvg : ellipseSvg}
          alt=""
        />
      </div>
      <div className="grid md:grid-cols-2 md:justify-between  items-center gap-16">
        <div
          className={`overflow-hidden group max-md:order-1 max-lg:flex justify-center ${orderImg}`}
        >
          <img
            draggable={false}
            src={image}
            alt=""
            className="group-hover:scale-105 duration-700 w-full"
          />
        </div>
        <div className={`max-md:order-2 ${orderContent}`}>
          <h2 className="max-md:text-center bg-clip-text text-2xl xl:text-[38px] lg:text-[35px] font-bold  bg-gradient-to-r from-[#02013ece] to-[rgba(233,31,31,52)]  text-transparent">
            {title}
          </h2>
          <h3 className="max-md:text-center subtitle py-2">{subtitle}</h3>
          <p className="paragraphText">{text}</p>
          <div className="flex gap-5 pt-5 max-md:justify-center">
            <Button>Demo</Button>
            <Button active={true}>Explore the Product</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
