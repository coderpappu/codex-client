import { Link } from "react-router-dom";

const MobileTabletFooterMenu = ({ about, aboutLink }) => {
  return (
    <>
      <li>
        <Link
          to={aboutLink}
          className="text-gray-800 text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
        >
          {about}
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="text-gray-800 text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
        >
          Testimonial
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="text-gray-800 text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
        >
          Affiliate
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="text-gray-800 text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
        >
          Partner
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="text-gray-800 text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
        >
          Contact Us
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="text-gray-800 text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
        >
          Life at Codex
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="text-gray-800 text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
        >
          We Care
        </Link>
      </li>
    </>
  );
};

export default MobileTabletFooterMenu;
