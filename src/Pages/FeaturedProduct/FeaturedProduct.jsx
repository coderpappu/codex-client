import { useState } from "react";
import Feature from "../../components/FeaturedProduct/Feature";
import FeaturedMenu from "../../components/FeaturedProduct/FeaturedMenu";
import SharedBanner from "../../components/Shared/Banner/SharedBanner";
export default function FeaturedProduct() {
  const [category, setCategory] = useState("all");
  return (
    <section>
      <SharedBanner
        title="Featured Products"
        subtitle="At 6amTech, we bring a range of innovative and creative software that turns complex problems into simplified "
      />
      <div className="allContainer max-lg:px-4">
        <div className="md:py-[50px] max-sm:py-[25px] sm:py-[30px]">
          <FeaturedMenu setCategory={setCategory} />
        </div>
        <Feature category={category} />
      </div>
    </section>
  );
}
