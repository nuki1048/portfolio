import { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AlertContainer: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <div
        id="alert-portal"
        className="fixed z-10 bottom-3 left-1/2 -translate-x-1/2  flex flex-col items-center gap-3"
      ></div>
    </>
  );
};
export default AlertContainer;
