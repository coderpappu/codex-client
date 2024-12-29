export default function AboutMainService({ about, descending }) {
  const { title, description, image, animation } = about || {};
  return (
    <section
      className="grid lg:grid-cols-2  allContainer place-content-center lg:px-7 pt-[100px]"
      data-aos={animation}
    >
      <div
        className={`${
          descending ? "lg:order-2" : "lg:order-1"
        } flex flex-col justify-center`}
      >
        <h2 className="section_title ">{title}</h2>
        <p className="text-justify">{description}</p>
      </div>
      <div
        className={`${
          descending ? "lg:order-1" : "lg:order-2"
        } grid place-content-center`}
      >
        <img src={image} draggable={false} alt="" className="w-[400px]" />
      </div>
    </section>
  );
}
