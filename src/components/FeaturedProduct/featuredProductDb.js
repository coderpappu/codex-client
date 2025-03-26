import ICTContest from "../../assets/Portfolio/contest-home.png";
import ClearnaceImage from "../../assets/Products/Clearance/report.png";
import NexusProImage from "../../assets/Products/Nextuspro/dashboard.webp";
import AcademiaImage from "../../assets/Products/school/school_management.webp";
const featuredProduct = [
  {
    id: 1,
    category: "all",
    image: ClearnaceImage,
    title: "E-Clearance",
    animation: "fade-left",
    subtitle: "The Future of Student Clearance Management!",
    text: "E-Clearance by Codex Devware is a smart and efficient clearance solution for universities and polytechnics. It simplifies the clearance process by tracking student dues, managing approvals, and generating clearance certificates—all in one platform!",
    exploreLink: "/clearance",
    demoLink: "/clearance",
  },
  {
    id: 2,
    category: "Dashboard",
    image: NexusProImage,
    title: "Nextus Pro",
    animation: "fade-right",
    subtitle: "All-in-One eCommerce Management Dashboard",
    text: "Nextus Pro is a powerful, feature-rich, and intuitive dashboard designed to streamline eCommerce operations, optimize workflows, and maximize productivity with greater efficiency and accuracy.",
    exploreLink: "https://nexuspro.codexdevware.com/",
    demoLink: "/",
  },

  {
    id: 3,
    category: "Academy",
    image: AcademiaImage,
    title: "Academia",
    animation: "fade-left",
    subtitle: "Effortless School Administration from a Single Platform",
    text: "Academia is a comprehensive, user-friendly school management software designed to streamline administrative tasks, enhance communication, and ensure seamless academic operations with greater efficiency and control.",
    exploreLink: "https://academia.codexdevware.com/",
    demoLink: "/",
  },
  {
    id: 4,
    category: "Quiz",
    image: ICTContest,
    title: "CodexMart",
    animation: "fade-right",
    subtitle: "Empower Your eBusiness with a Seamless Multi-Vendor Solution",
    text: "CodexMart is a versatile, feature-rich solution designed to manage multiple businesses and unlimited vendors from a single panel. With extensive zone coverage, it supports various sectors, including food, grocery, eCommerce, parcel delivery, and more — all in one platform.",
    exploreLink: "https://ictcontest.codexdevware.com/",
    demoLink: "/",
  },
];
export default featuredProduct;
