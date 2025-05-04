import aboutSeo from "../../assets/services/about_service.svg";
import seoDetails from "../../assets/services/aboutSeo.svg";
import androidFirstImg from "../../assets/services/Android Dev/FirstImg.svg";
import androidSecondImg from "../../assets/services/Android Dev/secondImg.svg";
import androidThirdImg from "../../assets/services/Android Dev/thirdImg.svg";
import ecommerceFirstImg from "../../assets/services/E-Commerce/firstEcommerceImg.svg";
import ecommerceSecondImg from "../../assets/services/E-Commerce/secondEcommerceImg.svg";
import ecommerceThirdImg from "../../assets/services/E-Commerce/thirdEcommerceImg.svg";
import keyReOne from "../../assets/services/keyReOne.svg";
import keyReThree from "../../assets/services/KeyReThree.svg";
import keyReTwo from "../../assets/services/keyReTwo.svg";
import logoDesignFirstImg from "../../assets/services/Logo Design/FirstLogoImg.svg";
import logoDesignSecondImg from "../../assets/services/Logo Design/SecondLogoImg.svg";
import logoDesignThirdImg from "../../assets/services/Logo Design/ThirdLogoImg.svg";
import pluginFirstImg from "../../assets/services/Plugin/firstImg.svg";
import pluginSecondImg from "../../assets/services/Plugin/SecondImg.svg";
import pluginThirdImg from "../../assets/services/Plugin/thirdSecondImg.svg";
import seoImportance from "../../assets/services/seo_importace.svg";
import SeoOne from "../../assets/services/SeoOne.svg";
import SeoThree from "../../assets/services/SeoThree.svg";
import SeoTwo from "../../assets/services/SeoTwo.svg";
import uiFirstImage from "../../assets/services/UiUX Design/firstImg.svg";
import uiSecondImage from "../../assets/services/UiUX Design/secondImg.svg";
import uiThirdImage from "../../assets/services/UiUX Design/thirdImg.svg";
import websiteSolFirstImg from "../../assets/services/Website Solution/firstWebSolution.svg";
import websiteSolSecondImg from "../../assets/services/Website Solution/secondWebSolution.svg";
import websiteSolThirdImg from "../../assets/services/Website Solution/thirdWebSolution.svg";
import wordpressFirstImg from "../../assets/services/Wordpress/firstWordImg.svg";
import wordpressSecondImg from "../../assets/services/Wordpress/secondWordImg.svg";
import wordpressThirdImg from "../../assets/services/Wordpress/thirdWordImg.svg";

const serviceData = [
  {
    catId: "seo-marketing",
    category: "SEO & Marketing",
    subcategory: [
      {
        id: 1,
        subcategory_Name: "All in one SEO",
        about: {
          title: "What is SEO, and How Does It Works ?",
          description:
            "Search Engine Optimization, often abbreviated as SEO, is a critical marketing strategy aimed at achieving higher rankings on popular search engines like Google. To successfully optimize a website for search engines, one must adhere to specific ranking factors and guidelines. The primary objective of SEO is to enhance a website's visibility and position within search engine results.",
          image: seoDetails,
          animation: "fade-right",
        },
        serviceDetails: {
          title: "All In One seo Service",
          description:
            "Search engine optimization (SEO) is the process of optimizing a website to rank higher in search engine results pages (SERPs). This means that when people search for keywords or phrases related to your website, your website will appear higher in the search results",
          image: aboutSeo,
          animation: "fade-left",
        },
        importanceOfService: {
          title: "Why is SEO Important For business ?",
          image: seoImportance,
          importanceData: [
            {
              id: 1,
              title:
                "Boost your website's ranking and visibility in search results.",
              image: "",
            },
            {
              id: 2,
              title:
                "Drive organic traffic to your website and increase website visits",
              image: "",
            },
            {
              id: 3,
              title: "Generate more leads and sales for your business.",
              image: "",
            },
            {
              id: 4,
              title:
                "Improve your website's content and make it more search engine friendly.",
              image: "",
            },
            {
              id: 5,
              title:
                "Build backlinks to your website and enhance your website's authority.",
              image: "",
            },
            {
              id: 6,
              title:
                "Stay up-to-date with the latest SEO trends and algorithm changes.",
              image: "",
            },
          ],
        },
        servicePackage: {
          title: "Our All in One SEO Service Pack",
          description: null,
          image: null,
          packages: [
            {
              id: 1,
              title: "Grow Your Business with SEO",
              description:
                " Search engine optimization (SEO) is the process of enhancing your website's ranking in search engine results pages (SERPs). This involves optimizing your website's content, structure, and technical elements to make it more relevant and user-friendly to search engines. By improving your SEO, you can drive more organic traffic to your website, enhance brand awareness, and ultimately boost your business ",
            },
            {
              id: 2,
              title: "Uncover the Power of Keywords for Effective SEO",
              description:
                " Keywords are the foundation of successful SEO. They are the words and phrases that people use to search for information online. By identifying and strategically incorporating relevant keywords into your website's content, meta descriptions, and other elements, you can increase the likelihood that your website will appear in search results when users search for those terms.",
            },
            {
              id: 3,
              title: "Utilize Link Building to Strengthen Your SEO Strategy",
              description:
                " Link building is an essential component of SEO. It involves acquiring backlinks from external websites to your own. Backlinks act as votes of confidence for your website, signaling to search engines that your content is valuable and trustworthy. The more high-quality backlinks you have, the higher your website will rank in SERPs. ",
            },
            {
              id: 4,
              title: "Optimize Your Website's Content for Search Engines",
              description:
                "Content is king in the realm of SEO. Your website's content should be informative, engaging, and relevant to your target audience. It should also be optimized for search engines by incorporating relevant keywords, using meta descriptions effectively, and structuring your content with headings and subheadings. ",
            },
            {
              id: 5,
              title: "Embrace Technical SEO for a Robust Website Foundation",
              description:
                "Technical SEO focuses on the technical aspects of your website that can impact your search engine rankings. This includes factors like website speed, mobile-friendliness, and structured data markup. By addressing technical SEO issues, you can ensure that your website is crawlable and indexable by search engines, enhancing its overall SEO performance.",
            },
            {
              id: 6,
              title: "Stay Updated with SEO Trends for Long-Term Success",
              description:
                " SEO is an ever-evolving landscape, with search engine algorithms constantly changing. It's crucial to stay updated on the latest SEO trends and best practices to maintain your website's ranking and visibility. Regularly reviewing SEO guidelines, attending industry events, and consulting with SEO experts can help you stay ahead of the curve. ",
            },
          ],
        },
      },
      {
        id: 2,
        subcategory_Name: "Keyword Research",
        about: {
          title: "What is Keyword Research, and How Does It Works ?",
          description:
            "Keyword research is the process of identifying and analyzing search terms that people enter into search engines like Google. The goal of keyword research is to find the keywords that are most relevant to your business and target audience, and then use those keywords to optimize your website and online content",
          image: keyReOne,
          animation: "fade-right",
        },
        serviceDetails: {
          title: "Empower Your Content Strategy",
          description:
            "With our meticulously curated keyword list, you'll be equipped to craft content that resonates with your audience and drives organic traffic to your website. Our insights will guide your content creation process, ensuring that your content aligns with search engine intent and ranks highly in relevant searches.",
          image: keyReTwo,
          animation: "fade-left",
        },
        importanceOfService: {
          title: "Why is SEO Important For business ?",
          image: keyReThree,
          importanceData: [
            {
              id: 1,
              title: "Unleash Keyword Research for Business Growth",
              image: "",
            },
            {
              id: 2,
              title:
                "Navigating the Path to SEO Success with Keyword Research.",
              image: "",
            },
            {
              id: 3,
              title: "Unveiling the Power of Keyword Research for Businesses.",
              image: "",
            },
            {
              id: 4,
              title:
                "The Cornerstone of Effective Search Engine Optimization (SEO).",
              image: "",
            },
            {
              id: 5,
              title: "Harnessing Keyword Research for Business Success.",
              image: "",
            },
            {
              id: 6,
              title:
                "Unlocking the Importance of Keyword Research for Businesses.",
              image: "",
            },
          ],
        },
        servicePackage: {
          title: "Our All in Keyword Research Service Pack",
          description: null,
          image: null,
          packages: [
            {
              id: 1,
              title: "Uncover the Power of Keywords for Business Growth",
              description:
                "In today's digital landscape, keywords are the keys that unlock the doors to online visibility and business success. By strategically incorporating relevant keywords into your website's content, meta descriptions, and other elements, you can enhance your search engine rankings, attract targeted traffic, and drive conversions.",
            },
            {
              id: 2,
              title:
                "Unveil the Secrets of Search Intent with Keyword Research",
              description:
                "Keyword research goes beyond simply identifying popular search terms. It's about understanding the intent behind those searches, the information users seek, and the content they value. By deciphering search intent, you can craft content that aligns with user expectations, increasing your chances of ranking higher and engaging your audience effectively",
            },
            {
              id: 3,
              title:
                "Empower Your Content Strategy with Data-Driven Keyword Insights",
              description:
                "Effective content creation is fueled by data-driven keyword insights. Keyword research provides a roadmap for your content, guiding you towards topics that resonate with your target audience and drive search engine traffic. With these insights, you can create content that is both relevant and valuable, attracting the right visitors and boosting your online presence",
            },
            {
              id: 4,
              title: "Maximize Your ROI with Strategic Keyword Targeting",
              description:
                "Keyword research is an investment in your business's digital growth. By identifying the most profitable keywords, you can optimize your marketing efforts, maximizing your return on investment (ROI). Targeted keyword use leads to more qualified traffic, higher conversion rates, and ultimately, increased revenue.",
            },
            {
              id: 5,
              title:
                "Uncover Lucrative Keyword Opportunities with Expert Guidance",
              description:
                "Navigating the complex world of keyword research can be daunting. Partner with experienced SEO professionals to uncover lucrative keyword opportunities that align with your business goals. Their expertise will guide you towards relevant, high-value keywords, ensuring that your SEO strategy is aligned with industry trends and search engine algorithms",
            },
            {
              id: 6,
              title:
                "Take the First Step Towards SEO Success with Keyword Research",
              description:
                "Embark on your journey towards SEO success with comprehensive keyword research. Unlock the power of keywords to enhance your website's visibility, attract targeted traffic, and achieve your business objectives. Let keyword research be your compass, guiding you towards a thriving online presence",
            },
          ],
        },
      },
      {
        id: 3,
        subcategory_Name: "One Page SEO",
        about: {
          title: "One Page SEO for Peak Web Performance!",
          description:
            "Elevate your online presence with our One Page SEO services. Streamline your web development for peak performance and enhanced visibility. Unlock the potential of your site with targeted optimization.",
          image: SeoOne,
          animation: "fade-right",
        },
        serviceDetails: {
          title: "Optimize Your Site",
          description:
            "Maximize your online impact with our expert site optimization services. Elevate performance, enhance user experience, and boost visibility. Let us optimize your site for success!",
          image: SeoThree,
          animation: "fade-left",
        },
        importanceOfService: {
          title: "Why is SEO Important For business ?",
          image: SeoTwo,
          importanceData: [
            {
              id: 1,
              title: "Strategic Keyword Optimization.",
              image: "",
            },
            {
              id: 2,
              title: "Performance Enhancement",
              image: "",
            },
            {
              id: 3,
              title: "Meta Tag and Description Optimization",
              image: "",
            },
            {
              id: 4,
              title: "Content Optimization",
              image: "",
            },
            {
              id: 5,
              title: "Analytics and Reporting",
              image: "",
            },
            {
              id: 6,
              title: "Targeted SEO Audits",
              image: "",
            },
          ],
        },
        servicePackage: {
          title: "Our All in One SEO Service Pack",
          description: null,
          image: null,
          packages: [
            {
              id: 1,
              title: "Keyword Research",
              description:
                "Identify high-impact keywords relevant to your business, strategically integrating them into your content for improved search engine visibility.",
            },
            {
              id: 2,
              title: "On-Page SEO Enhancements",
              description:
                "Fine-tune meta tags, headers, and other on-page elements to align with SEO best practices, enhancing your website's overall search engine performance.",
            },
            {
              id: 3,
              title: "Analytics and Reporting",
              description:
                "Utilize advanced analytics tools to track key performance metrics, providing valuable insights for continuous improvement and informed decision-making in your SEO strategy.",
            },
            {
              id: 4,
              title: "Proactive Service Support",
              description:
                "Stay ahead of issues with our Proactive Service Support. Our team works tirelessly to anticipate potential concerns, ensuring your experience is hassle-free.",
            },
            {
              id: 5,
              title: "24/7 Care Command",
              description:
                "Our 24/7 Care Command is at your service around the clock. Experience uninterrupted support whenever you need it, ensuring your satisfaction is our top priority.",
            },
            {
              id: 6,
              title: "Seamless Service Solutions",
              description:
                "Dive into the realm of hassle-free services with Seamless Service Solutions. We are committed to providing efficient, effective, and timely support to meet your unique needs.",
            },
          ],
        },
      },
    ],
  },
  {
    catId: "ui-ux-design",
    category: "UI/UX Design",
    subcategory: [
      {
        id: 1,
        subcategory_Name: "All in one SEO",
        about: {
          title: "Are UI and UX part of service design?",
          description:
            "UI centers on aesthetic design, ensuring visually appealing digital solutions, while UX focuses on seamless interactions, optimizing the user journey. Service design, encompassing UX, organizes resources for superior customer experiences. It aligns internal operations with quality user experiences. Our UI and UX services synergize with service design, crafting holistic, user-centric digital platforms.",
          image: uiFirstImage,
          animation: "fade-right",
        },
        serviceDetails: {
          title: "Enhancing Your Product/Service",
          description:
            "UI and UX consulting services enhance products by evaluating and improving existing ones or guiding the creation of new ones. Rooted in user-driven design, these services ensure user-friendliness, align with customer needs, and foster seamless experiences. Offering insights into user behavior and preferences, they provide a competitive edge, identify journey roadblocks, and optimize navigation. Ultimately, UI & UX consulting drives market success, elevating user experience and boosting revenue. ",
          image: uiSecondImage,
          animation: "fade-left",
        },
        importanceOfService: {
          title: "What you will get?",
          image: uiThirdImage,
          importanceData: [
            {
              id: 1,
              title: "Exceptional Web Design for Applications",
              image: "",
            },
            {
              id: 2,
              title: "Pixel-perfect, Unique, and Modern App UI",
              image: "",
            },
            {
              id: 3,
              title: "Simple and Modern designs that are user-friendly",
              image: "",
            },
            {
              id: 4,
              title:
                "Essential Design Elements: Fonts, Icons, Graphics, and Colors",
              image: "",
            },
            {
              id: 5,
              title: "Unique custom-made creative UI/UX design",
              image: "",
            },
            {
              id: 6,
              title: "Project ownership after completion",
              image: "",
            },
          ],
        },
        servicePackage: {
          title: "Expert Support for UI/UX Design Brilliance",
          description: null,
          image: null,
          packages: [
            {
              id: 1,
              title: "User-Centric Interface Design",
              description:
                "Craft visually appealing and intuitive interfaces tailored to your target audience, ensuring a seamless and enjoyable user experience.",
            },
            {
              id: 2,
              title: "Responsive Design Solutions",
              description:
                "Develop designs that adapt seamlessly across various devices and screen sizes, guaranteeing a consistent and engaging user experience on desktop, tablet, and mobile.",
            },
            {
              id: 3,
              title: "Interactive Prototyping",
              description:
                "Bring your ideas to life with interactive prototypes, allowing you to visualize and test the user journey before final implementation for a refined and user-friendly interface.",
            },
            {
              id: 4,
              title: "Proactive Service Support",
              description:
                "Stay ahead of issues with our Proactive Service Support. Our team works tirelessly to anticipate potential concerns, ensuring your experience is hassle-free.",
            },
            {
              id: 5,
              title: "24/7 Care Command",
              description:
                "Our 24/7 Care Command is at your service around the clock. Experience uninterrupted support whenever you need it, ensuring your satisfaction is our top priority.",
            },
            {
              id: 6,
              title: "Seamless Service Solutions",
              description:
                "Dive into the realm of hassle-free services with Seamless Service Solutions. We are committed to providing efficient, effective, and timely support to meet your unique needs.",
            },
          ],
        },
      },
      {
        id: 2,
        subcategory_Name: "All in one SEO",
        about: {
          title: "What is SEO, and How Does It Works ?",
          description:
            "Search Engine Optimization, often abbreviated as SEO, is a critical marketing strategy aimed at achieving higher rankings on popular search engines like Google. To successfully optimize a website for search engines, one must adhere to specific ranking factors and guidelines. The primary objective of SEO is to enhance a website's visibility and position within search engine results.",
          image: logoDesignFirstImg,
          animation: "fade-right",
        },
        serviceDetails: {
          title: "All In One seo Service",
          description:
            "We are one of the best companies that provide all kinds of SEO services in the USA and worldwide. We have a dedicated and experienced team who are highly-skilled in search engine optimization. Codex is always ready to provide you the best SEO services and solutions at a very reasonable price.",
          image: logoDesignSecondImg,
          animation: "fade-left",
        },
        importanceOfService: {
          title: "Why is SEO Important For business ?",
          image: logoDesignThirdImg,
          importanceData: [
            {
              id: 1,
              title:
                "SEO builds the brand and credibility of any Business organization.",
              image: "",
            },
            {
              id: 2,
              title:
                "SEO builds the brand and credibility of any Business organization.",
              image: "",
            },
            {
              id: 3,
              title:
                "SEO builds the brand and credibility of any Business organization.",
              image: "",
            },
            {
              id: 4,
              title:
                "SEO builds the brand and credibility of any Business organization.",
              image: "",
            },
            {
              id: 5,
              title:
                "SEO builds the brand and credibility of any Business organization.",
              image: "",
            },
            {
              id: 6,
              title:
                "SEO builds the brand and credibility of any Business organization.",
              image: "",
            },
          ],
        },
        servicePackage: {
          title: "Our All in One SEO Service Pack",
          description: null,
          image: null,
          packages: [
            {
              id: 1,
              title: "Keyword Research",
              description:
                "Our SEO team is highly-skilled in keyword research. We can provide you the best keyword research services at a very reasonable price. We do proper competitor analysis for all keywords and offer you the lowest competitive keywords in your niche or service. With our keywords, you can easily rank higher in search engines. attention to content. That’s why it has become almost impossible to rank higher in Google without optimizing your ",
            },
            {
              id: 2,
              title: "Keyword Research",
              description:
                "Our SEO team is highly-skilled in keyword research. We can provide you the best keyword research services at a very reasonable price. We do proper competitor analysis for all keywords and offer you the lowest competitive keywords in your niche or service. With our keywords, you can easily rank higher in search engines. attention to content. That’s why it has become almost impossible to rank higher in Google without optimizing your ",
            },
            {
              id: 3,
              title: "Keyword Research",
              description:
                "Our SEO team is highly-skilled in keyword research. We can provide you the best keyword research services at a very reasonable price. We do proper competitor analysis for all keywords and offer you the lowest competitive keywords in your niche or service. With our keywords, you can easily rank higher in search engines. attention to content. That’s why it has become almost impossible to rank higher in Google without optimizing your ",
            },
            {
              id: 4,
              title: "Proactive Service Support",
              description:
                "Stay ahead of issues with our Proactive Service Support. Our team works tirelessly to anticipate potential concerns, ensuring your experience is hassle-free.",
            },
            {
              id: 5,
              title: "24/7 Care Command",
              description:
                "Our 24/7 Care Command is at your service around the clock. Experience uninterrupted support whenever you need it, ensuring your satisfaction is our top priority.",
            },
            {
              id: 6,
              title: "Seamless Service Solutions",
              description:
                "Dive into the realm of hassle-free services with Seamless Service Solutions. We are committed to providing efficient, effective, and timely support to meet your unique needs.",
            },
          ],
        },
      },
    ],
  },
  {
    catId: "web-development",
    category: "Web Development",
    subcategory: [
      {
        id: 1,
        subcategory_Name: "WordPress Advantage.",
        about: {
          title: "What is WordPress, and How Does It Works?",
          description:
            "WordPress, a leading content management system (CMS), simplifies website creation and management. Operating on PHP and MySQL, it offers an intuitive interface, themes, and plugins for easy customization. With robust community support and open-source flexibility, WordPress empowers users to build dynamic websites effortlessly, even without extensive technical expertise.",
          image: wordpressFirstImg,
          animation: "fade-right",
        },
        serviceDetails: {
          title: "Why Your Website Deserves the WordPress Advantage?",
          description:
            "WordPress excels in flexibility, simplicity, and customization, making it the go-to choice for website development. Its rich theme and plugin ecosystem enables easy creation of diverse sites. With a user-friendly interface and strong community support, content management is efficient. SEO-friendly and regularly updated, WordPress offers a robust foundation for dynamic, scalable, and feature-rich websites, surpassing many alternatives.",
          image: wordpressSecondImg,
          animation: "fade-left",
        },
        importanceOfService: {
          title: "Why You Should Use WordPress?",
          image: wordpressThirdImg,
          importanceData: [
            {
              id: 1,
              title: "Intuitive interface fosters ease.",
              image: "",
            },
            {
              id: 2,
              title: "Adaptable for diverse website needs.",
              image: "",
            },
            {
              id: 3,
              title: "Extensive network aids problem-solving.",
              image: "",
            },
            {
              id: 4,
              title: "Themes and plugins for tailored design.",
              image: "",
            },
            {
              id: 5,
              title: "Built-in features enhance search visibility.",
              image: "",
            },
            {
              id: 6,
              title: "Grows seamlessly with evolving requirements.",
              image: "",
            },
          ],
        },
        servicePackage: {
          title: "Crafting Solutions for Your Unique Web Needs",
          description: null,
          image: null,
          packages: [
            {
              id: 1,
              title: "WordPress Bug Fixes",
              description:
                "WordPress bug fixes tackle issues within the platform, such as errors, malfunctions, or unexpected behavior in themes, plugins, or the core software. These fixes enhance stability, functionality, and security by addressing coding errors or compatibility issues. Regular updates and patches are released to ensure a smooth and bug-free user experience.",
            },
            {
              id: 2,
              title: "WordPress Security",
              description:
                "WordPress security safeguards websites from threats and unauthorized access. This includes regular updates, strong passwords, secure hosting, SSL encryption, and security plugins. Monitoring user permissions, firewalls, and backups add extra layers of protection. A proactive security approach prevents hacking and data breaches, ensuring a safe online environment for site owners and users.",
            },
            {
              id: 3,
              title: "WordPress Maintenance",
              description:
                "WordPress maintenance, support, and backups ensure peak performance, security, and resilience. Regular updates patch vulnerabilities, support troubleshoots issues, and backups protect against data loss. This holistic approach safeguards a WordPress website's integrity and functionality.",
            },
            {
              id: 4,
              title: "Proactive Service Support",
              description:
                "Stay ahead of issues with our Proactive Service Support. Our team works tirelessly to anticipate potential concerns, ensuring your experience is hassle-free.",
            },
            {
              id: 5,
              title: "24/7 Care Command",
              description:
                "Our 24/7 Care Command is at your service around the clock. Experience uninterrupted support whenever you need it, ensuring your satisfaction is our top priority.",
            },
            {
              id: 6,
              title: "Seamless Service Solutions",
              description:
                "Dive into the realm of hassle-free services with Seamless Service Solutions. We are committed to providing efficient, effective, and timely support to meet your unique needs.",
            },
          ],
        },
      },
      {
        id: 2,
        subcategory_Name: "eCommerce Solution",
        about: {
          title: "Boost Your Business with Our E-Commerce Solutions!",
          description:
            "Unlock growth with our specialized E-Commerce solutions tailored to elevate your business. Experience seamless transactions, personalized experiences, and amplified success in the digital marketplace. Explore the future of online retail with us!",
          image: ecommerceFirstImg,
          animation: "fade-right",
        },
        serviceDetails: {
          title: "Accelerating Your Digital Success ",
          description:
            "Discover a dynamic fusion of technology as we offer tailored e-commerce solutions. From crafting user-friendly interfaces to seamless transactions, our expertise in website building propels your business to new heights. Join us on the fast track to digital excellence, where we redefine online success.",
          image: ecommerceSecondImg,
          animation: "fade-left",
        },
        importanceOfService: {
          title: "Do you want to take your business to the next level online?",
          image: ecommerceThirdImg,
          importanceData: [
            {
              id: 1,
              title: "Customizing e-commerce for tailored success.",
              image: "",
            },
            {
              id: 2,
              title: "Optimize transactions, elevate your online presence.",
              image: "",
            },
            {
              id: 3,
              title: "Tech excellence and personalized strategy blend.",
              image: "",
            },
            {
              id: 4,
              title: "Seamless transactions, redefined online success.",
              image: "",
            },
            {
              id: 5,
              title: "Dedication to tailoring solutions for success.",
              image: "",
            },
            {
              id: 6,
              title: "Accelerate with expertise in tailored solutions.",
              image: "",
            },
          ],
        },
        servicePackage: {
          title: "Expert Support for Your Success",
          description: null,
          image: null,
          packages: [
            {
              id: 1,
              title: "Guiding Success: Expert Assistance",
              description:
                "Navigate the complexities of your goals with confidence. Our expert assistance is a guiding force, ensuring your journey is marked by seamless success. From troubleshooting to strategic planning, we've got your back",
            },
            {
              id: 2,
              title: "Navigating Excellence: Dedicated Support",
              description:
                "Embark on a journey marked by excellence with our dedicated support. We are committed to navigating challenges alongside you, providing tailored solutions and unwavering assistance to ensure your path is clear and triumphant",
            },
            {
              id: 3,
              title: "Empower Your Path: Pro Support",
              description:
                "Empower your path to success with our proactive support. Our professional assistance is designed to anticipate your needs, offering strategic guidance and expert insights to empower you at every stage of your journey.",
            },
            {
              id: 4,
              title: "Precision Support: Elevate Operations",
              description:
                "Elevate your operations with precision support. We understand the importance of efficiency in your endeavors. Our support is finely tuned to enhance your operational performance, ensuring a seamless and optimized experience",
            },
            {
              id: 5,
              title: "On-Demand Assistance: Crafted Success",
              description:
                "Craft success on your terms with our on-demand assistance. Tailored to meet your unique requirements, our support is ready to address your challenges promptly, providing the crafted success you deserve.",
            },
            {
              id: 6,
              title: "Swift Solutions: Expert Tailored Support",
              description:
                "Experience the swiftness of success with our expertly tailored support. Swift solutions are our forte, offering responsive assistance that aligns perfectly with your specific needs. Your success journey just got faster and more efficient.",
            },
          ],
        },
      },
      {
        id: 3,
        subcategory_Name: "Building Tomorrow's Web Today",
        about: {
          title: "Shaping the Digital Landscape with Expert Web Development",
          description:
            "Welcome to Codex Devware, where we excel in Shaping the Digital Landscape with Expert Web Development. Our dedicated team merges creativity with technical finesse to craft websites that redefine online experiences. From sleek designs to robust functionality, each project is an innovative journey, ensuring your digital presence stands out. Join us at the forefront of web development, where every line of code contributes to shaping the future of the digital world.",
          image: websiteSolFirstImg,
          animation: "fade-right",
        },
        serviceDetails: {
          title: "Building Tomorrow's Web Today",
          description:
            "Step into the future of the web with our expert development. We're dedicated to 'Building Tomorrow's Web Today.' Our team crafts innovative websites, anticipating future trends. Propel your digital presence forward with cutting-edge technology and user-centric design.",
          image: websiteSolSecondImg,
          animation: "fade-left",
        },
        importanceOfService: {
          title: "Ready to launch your website into the future?",
          image: websiteSolThirdImg,
          importanceData: [
            {
              id: 1,
              title: "We bring cutting-edge tech to anticipate future trends.",
              image: "",
            },
            {
              id: 2,
              title: "Our developers and designers make your vision a reality.",
              image: "",
            },
            {
              id: 3,
              title:
                "Expect a website that exceeds expectations through teamwork.",
              image: "",
            },
            {
              id: 4,
              title: "Design that not only meets but prioritizes user needs.",
              image: "",
            },
            {
              id: 5,
              title:
                "Fuel your brand's future with a standout online presence!",
              image: "",
            },
            {
              id: 6,
              title:
                "Be a digital pioneer - leading the way in web development.",
              image: "",
            },
          ],
        },
        servicePackage: {
          title: "Your Supportive Partner in Service Excellence",
          description: null,
          image: null,
          packages: [
            {
              id: 1,
              title: "Rapid Response Center",
              description:
                "Our Rapid Response Center is dedicated to swiftly addressing your concerns, providing immediate solutions, and ensuring uninterrupted service.",
            },
            {
              id: 2,
              title: "Expert Assistance Hub",
              description:
                "Navigate challenges with ease. Our Expert Assistance Hub offers comprehensive support, connecting you with knowledgeable professionals to guide you through every service-related query.",
            },
            {
              id: 3,
              title: "Resolution Junction",
              description:
                "At Resolution Junction, we specialize in resolving issues efficiently. Trust us to analyze, troubleshoot, and provide quick solutions to keep your services running seamlessly.",
            },
            {
              id: 4,
              title: "Proactive Service Support",
              description:
                "Stay ahead of issues with our Proactive Service Support. Our team works tirelessly to anticipate potential concerns, ensuring your experience is hassle-free.",
            },
            {
              id: 5,
              title: "24/7 Care Command",
              description:
                "Our 24/7 Care Command is at your service around the clock. Experience uninterrupted support whenever you need it, ensuring your satisfaction is our top priority.",
            },
            {
              id: 6,
              title: "Seamless Service Solutions",
              description:
                "Dive into the realm of hassle-free services with Seamless Service Solutions. We are committed to providing efficient, effective, and timely support to meet your unique needs.",
            },
          ],
        },
      },
      {
        id: 4,
        subcategory_Name: "All in one SEO",
        about: {
          title: "Craft Custom Apps That Drive Engagement and Success",
          description:
            "In today's dynamic business landscape, mobile apps have become an indispensable tool for reaching new customers, enhancing brand loyalty, and driving revenue growth. Our comprehensive app development services empower businesses of all sizes to harness the power of mobile technology and achieve their strategic goals.",
          image: androidFirstImg,
          animation: "fade-right",
        },
        serviceDetails: {
          title: "Unleash the Power of Apps to Elevate Your Brand",
          description:
            "Our comprehensive app development services empower businesses of all sizes to harness the power of mobile technology and achieve their strategic goals. From ideation and prototyping to deployment and ongoing maintenance, our experienced team of app developers will guide you through every step of the process, ensuring that your app is tailored to your specific needs and delivers exceptional user experiences. ",
          image: androidSecondImg,
          animation: "fade-left",
        },
        importanceOfService: {
          title: "Do you wanna build your own app ?",
          image: androidThirdImg,
          importanceData: [
            {
              id: 1,
              title: "Let Us Bring Your Mobile Vision to Life.",
              image: "",
            },
            {
              id: 2,
              title: "Elevate Your Brand with Custom-Built Solutions.",
              image: "",
            },
            {
              id: 3,
              title:
                "Partner with Us to Create the Apps That Will Drive Your Success.",
              image: "",
            },
            {
              id: 4,
              title:
                "Your app idea is just a click away. Let us turn it into a reality.",
              image: "",
            },
            {
              id: 5,
              title: "We don't just build apps, we create experiences.",
              image: "",
            },
            {
              id: 6,
              title:
                "Get your app noticed with our expert marketing and promotion services.",
              image: "",
            },
          ],
        },
        servicePackage: {
          title: "Our Awesome Service Packages",
          description: null,
          image: null,
          packages: [
            {
              id: 1,
              title: "App Strategy and Consultation",
              description:
                "In today's competitive landscape, a well-defined app strategy is crucial for success. Our team of experienced app consultants will work closely with you to understand your business goals, target audience, and unique selling propositions. We'll then conduct a thorough market analysis to identify opportunities and challenges, and help you define the scope and functionality of your app.",
            },
            {
              id: 2,
              title: "App Design and User Experience (UX)",
              description:
                "A great app is not just about functionality; it's also about creating an engaging and seamless user experience. Our UX experts will guide you through the entire design process, from creating user personas and journey maps to developing wireframes and prototypes. We'll focus on creating an intuitive and user-friendly interface that resonates with your target audience.",
            },
            {
              id: 3,
              title: "App Development and Programming",

              description:
                "Once the design is finalized, our team of skilled developers will bring your app to life. We'll choose the right programming language and development tools based on your app's requirements and target platforms. We'll build a robust backend that handles data management and security, and a responsive frontend that delivers a consistent experience across different devices ",
            },
            {
              id: 4,
              title: "App Testing and Quality Assurance (QA)",

              description:
                "Before your app goes live, it's essential to ensure it meets the highest quality standards. Our experienced QA testers will conduct rigorous testing across various devices and platforms to identify and fix any bugs or usability issues. We'll also implement security measures to protect your app's data and ensure it complies with industry standards.",
            },
            {
              id: 5,
              title: "App Deployment and Launch",
              description:
                "Launching your app is a critical milestone, and we'll be there to guide you every step of the way. We'll handle the app submission process to the relevant app stores and provide you with the necessary documentation and support. We'll also monitor your app's performance and user feedback to identify areas for improvement and ensure a smooth launch.",
            },
            {
              id: 6,
              title: "App Marketing and Promotion",

              description:
                "A successful app launch is just the beginning. Our marketing experts will help you develop a comprehensive app marketing strategy to increase visibility, drive downloads, and engage with your target audience. We'll utilize various marketing channels, including social media, app store optimization (ASO), and content marketing, to reach your target audience and build a loyal user base. ",
            },
          ],
        },
      },
      {
        id: 5,
        subcategory_Name: "All in one SEO",
        about: {
          title: "What is Plugin, and How Does It Works ?",
          description:
            "Plugin Development, often abbreviated as SEO, is a critical marketing strategy aimed at achieving higher rankings on popular search engines like Google. To successfully optimize a website for search engines, one must adhere to specific ranking factors and guidelines. The primary objective of SEO is to enhance a website's visibility and position within search engine results.",
          image: pluginFirstImg,
          animation: "fade-right",
        },
        serviceDetails: {
          title: "All In One seo Service",
          description:
            "We are one of the best companies that provide all kinds of SEO services in the USA and worldwide. We have a dedicated and experienced team who are highly-skilled in search engine optimization. Codex is always ready to provide you the best SEO services and solutions at a very reasonable price.",
          image: pluginSecondImg,
          animation: "fade-left",
        },
        importanceOfService: {
          title: "Why is SEO Important For business ?",
          image: pluginThirdImg,
          importanceData: [
            {
              id: 1,
              title:
                "SEO builds the brand and credibility of any Business organization.",
              image: "",
            },
            {
              id: 2,
              title:
                "SEO builds the brand and credibility of any Business organization.",
              image: "",
            },
            {
              id: 3,
              title:
                "SEO builds the brand and credibility of any Business organization.",
              image: "",
            },
            {
              id: 4,
              title:
                "SEO builds the brand and credibility of any Business organization.",
              image: "",
            },
            {
              id: 5,
              title:
                "SEO builds the brand and credibility of any Business organization.",
              image: "",
            },
            {
              id: 6,
              title:
                "SEO builds the brand and credibility of any Business organization.",
              image: "",
            },
          ],
        },
        servicePackage: {
          title: "Our All in One SEO Service Pack",
          description: null,
          image: null,
          packages: [
            {
              id: 1,
              title: "Keyword Research",
              description:
                "Our SEO team is highly-skilled in keyword research. We can provide you the best keyword research services at a very reasonable price. We do proper competitor analysis for all keywords and offer you the lowest competitive keywords in your niche or service. With our keywords, you can easily rank higher in search engines. attention to content. That’s why it has become almost impossible to rank higher in Google without optimizing your ",
            },
            {
              id: 2,
              title: "Keyword Research",
              description:
                "Our SEO team is highly-skilled in keyword research. We can provide you the best keyword research services at a very reasonable price. We do proper competitor analysis for all keywords and offer you the lowest competitive keywords in your niche or service. With our keywords, you can easily rank higher in search engines. attention to content. That’s why it has become almost impossible to rank higher in Google without optimizing your ",
            },
            {
              id: 3,
              title: "Keyword Research",
              description:
                "Our SEO team is highly-skilled in keyword research. We can provide you the best keyword research services at a very reasonable price. We do proper competitor analysis for all keywords and offer you the lowest competitive keywords in your niche or service. With our keywords, you can easily rank higher in search engines. attention to content. That’s why it has become almost impossible to rank higher in Google without optimizing your ",
            },
            {
              id: 4,
              title: "Keyword Research",
              description:
                "Our SEO team is highly-skilled in keyword research. We can provide you the best keyword research services at a very reasonable price. We do proper competitor analysis for all keywords and offer you the lowest competitive keywords in your niche or service. With our keywords, you can easily rank higher in search engines. attention to content. That’s why it has become almost impossible to rank higher in Google without optimizing your ",
            },
            {
              id: 5,
              title: "Keyword Research",
              description:
                "Our SEO team is highly-skilled in keyword research. We can provide you the best keyword research services at a very reasonable price. We do proper competitor analysis for all keywords and offer you the lowest competitive keywords in your niche or service. With our keywords, you can easily rank higher in search engines. attention to content. That’s why it has become almost impossible to rank higher in Google without optimizing your ",
            },
            {
              id: 6,
              title: "Keyword Research",
              description:
                "Our SEO team is highly-skilled in keyword research. We can provide you the best keyword research services at a very reasonable price. We do proper competitor analysis for all keywords and offer you the lowest competitive keywords in your niche or service. With our keywords, you can easily rank higher in search engines. attention to content. That’s why it has become almost impossible to rank higher in Google without optimizing your ",
            },
          ],
        },
      },
    ],
  },
];
export default serviceData;
