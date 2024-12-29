import SharedBanner from "../../components/Shared/Banner/SharedBanner";
import ContactForm from "../../components/ContactUs/ContactForm";
import SocialContact from "../../components/ContactUs/SocialContact";
import contactImg from "../../animationJSON/`contactAnimation.json";
import Lottie from "lottie-react";
export default function Contact() {
  return (
    <>
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
