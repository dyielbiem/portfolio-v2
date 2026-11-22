import { useState } from "react";
import { clsx, cn } from "cn";

import useAnimateToShow from "@/hooks/useAnimateToShow";

import { IoExtensionPuzzleOutline, IoLogoJavascript } from "react-icons/io5";
import { BsGit } from "react-icons/bs";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import {
  FaNodeJs,
  FaPython,
  FaGithub,
  FaFigma,
  FaGitlab,
  FaAws,
} from "react-icons/fa";
import { BiLogoVuejs, BiLogoReact, BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import {
  SiTypescript,
  SiSass,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiDjango,
  SiJira,
  SiServerless,
  SiExpo,
  SiDocker,
} from "react-icons/si";

const skillsItem = [
  // Frontend
  {
    name: "html",
    icon: IoLogoHtml5,
    type: "frontend",
  },
  {
    name: "css",
    icon: IoLogoCss3,
    type: "frontend",
  },
  {
    name: "javascript",
    icon: IoLogoJavascript,
    type: "frontend",
  },
  {
    name: "typescript",
    icon: SiTypescript,
    type: "frontend",
  },
  {
    name: "react",
    icon: BiLogoReact,
    type: "frontend",
  },
  {
    name: "react native",
    icon: BiLogoReact,
    type: "frontend",
  },
  {
    name: "expo",
    icon: SiExpo,
    type: "frontend",
  },
  {
    name: "vue",
    icon: BiLogoVuejs,
    type: "frontend",
  },
  {
    name: "next",
    icon: SiNextdotjs,
    type: "frontend",
  },
  {
    name: "tailwind",
    icon: SiTailwindcss,
    type: "frontend",
  },
  {
    name: "sass",
    icon: SiSass,
    type: "frontend",
  },

  // Backend
  {
    name: "python",
    icon: FaPython,
    type: "backend",
  },
  {
    name: "django",
    icon: SiDjango,
    type: "backend",
  },
  {
    name: "node",
    icon: FaNodeJs,
    type: "backend",
  },
  {
    name: "express",
    icon: SiExpress,
    type: "backend",
  },
  {
    name: "postgres",
    icon: BiLogoPostgresql,
    type: "backend",
  },
  {
    name: "mysql",
    icon: GrMysql,
    type: "backend",
  },
  {
    name: "mongo",
    icon: SiMongodb,
    type: "backend",
  },
  {
    name: "serverless",
    icon: SiServerless,
    type: "backend",
  },

  // Tools & DevOps
  {
    name: "aws",
    icon: FaAws,
    type: "tools",
  },
  {
    name: "docker",
    icon: SiDocker,
    type: "tools",
  },
  {
    name: "jira",
    icon: SiJira,
    type: "tools",
  },
  {
    name: "figma",
    icon: FaFigma,
    type: "tools",
  },
  {
    name: "git",
    icon: BsGit,
    type: "tools",
  },
  {
    name: "github",
    icon: FaGithub,
    type: "tools",
  },
  {
    name: "gitlab",
    icon: FaGitlab,
    type: "tools",
  },
];

const categories = [
  {
    name: "All",
    count: skillsItem.length,
  },
  {
    name: "Frontend",
    count: skillsItem.filter(({ type }) => type === "frontend").length,
  },
  {
    name: "Backend",
    count: skillsItem.filter(({ type }) => type === "backend").length,
  },
  {
    name: "Tools",
    count: skillsItem.filter(({ type }) => type === "tools").length,
  },
];

const Categories = ({ selectedCategory, onCategoryClick }) => {
  return (
    <div
      className={cn(
        "flex flex-row flex-wrap mb-4 gap-1 sm:gap-0",
        "sm:flex-col sm:w-36 sm:max-w-36 sm:shrink-0",
      )}
    >
      {categories.map((item) => {
        const { name, count } = item;

        return (
          <button
            key={name}
            className={cn(
              "flex py-2 cursor-pointer gap-2 sm:gap-4 items-center",
              "duration-500 transition-all group min-w-32",
              "sm:pl-5 justify-center sm:justify-start",
              "border-b-3 sm:border-l-3 sm:border-b-0 ",
              "hover:border-b-(--text-color) sm:hover:border-l-(--text-color)",
              selectedCategory === name
                ? "border-b-(--accent-color)! sm:border-l-(--accent-color)!"
                : "border-b-(--opaque-text-color) sm:border-l-(--opaque-text-color)",
            )}
            onClick={() => onCategoryClick(name)}
          >
            <span
              className={cn(
                "group-hover:text-(--text-color) duration-500 transition-all",
                selectedCategory === name
                  ? "text-(--accent-color)!"
                  : "text-(--opaque-text-color)",
              )}
            >
              {name}
            </span>{" "}
            <span
              className={cn(
                "scale-80 duration-500 transition-all",
                selectedCategory === name
                  ? "text-(--text-color)"
                  : "text-(--opaque-text-color)",
              )}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

const Technologies = ({ selectedCategory, hoveredSkill, onSkillHovered }) => {
  return (
    <div
      className={cn(
        "border w-full border-(--border-color) rounded-md",
        "bg-(--card-color) place-items-center px-4 pt-6 pb-3",
      )}
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(40px,1fr))] w-full gap-8">
        {skillsItem.map((item) => {
          const { icon: Icon, name, type } = item;

          return (
            <Icon
              key={name}
              className={cn(
                "text-4xl shrink-0 transition-all duration-500",
                selectedCategory.toLowerCase() === type ||
                  selectedCategory === "All"
                  ? "text-(--text-color) cursor-pointer hover:scale-115 hover:text-(--accent-color)"
                  : "text-(--opaque-text-color) opacity-20 scale-75 pointer-events-none",
              )}
              onMouseEnter={() =>
                onSkillHovered({
                  name,
                  type,
                })
              }
              onMouseLeave={() => onSkillHovered(null)}
            />
          );
        })}
      </div>
      <p className="uppercase h-6 mt-8 text-xs text-(--opaque-text-color) text-center">
        <span
          className={clsx(
            hoveredSkill
              ? "text-(--accent-color) font-bold"
              : "hidden sm:inline",
          )}
        >
          {hoveredSkill ? hoveredSkill.name : "HOVER"}
        </span>
        <span className={cn("px-2", !hoveredSkill && "hidden sm:inline")}>
          •
        </span>
        <span className={clsx(hoveredSkill && "text-(--text-color)")}>
          {hoveredSkill ? hoveredSkill.type : "TECHNOLOGIES"}
        </span>
      </p>
    </div>
  );
};

const Skills = () => {
  const animateRef = useAnimateToShow();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section>
      <div ref={animateRef} className="flex flex-col">
        <div className="flex items-center mb-6 pl-1 gap-4">
          <IoExtensionPuzzleOutline className="text-2xl text-(--accent-color)" />
          <h2 className="text-3xl font-bold">
            <span>Skills</span>
          </h2>
        </div>
        <p className="text-(--opaque-text-color)">
          Over the years, I have developed my skills in software development,
          particularly web and mobile development, using the technologies below
          in both professional work and personal projects.
        </p>
      </div>

      <div ref={animateRef} className="flex flex-col sm:flex-row mt-6 gap-4">
        <Categories
          selectedCategory={selectedCategory}
          onCategoryClick={setSelectedCategory}
        />

        <Technologies
          selectedCategory={selectedCategory}
          hoveredSkill={hoveredSkill}
          onSkillHovered={setHoveredSkill}
        />
      </div>
    </section>
  );
};

export default Skills;
