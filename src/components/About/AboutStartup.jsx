import AboutMainBanner from "../../assets/About/About-Main-Banner.png";
import MainBannerGradient from "../../assets/About/Main-Banner-Gradient.png";
import Button from "../../utils/Button";
import "aos/dist/aos.css";

const AboutStartup = () => {
  return (
    <>
      <div className="sm:mt-24 mt-[50px] md:mt-28">
        <img
          src={MainBannerGradient}
          alt="Gradient"
          className="w-[400px] mx-[-50px] h-[450px] absolute -z-10"
        />
      </div>
      <section className="grid md:grid-cols-12 allContainer items-center sm:mt-24 md:mt-20 md:mb-40">
        <div
          data-aos="fade-right"
          className="lg:col-span-6 lg:mr-20 col-span-12 lg:col-start-1 lg:col-end-7 col-start-2 col-end-12"
        >
          <h3 className="lg:text-4xl md:text-3xl text-xl font-semibold text-center lg:text-left">
            Pioneer Innovators in Every Aspect of Codex Devware
          </h3>
          <p className="md:text-xl text-lg text-[#2E2E2E] mt-6 text-justify mb-12">
            Welcome to Codex Devware, where innovation knows no limits. As
            pioneer innovators, we redefine digital landscapes, crafting
            cutting-edge solutions that set industry standards. From software
            development to tech consultancy, our passion drives us to seamlessly
            blend creativity and expertise. Committed to transforming ideas into
            reality, we thrive on challenges and deliver unparalleled results.
            Join us in shaping the future as we lead in every aspect of Codex
            DevWare.
          </p>
          <Button active={true}>{"Learn More"}</Button>
        </div>
        <div
          data-aos="fade-left"
          className="lg:col-span-6 col-span-12 lg:mt-0 "
        >
          <img draggable={false} src={AboutMainBanner} alt="" />
        </div>
      </section>
    </>
  );
};

export default AboutStartup;
