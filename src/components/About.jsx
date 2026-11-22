import { cn } from "cn";

import useAnimateToShow from "@hooks/useAnimateToShow";

import { LuInfo } from "react-icons/lu";

const About = () => {
  const animateRef = useAnimateToShow();

  return (
    <section ref={animateRef}>
      <div className="flex items-center mb-6 pl-1 gap-4">
        <LuInfo className="text-2xl text-(--accent-color)" />
        <h2 className="text-3xl font-bold">
          <span>About</span>
        </h2>
      </div>
      <div
        className={cn(
          "bg-(--card-color) px-6 py-6 flex flex-col gap-6",
          "border border-(--border-color) rounded-md backdrop-blur-2xl",
        )}
      >
        <p>
          Hello, I’m John Lloyd Martinez, a software developer with almost three
          years of experience in web and mobile development. I enjoy building
          applications that are responsive, functional, and focused on
          delivering a good user experience.
        </p>
        <p>
          My journey in software development began when I pursued a Bachelor of
          Science in Computer Science at the Polytechnic University of the
          Philippines in 2019, where I developed a strong foundation in
          programming and software development.
        </p>
        <p>
          Through my professional experience in web and mobile development, I
          have worked with modern technologies to build applications that
          deliver solutions to modern problems. I continue to expand my skills
          by exploring new technologies, keeping up with modern development
          practices, and deepening my knowledge as a developer.
        </p>
      </div>
    </section>
  );
};

export default About;
