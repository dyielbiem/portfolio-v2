import { cn } from "cn";

import useAnimateToShow from "@hooks/useAnimateToShow";

import { IoArrowForward } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Hero = () => {
  const animateRef = useAnimateToShow();

  return (
    <section
      ref={animateRef}
      className={cn(
        "top-20 justify-start flex flex-col text-(--text-color) py-16 duration-500",
        "lg:max-h-[calc(100svh-5rem)] lg:h-svh",
        "px-8 sm:px-16 lg:fixed static w-full lg:w-1/2",
      )}
    >
      <h1 className="text-4xl sm:text-5xl font-bold">John Lloyd Martinez</h1>
      <strong className="text-lg text-(--accent-color) mt-2">
        Fullstack Software Developer
      </strong>{" "}
      <p className="text max-w-100 mt-4 text-(--opaque-text-color)">
        I craft every solution with passion and dedication, delivering
        high-quality work.
      </p>
      <div className="flex flex-wrap sm:items-center mt-20 gap-6">
        <a
          href={import.meta.env.VITE_RESUME_URL}
          rel="noopener noreferrer"
          target="_blank"
          className={cn(
            "bg-(--text-color) text-(--bg-color) font-bold px-6 py-2",
            "rounded-sm flex items-center gap-2 cursor-pointer self-start",
            "hover:bg-(--accent-color) transition-all duration-300",
          )}
        >
          <span>Resume</span>
          <IoArrowForward className="-rotate-45" />
        </a>
        <div className="flex items-center gap-6">
          <a
            href="mailto:jlloydbmartinez@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            className="cursor-pointer"
          >
            <SiGmail
              className={cn(
                "text-2xl text-(--opaque-text-color) hover:text-(--text-color)",
                "transition-all duration-300",
              )}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jlloydbmartinez/"
            rel="noopener noreferrer"
            target="_blank"
            className="cursor-pointer"
          >
            <FaLinkedin
              className={cn(
                "text-2xl text-(--opaque-text-color) hover:text-(--text-color)",
                "transition-all duration-300",
              )}
            />
          </a>
          <a
            href="https://github.com/dyielbiem/"
            rel="noopener noreferrer"
            target="_blank"
            className="cursor-pointer"
          >
            <FaGithub
              className={cn(
                "text-2xl text-(--opaque-text-color) hover:text-(--text-color)",
                "transition-all duration-300",
              )}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
