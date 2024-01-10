'use client';

import Hamburger from '../hamburger/hamburger';
import ThemeIcon from '../themeIcon/themeIcon';

const linkClassName = 'text-gray-light-600 dark:text-gray-dark-600';

const Header: React.FC = () => {
  const logoText = '<SS />';

  return (
    <header className="w-full p-4 md:px-20 md:py-4 flex items-center">
      <h2 className="text-gray-light-900 dark:text-gray-dark-900 text-3xl font-bold mr-auto">
        {logoText}
      </h2>
      <div className="hidden md:flex items-center justify-center">
        <ul className="items-center gap-6 md:flex">
          <li className={linkClassName}>
            <a href="#">About</a>
          </li>
          <li className={linkClassName}>
            <a href="#">Work</a>
          </li>
          <li className={linkClassName}>
            <a href="#">Testimonials</a>
          </li>
          <li className={linkClassName}>
            <a href="#">Contact</a>
          </li>
        </ul>
        <span className="w-0.5 h-6 text-gray-light-100 dark:text-gray-dark-100 mx-6">
          |
        </span>
        <button>
          <ThemeIcon />
        </button>
        <button className="bg-gray-900 text-gray-light-50 dark:bg-gray-dark-900 dark:text-gray-dark-50 rounded-xl py-1.5 px-4 hover:bg-gray-light-950 dark:hover:bg-gray-dark-950 transition-colors duration-300	">
          Download CV
        </button>
      </div>
      <Hamburger />
    </header>
  );
};

export default Header;
