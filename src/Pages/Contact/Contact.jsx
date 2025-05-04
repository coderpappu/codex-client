import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";
import contactImg from "../../animationJSON/`contactAnimation.json";
import ContactForm from "../../components/ContactUs/ContactForm";
import SocialContact from "../../components/ContactUs/SocialContact";
import SharedBanner from "../../components/Shared/Banner/SharedBanner";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>
          Contact Codex Devware | Get a Quote for Software, Website & SaaS
          Solutions
        </title>
        <meta
          name="description"
          content="Contact Codex Devware for custom software, SaaS, website development, SEO, and digital marketing services in Bangladesh. Get your free quote now!"
        />
        <link rel="canonical" href="https://codexdevware.com/contact" />
        <meta property="og:title" content="Contact Codex Devware" />
        <meta
          property="og:description"
          content="Reach out to our team for expert software, SaaS, website development, and marketing services in Bangladesh."
        />
        <meta property="og:url" content="https://codexdevware.com/contact" />
        <meta property="og:type" content="website" />
      </Helmet>

      <SharedBanner
        title="Contact"
        subtitle="At 6amTech, we bring a range of innovative and creative software that turns complex problems into simplified "
      />
      <section className="allContainer mt-5 md:mt-[100px]">
        <div className="lg:grid grid-cols-2 md:gap-20">
          <div className="w-full grid place-content-center">
            {/* <img className="w-full" src={} alt="" /> */}

            <Lottie animationData={contactImg} loop={true} />
          </div>
          <ContactForm />
        </div>
      </section>

      <SocialContact />
    </>
  );
}
