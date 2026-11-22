import ProjectItem from "@components/ProjectItem";

import useAnimateToShow from "@hooks/useAnimateToShow";

import { LuFolderCode } from "react-icons/lu";

const projects = [
  {
    name: "Driving School Admin",
    desc: "A web-based system that enables driving school admins to manage student records and provides API integration to an external Student Portal for seamless data exchange.",
    tech: ["Next", "Tailwind", "Express", "DynamoDB", "Serverless", "AWS"],
    github: "https://github.com/dyielbiem/drivingschool-be/",
  },
  {
    name: "ISKOduler",
    desc: "A web application for students, particularly scholars, that helps them in managing their school schedules.",
    tech: ["Next", "TypeScript", "Express", "MongoDB", "Tailwind"],
    github: "https://github.com/dyielbiem/iskoduler/",
    live: "https://iskoduler.vercel.app/",
  },
  {
    name: "Modern Misery",
    desc: "An inclusive digital platform where anyone can express their thoughts, emotions, and viewpoints on our modern world.",
    tech: ["Next", "TypeScript", "Express", "MongoDB", "Tailwind"],
    github: "https://github.com/dyielbiem/modern-misery/",
    live: "https://modernmisery.netlify.app/",
  },
  {
    name: "Portfolio V1",
    desc: "An old porfolio site that provides a glimpse of my background and demonstrates my qualifications, skills, and a collection of my projects.",
    tech: ["Next", "TypeScript", "SASS"],
    github: "https://github.com/dyielbiem/portfolio/",
  },
  {
    name: "PUP Hate Tweet Detection System",
    desc: "A dedicated system for PUP that utilizes machine learning techniques to monitor hate tweets targeting official PUP Twitter pages.",
    tech: ["Python", "Scikit-learn", "Gensim"],
  },
];

const Projects = () => {
  const animateRef = useAnimateToShow();

  return (
    <section>
      <div ref={animateRef} className="flex flex-col">
        <div className="flex items-center mb-6 pl-1 gap-4">
          <LuFolderCode className="text-2xl text-(--accent-color)" />
          <h2 className="text-3xl font-bold">
            <span>Projects</span>
          </h2>
        </div>
        <p className="text-(--opaque-text-color)">
          Here are some of the projects I have worked on, both professionally
          and personally. Each project represents my experience, skills, and
          growth as a developer.
        </p>
      </div>

      <div className="flex flex-col mt-6 gap-4">
        {projects.map((projectItem, idx) => (
          <ProjectItem key={idx} projectItem={projectItem} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
