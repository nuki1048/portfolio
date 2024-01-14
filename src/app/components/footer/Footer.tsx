import CopyrightIcon from '../../../../public/assets/icons/copyrights-icon.svg';
const Footer: React.FC = () => {
  return (
    <footer className="py-6  bg-gray-light-50 dark:bg-gray-dark-50 flex justify-center items-center gap-2">
      <CopyrightIcon className="w-4 h-4 stroke-gray-light-600 dark:stroke-gray-dark-600" />
      <h4 className="text-xs text-sm text-center text-gray-light-600 dark:text-gray-dark-600">
        2024 | Designed and coded with ❤️️ by Sagar Shah
      </h4>
    </footer>
  );
};
export default Footer;
