import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AboutMainService from "../../components/service/AboutMainService";
import Reviews from "../../components/service/Reviews";
import serviceData from "../../components/service/ServiceData";
import ServiceImportance from "../../components/service/ServiceImportance";
import ServicePackages from "../../components/service/ServicePackages";
import ServicesIdea from "../../components/service/ServicesIdea";

export default function Service() {
  //uses from useParams
  const { category, subcategoryID } = useParams();

  const { about, serviceDetails, importanceOfService, servicePackage } =
    serviceData.find((data) => data.catId === category).subcategory[
      subcategoryID - 1
    ] || {};

  return (
    <>
      <Helmet>
        <title>
          Our Services | Software, SaaS, Website & Digital Marketing in
          Bangladesh
        </title>
        <meta
          name="description"
          content="Codex Devware offers top-notch services in custom software development, SaaS applications, website design & development, SEO, and digital marketing in Bangladesh."
        />
        <link
          rel="canonical"
          href="https://codexdevware.com/services/web-development/1"
        />
        <meta property="og:title" content="Services | Codex Devware" />
        <meta
          property="og:description"
          content="Get the best software, SaaS, website, SEO, and marketing services from Codex Devware, Bangladesh’s reliable IT company."
        />
        <meta
          property="og:url"
          content="https://codexdevware.com/services/web-development/1"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {about && <AboutMainService about={about} />}
      {serviceDetails && (
        <AboutMainService about={serviceDetails} descending={true} />
      )}
      <Reviews />
      {ServiceImportance && (
        <ServiceImportance importanceService={importanceOfService} />
      )}
      {servicePackage && <ServicePackages servicePackage={servicePackage} />}
      <ServicesIdea />
    </>
  );
}
