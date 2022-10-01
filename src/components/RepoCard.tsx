export const RepoCard = ({
  title,
  desc,
  color,
  lang,
  url,
}: {
  title: string;
  desc: string;
  color: string;
  lang: string;
  url: string;
}) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-wrap items-center overflow-hidden rounded-lg border-2 border border-secondary bg-primary text-secondary shadow-[0_0.2rem_00#FBFFFE] outline-none transition-all  hover:-translate-y-1 hover:shadow-[0_0.4rem_00#FBFFFE] active:translate-y-1 active:shadow-[0_0rem_00#FBFFFE]">
        <div className="mx-[1rem] mt-[0.5rem]">
          <p className="text-[1rem] font-bold">{title}</p>
          <p className="text-[0.95rem]">{desc}</p>
        </div>
        <div className="mx-[1rem] my-[0.5rem] flex w-full flex-row items-center">
          <div
            className="mr-[0.5rem] h-[0.7rem] w-[0.7rem] rounded-full"
            style={{ backgroundColor: color }}
          ></div>
          <p className="text-[0.8rem]">{lang}</p>
        </div>
      </div>
    </a>
  );
};
