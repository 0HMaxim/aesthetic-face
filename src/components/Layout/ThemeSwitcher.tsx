// src/components/ThemeSwitcher.tsx
import { useTheme } from '../../context/ThemeProvider.tsx';
import SolarSunBold from '~icons/solar/sun-bold';
import SolarMoonLinear from '~icons/solar/moon-linear';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
      <button
          onClick={handleThemeChange}
          className="h-full cursor-pointer transition-colors duration-200 min-w-[2rem] min-h-[2rem]"
      >
        {theme === 'light' && <SolarSunBold className="size-[2rem]" />}
        {theme === 'dark' && <SolarMoonLinear className="size-[2rem]" />}
      </button>
  );
}
