import AboutBanner from "../../components/About/AboutBanner";
import AboutStartup from "../../components/About/AboutStartup";
import Achievement from "../../components/Home/Achievements/Achievement";
import Members from "../../components/MeetTeam/Members";
import SharedBanner from "../../components/Shared/Banner/SharedBanner";
import "aos/dist/aos.css";

const About = () => {
  return (
    <>
      <AboutBanner />
      <AboutStartup />
      <Achievement />
      <SharedBanner
        bg={true}
        title="MEET WITH OUR TEAM"
        subtitle="At Codex Devware, our strength lies in the diversity and expertise of our talented team. Each member brings a unique set of skills and a shared passion for innovation. Get to know the faces behind the code, the architects of your digital success"
      />
      <section className="allContainer my-4">
        <Members />
      </section>
    </>
  );
};

export default About;
