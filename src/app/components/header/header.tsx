'use client';

import { Link } from 'react-scroll';
import Hamburger from '../hamburger';
import ThemeIcon from '../themeIcon';
import { DownloadCVButton } from '../downloadCVButton/downloadCVButton';

const linkClassName =
  'cursor-pointer	text-gray-light-600 dark:text-gray-dark-600';

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
            <Link smooth to="about">
              About
            </Link>
          </li>
          <li className={linkClassName}>
            <Link smooth to="work">
              Work
            </Link>
          </li>
          <li className={linkClassName}>
            <Link smooth to="testimonials">
              Testimonials
            </Link>
          </li>
          <li className={linkClassName}>
            <Link to="contant" smooth>
              Contact
            </Link>
          </li>
        </ul>
        <span className="w-0.5 h-6 text-gray-light-100 dark:text-gray-dark-100 mx-6">
          |
        </span>
        <button>
          <ThemeIcon />
        </button>
        <DownloadCVButton />
      </div>
      <Hamburger />
    </header>
  );
};

export default Header;
