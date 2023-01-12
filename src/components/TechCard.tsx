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
        <div className="border-3 flex items-stretch overflow-hidden rounded-lg border border-secondary outline-none transition-all  hover:-translate-y-1 active:translate-y-1">
          <div
            className="flex items-center justify-center p-5"
			id={`id-${name}`} data-tooltip-content={name} data-tooltip-variant="dark"
			data-tooltip-float={true}
            style={{ backgroundColor: color }}
          >
            <div className="">{icon}</div>
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
