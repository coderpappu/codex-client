import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import AboutBanner from "../../components/About/AboutBanner";
import AboutStartup from "../../components/About/AboutStartup";
import Achievement from "../../components/Home/Achievements/Achievement";
import Members from "../../components/MeetTeam/Members";
import SharedBanner from "../../components/Shared/Banner/SharedBanner";

const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About Codex Devware | Trusted Software Company in Bangladesh
        </title>
        <meta
          name="description"
          content="Learn about Codex Devware, Bangladesh’s trusted custom software, SaaS, and web development company providing modern, scalable business solutions."
        />
        <link rel="canonical" href="https://codexdevware.com/aboutus" />
        <meta property="og:title" content="About Codex Devware" />
        <meta
          property="og:description"
          content="Discover our mission, team, and services at Codex Devware — a top software company in Bangladesh."
        />
        <meta property="og:url" content="https://codexdevware.com/aboutus" />
        <meta property="og:type" content="website" />
      </Helmet>

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
