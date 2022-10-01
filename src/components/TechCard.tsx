import { ReactElement } from "react";

export const TechCard = ({
  name,
  desc,
  color,
  icon,
  url,
}: {
  name: string;
  desc: string;
  color: string;
  icon: ReactElement;
  url: string;
}) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="border-3 flex items-stretch overflow-hidden rounded-lg border border-secondary outline-none transition-all  hover:-translate-y-1 active:translate-y-1">
        <div
          className="flex items-center justify-center p-5"
          style={{ backgroundColor: color }}
        >
          <div className="">{icon}</div>
        </div>
        <p className="mx-[10px] self-center p-2 text-secondary">
          {desc}
        </p>
      </div>
    </a>
  );
};
