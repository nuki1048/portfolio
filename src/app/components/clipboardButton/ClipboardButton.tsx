'use client';
import Image from 'next/image';
import CopyIcon from '../../../../public/assets/icons/copy-icon.svg';
interface Props {
  textToCopy: string;
}

const ClipboardButton: React.FC<Props> = ({ textToCopy }) => {
  const handleClick = () => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    // TODO: Add tooltip after click
    <button
      className="bg-transparent w-6 h-6 md:w-8 md:h-8 hover:drop-shadow-xl transition-all duration-300"
      onClick={handleClick}
    >
      <CopyIcon className="w-full h-full stroke-gray-light-600 dark:stroke-gray-dark-600" />
    </button>
  );
};

export default ClipboardButton;
