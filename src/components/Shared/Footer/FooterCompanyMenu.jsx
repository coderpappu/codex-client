import { Link } from "react-router-dom";

const FooterCompanyMenu = () => {
  return (
    <div>
      {/* Footer Menu Header */}

      <p className="font-bold md:text-[22px]  tracking-wide text-gray-900">
        Explore Codex Devware
      </p>
      <ul className="mt-2 space-y-2">
        <li>
          <Link
            to="/aboutUs"
            className="text-gray-800 md:text-sm  transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-gray-800 text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            href="/aboutUs"
            className="text-gray-800 text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            Our Team
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-gray-800 text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            FAQS
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterCompanyMenu;
