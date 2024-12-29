const FooterResourcesMenu = () => {
  return (
    <div>
      {/* Footer Menu Header */}

      <p className="font-bold text-[22px] tracking-wide text-gray-900">
        Connect With Us
      </p>
      <ul className="mt-2 space-y-2">
        <li>
          <a
            href="https://www.youtube.com/channel/UC3KTj2-Cqn4j3Gxo3UVm9FQ"
            target="_blank"
            rel="noreferrer"
            className="text-gray-800 text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            Youtube
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/academy.codexdevware"
            target="_blank"
            rel="noreferrer"
            className="text-gray-800 text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/academy.codexdevware/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-800 text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/codex-devware/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-800 text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterResourcesMenu;
