import useCheckMobileScreen from '@/app/hooks/useCheckMobileScreen';

import CloseIcon from '../../../../public/assets/icons/close-icon.svg';
import { useState } from 'react';
import ThemeIcon from '../themeIcon';
import { DownloadCVButton } from '../downloadCVButton/downloadCVButton';
const linkClassName = 'text-gray-600 dark:text-gray-dark-600';
const logoText = '<SS />';

const Hamburger: React.FC = () => {
  const isMobile = useCheckMobileScreen();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleMenu = (): void => {
    setIsOpen((state) => !state);
  };

  return (
    <>
      {isMobile && (
        <button
          className="lg:hidden text-gray-light-600 dark:text-gray-dark-600 hover:text-gray-light-900 dark:hover:text-gray-dark-900 transition-colors duration-300"
          onClick={handleToggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}
      {isMobile && isOpen && (
        <div className="absolute z-20 w-full h-full left-0 flex flex-col items-start top-0 p-4 bg-gray-light-100 dark:bg-gray-dark">
          <div className="w-full flex items-center justify-between pb-4 border-b border-b-gray-light-100 dark:border-b-gray-dark-100">
            <h2 className="text-gray-light-900 dark:text-gray-dark-900 text-3xl font-bold mr-auto">
              {logoText}
            </h2>
            <button onClick={handleToggleMenu}>
              <CloseIcon />
            </button>
          </div>
          <ul className="w-full flex flex-col items-start gap-6 py-4 border-b border-b-gray-light-100 dark:border-b-gray-dark-100">
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
          <button className="w-full flex justify-between items-center pt-4 text-gray-light-600 dark:text-gray-dark-600">
            Switch theme
            <ThemeIcon />
          </button>
          <DownloadCVButton />
        </div>
      )}
    </>
  );
};
export default Hamburger;
