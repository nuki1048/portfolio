import { ThemeModes, useTheme } from '@/app/hooks/useTheme';
import DarkModeIcon from '../../../../public/assets/icons/dark-mode-icon.svg';
import LightModeIcon from '../../../../public/assets/icons/light-mode-icon.svg';

const iconClassName = 'stroke-gray-dark-600 mr-4';

const ThemeIcon: React.FC = () => {
  const { isModeDark, setMode } = useTheme();
  return (
    <>
      {isModeDark ? (
        <DarkModeIcon
          className={iconClassName}
          onClick={() => setMode(ThemeModes.LIGHT)}
        />
      ) : (
        <LightModeIcon
          className={iconClassName}
          onClick={() => setMode(ThemeModes.DARK)}
        />
      )}
    </>
  );
};

export default ThemeIcon;
