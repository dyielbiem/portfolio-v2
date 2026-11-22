import clsx from "cn/lite";

import useThemeStore from "@store/useThemeStore";

import darkLogo from "@assets/dark-logo.svg";
import lightLogo from "@assets/light-logo.svg";
import { FiSun, FiMoon } from "react-icons/fi";

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header
      className={clsx(
        "flex items-center fixed! left-0 top-0 h-20 px-4 sm:px-8 py-5",
        "w-full bg-transparent sticky backdrop-blur-xs z-999 justify-between",
      )}
    >
      <button
        className="h-full cursor-pointer"
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        <img
          src={theme === "light" ? lightLogo : darkLogo}
          alt="logo"
          className="h-full"
        />
      </button>

      <button
        className={clsx(
          "rounded-full border-2 border-(--opaque-text-color)/10",
          "p-2 cursor-pointer hover:scale-105 transition-all duration-300",
        )}
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <FiMoon className="text-lg animate-rotate-in" />
        ) : (
          <FiSun className="text-lg animate-rotate-in" />
        )}
      </button>
    </header>
  );
};

export default Header;
