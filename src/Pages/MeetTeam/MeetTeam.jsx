import Members from "../../components/MeetTeam/Members";
import SharedBanner from "../../components/Shared/Banner/SharedBanner";

export default function MeetTeam() {
  return (
    <>
      <SharedBanner
        title="MEET WITH OUR TEAM"
        subtitle="We build high-end software that skyrockets your business growth. Let;s explore our products and choose the best fit for your business"
      />
      <section className="allContainer my-[100px]">
        <Members />
      </section>
    </>
  );
}
