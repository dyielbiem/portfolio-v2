import { PiPath } from "react-icons/pi";

import JourneyItem from "@components/JourneyItem";

import useAnimateToShow from "@hooks/useAnimateToShow";

const journeyItems = [
  {
    startDate: 2024,
    endDate: 2026,
    role: "Software Developer",
    site: "Ethos Bytes Pty Ltd",
    desc: [
      "Collaborated with an Agile team to plan, design, and build web and mobile applications.",
      "Deployed and maintained production mobile applications across iOS and Android platforms.",
    ],
  },
  {
    startDate: 2022,
    endDate: 2022,
    role: "Web Design and Development Intern",
    site: "My Own Eva, LLC",
    desc: [
      "Prototyped and designed responsive web pages using Figma.",
      "Developed and customized company websites utilizing WordPress and CSS.",
    ],
  },
  {
    startDate: 2019,
    endDate: 2023,
    role: "Bachelor of Science in Computer Science",
    site: "Polytechnic University of the Philippines - Manila",
    desc: [
      "Cum Laude",
      "University Scholar (1st and 2nd Semester AY 2019 - 2023)",
      "Dr. Pio Valenzuela Scholar",
    ],
  },
];

const Journey = () => {
  const animateRef = useAnimateToShow();

  return (
    <section>
      <div ref={animateRef} className="flex flex-col">
        <div className="flex items-center mb-6 pl-1 gap-4">
          <PiPath className="text-2xl text-(--accent-color)" />
          <h2 className="text-3xl font-bold">
            <span>Journey</span>
          </h2>
        </div>
        <p className="text-(--opaque-text-color)">
          My journey as a developer continues to evolve, and keeps giving me
          valuable experiences and opportunities to grow. I strive to deliver
          quality solutions while continuously refining my skills and keeping up
          with rapidly evolving technology.
        </p>
      </div>

      <div className="flex flex-col mt-6 gap-4">
        {journeyItems.map((journeyItem, idx) => (
          <JourneyItem key={idx} journeyItem={journeyItem} />
        ))}
      </div>
    </section>
  );
};

export default Journey;
