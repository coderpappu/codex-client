import React from "react";
import { Link } from "react-router-dom";

const FooterProjectsMenu = () => {
  return (
    <div>
      {/* Footer Menu Header */}

      <p className="font-bold text-[22px] tracking-wide text-gray-900">
        Quick Links
      </p>
      <ul className="mt-2 space-y-2">
        <li>
          <Link
            href="/services/web_development/3"
            className="text-gray-800 text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-gray-800 text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterProjectsMenu;
