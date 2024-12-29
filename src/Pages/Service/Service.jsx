import { useParams } from "react-router-dom";
import AboutMainService from "../../components/service/AboutMainService";
import serviceData from "../../components/service/ServiceData";
import Reviews from "../../components/service/Reviews";
import ServiceImportance from "../../components/service/ServiceImportance";
import ServicesIdea from "../../components/service/ServicesIdea";
import ServicePackages from "../../components/service/ServicePackages";
export default function Service() {
  //uses from useParams
  const { category, subcategoryID } = useParams();
  const { about, serviceDetails, importanceOfService, servicePackage } =
    serviceData.find((data) => data.catId === category).subcategory[
      subcategoryID - 1
    ]||{};
  return (
    <>
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
