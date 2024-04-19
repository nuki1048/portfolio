import { useTheme } from '@/app/hooks/useTheme';
import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  const { isModeDark } = useTheme();
  return (
    <Oval
      visible={true}
      height="80"
      width="80"
      color={isModeDark ? '#f3f3f3' : '#0B1736'}
      secondaryColor={isModeDark ? '#ecebeb' : '#1c3166'}
      ariaLabel="oval-loading"
      wrapperStyle={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
      wrapperClass=""
    />
  );
};
