import { cn } from "cn";

import useAnimateToShow from "@hooks/useAnimateToShow";

const JourneyItem = ({ journeyItem }) => {
  const animateRef = useAnimateToShow();
  const { startDate, endDate, role, site, desc } = journeyItem;

  return (
    <div ref={animateRef} className="flex flex-col sm:flex-row">
      <div
        className={cn(
          "w-36 shrink-0 border border-transparent",
          "px-2 pt-4 pb-1 sm:pb-4",
        )}
      >
        <p
          className={cn(
            "text-(--opaque-text-color)",
            "text-lg font-bold sm:text-sm sm:font-normal",
          )}
        >
          {startDate === endDate ? startDate : `${startDate} – ${endDate}`}
        </p>
      </div>
      <div
        className={cn(
          "px-4 py-4 flex flex-col border border-(--border-color)",
          "rounded-md bg-(--card-color) w-full",
        )}
      >
        <p className="font-bold">{role}</p>
        <p className="text-(--opaque-text-color)">{site}</p>
        <div className="mt-2">
          {desc.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 text-(--opaque-text-color) text-sm"
            >
              <span>‣</span> <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyItem;
