'use client';
import InfoIcon from '../../../../public/assets/icons/alert-info-icon.svg';
import SuccessIcon from '../../../../public/assets/icons/alert-success-icon.svg';
import WarningIcon from '../../../../public/assets/icons/alert-warning-icon.svg';
import ErrorIcon from '../../../../public/assets/icons/alert-error-icon.svg';
import CloseIcon from '../../../../public/assets/icons/alert-close-icon.svg';
import { SetStateAction, Dispatch, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export enum AlertStatus {
  Success,
  Warning,
  Error,
  Info,
}

interface Props {
  title?: string;
  message?: string;
  status: AlertStatus;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const alertStyles = {
  [AlertStatus.Success]: {
    bg: 'bg-[#84D65A]',
    color: 'text-[#2B641E]',
    icon: 'fill-[#2B641E]',
  },
  [AlertStatus.Warning]: {
    bg: 'bg-[#FEF7D1]',
    color: 'text-[#755118]',
    icon: 'fill-[#755118]',
  },
  [AlertStatus.Error]: {
    bg: 'bg-[#FCE8DB]',
    color: 'text-[#71192F]',
    icon: 'fill-[#71192F]',
  },
  [AlertStatus.Info]: {
    bg: 'bg-[#D7F1FD]',
    color: 'text-[#0C2A75]',
    icon: 'fill-[#0C2A75]',
  },
};

const Alert: React.FC<Props> = ({
  status,
  message,
  title,
  isOpen,
  setIsOpen,
}) => {
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 10000);
    }
  }, [isOpen]);

  const renderIcon = () => {
    switch (status) {
      case AlertStatus.Error:
        return <ErrorIcon />;
      case AlertStatus.Success:
        return <SuccessIcon />;
      case AlertStatus.Info:
        return <InfoIcon />;
      case AlertStatus.Warning:
        return <WarningIcon />;
    }
  };

  const [domReady, setDomReady] = useState<boolean>(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  return (
    <>
      {domReady
        ? createPortal(
            <>
              {isOpen && (
                <div
                  className={`w-fit h-fit p-4 flex gap-3 justify-center items-center ${alertStyles[status].bg} ${alertStyles[status].color} rounded-xl transition-all`}
                >
                  {renderIcon()}
                  <div className="flex-1">
                    <h3 className="text-xl font-medium">{title}</h3>
                    <span className="text-lg font-normal">{message}</span>
                  </div>
                  <button onClick={() => setIsOpen(false)}>
                    <CloseIcon className={`${alertStyles[status].icon}`} />
                  </button>
                </div>
              )}
            </>,
            document.getElementById('alert-portal') as Element
          )
        : null}
    </>
  );
};
export default Alert;
