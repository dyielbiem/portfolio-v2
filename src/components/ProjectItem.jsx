import { cn } from "cn";

import useAnimateToShow from "@/hooks/useAnimateToShow";

import { FaGithub } from "react-icons/fa";

const ProjectItem = ({ projectItem }) => {
  const animateRef = useAnimateToShow();
  const { name, desc, tech, github } = projectItem;

  return (
    <div
      ref={animateRef}
      className={cn(
        "px-4 py-4 flex flex-col border border-(--border-color)",
        "rounded-md bg-(--card-color) w-full",
      )}
    >
      <div className="flex flex-row justify-between">
        <p className="font-bold mb-2">{name}</p>
        {github && (
          <div className="flex flex-row gap-3">
            <a
              href={github}
              rel="noopener noreferrer"
              target="_blank"
              className="grow-0 block hover:text-(--accent-color) transition-all duration-300"
            >
              <FaGithub className="text-2xl" />
            </a>
          </div>
        )}
      </div>
      <p className="text-(--opaque-text-color)">{desc}</p>
      <div className="mt-4 text-(--accent-color) flex gap-3 flex-wrap">
        {tech.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "flex gap-4 text-sm border border-(--accent-color)",
              "rounded-md px-3 py-1",
            )}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
