import { cn } from "cn";

import useAnimateToShow from "@hooks/useAnimateToShow";

import { IoMdPaperPlane } from "react-icons/io";

const About = () => {
  const animateRef = useAnimateToShow();

  return (
    <section ref={animateRef}>
      <div
        className={cn(
          "bg-(--card-color) px-6 py-10 flex flex-col gap-6",
          "border border-(--border-color) rounded-md mb-20",
        )}
      >
        <h3 className="text-3xl font-bold">
          <span>Get In Touch</span>
        </h3>
        <p className="text-(--opaque-text-color)">
          My inbox is always open for you. Whether you would like to say hello,
          ask a question, or share something, just leave me a message. I am glad
          to do my utmost to provide you an immediate response!
        </p>
        <a
          className={cn(
            "bg-(--text-color) text-(--bg-color) font-bold px-6 py-2",
            "rounded-sm flex items-center gap-2 cursor-pointer hover:bg-(--accent-color)",
            "transition-all duration-300 grow-0 self-start mt-2",
          )}
          href="mailto:jlloydbmartinez@gmail.com"
          rel="noopener noreferrer"
        >
          <span>Send a message</span>
          <IoMdPaperPlane />
        </a>
      </div>
      <a
        href="https://github.com/dyielbiem/portfolio-v2"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-500 block hover:-translate-y-1"
      >
        Designed and Developed by{" "}
        <span className="text-(--accent-color)">John Lloyd Martinez</span> ©
        2026
      </a>
    </section>
  );
};

export default About;
