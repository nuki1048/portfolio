export const DownloadCVButton: React.FC = () => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      download
      href="https://res.cloudinary.com/dqfxgsnor/image/upload/v1713541175/CV_JUNIOR_FRONTEND_20231019_120504_0000_lydwia.pdf"
    >
      <button className="bg-gray-900 text-gray-light-50 dark:bg-gray-dark-900 dark:text-gray-dark-50 rounded-xl py-1.5 px-4 hover:bg-gray-light-950 dark:hover:bg-gray-dark-950 transition-colors duration-300">
        Download CV
      </button>
    </a>
  );
};
