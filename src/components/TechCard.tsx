import { ReactElement } from "react";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';

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
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="sm:border-3 flex flex-wrap sm:flex-nowrap items-stretch rounded-lg sm:border border-b-2 border-secondary outline-none transition-all  hover:-translate-y-1 active:translate-y-1">
          <div
            className="flex items-center justify-center flex-col w-full sm:w-auto"
            id={`id-${name}`} data-tooltip-content={name} data-tooltip-variant="dark"
            data-tooltip-float={true}
          >
            <div className="p-5 rounded-lg" style={{ backgroundColor: color }}>
              <div>{icon}</div>
            </div>
          </div>
          <p
            className="mx-[10px] self-center p-2 text-secondary"
            id={`id-${name}-out`}
            data-tooltip-content={name}
            data-tooltip-variant="dark"
            data-tooltip-place="top"
          >
            {desc}
          </p>
        </div>
      </a>
      <Tooltip anchorId={`id-${name}`} />
      <Tooltip anchorId={`id-${name}-out`} />
    </div>
  );
};
