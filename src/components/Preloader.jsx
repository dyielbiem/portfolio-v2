import { cn } from "cn";

import useThemeStore from "@store/useThemeStore";

import lightPreloaderLogo from "@assets/light-preloader.svg";
import darkPreloaderLogo from "@assets/dark-preloader.svg";

const Preloader = ({ onPreloadCompleted }) => {
  const { theme } = useThemeStore();

  return (
    <div className="h-svh w-svw flex justify-center items-center bg-(--bg-color)">
      <div
        className={cn(
          "max-w-[60%] relative",
          "after:content-[''] after:absolute after:top-0 after:left-0",
          "after:h-full after:w-full after:bg-(--bg-color)",
          "after:animate-preloader",
        )}
        onAnimationEnd={() =>
          setTimeout(() => {
            onPreloadCompleted();
          }, 250)
        }
      >
        <img
          src={theme === "light" ? lightPreloaderLogo : darkPreloaderLogo}
          alt="logo"
          className="w-56 select-none pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Preloader;
