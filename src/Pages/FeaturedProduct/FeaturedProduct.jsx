import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Feature from "../../components/FeaturedProduct/Feature";
import FeaturedMenu from "../../components/FeaturedProduct/FeaturedMenu";
import SharedBanner from "../../components/Shared/Banner/SharedBanner";

export default function FeaturedProduct() {
  const [category, setCategory] = useState("all");
  return (
    <section>
      <Helmet>
        <title>
          Our Products | Custom Software & SaaS Applications by Codex Devware
        </title>
        <meta
          name="description"
          content="Explore custom software, HRM systems, accounting apps, inventory management, and SaaS products developed by Codex Devware in Bangladesh."
        />
        <link
          rel="canonical"
          href="https://codexdevware.com/featured-product"
        />
        <meta
          property="og:title"
          content="Our Software Products | Codex Devware"
        />
        <meta
          property="og:description"
          content="Discover powerful custom software and SaaS applications built by Codex Devware for businesses in Bangladesh."
        />
        <meta
          property="og:url"
          content="https://codexdevware.com/featured-product"
        />
        <meta property="og:type" content="website" />
      </Helmet>

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
