'use client';
import CopyIcon from '../../../../public/assets/icons/copy-icon.svg';
import { useState } from 'react';
import Alert, { AlertStatus } from '../alert/Alert';
interface Props {
  textToCopy: string;
}

const ClipboardButton: React.FC<Props> = ({ textToCopy }) => {
  const [isOpenAlert, setIsOpenAlert] = useState<boolean>(false);

  const handleClick = () => {
    navigator.clipboard.writeText(textToCopy);

    setIsOpenAlert(true);
  };

  return (
    <>
      <button
        className="bg-transparent w-6 h-6 md:w-8 md:h-8 hover:drop-shadow-xl transition-all duration-300"
        onClick={handleClick}
      >
        <CopyIcon className="w-full h-full stroke-gray-light-600 dark:stroke-gray-dark-600" />
      </button>
      <Alert
        status={AlertStatus.Success}
        isOpen={isOpenAlert}
        setIsOpen={setIsOpenAlert}
        message={`You successfully copied ${textToCopy}`}
      />
    </>
  );
};

export default ClipboardButton;
