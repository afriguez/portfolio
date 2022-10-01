import { RepoCard } from "./RepoCard";

export const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-[2.5rem] text-[1.1rem] font-bold text-secondary">
        Some Open-Source Projects
      </p>
      <div className="grid max-w-[43.75rem] grid-cols-1 gap-5 md:grid-cols-2">
        <RepoCard
          title="Portfolio"
          desc="This website"
          color="#3178C6"
          lang="TypeScript"
          url="https://github.com/afriguez/portfolio"
        />
        <RepoCard
          title="ShuxBot"
          desc="ShuxTeam Discord Bot"
          color="#3178C6"
          lang="TypeScript"
          url="https://github.com/afriguez/shuxbot"
        />
        <RepoCard
          title="Distropia/Yae"
          desc="Realtime graphql & elixir backend"
          color="#462359"
          lang="Elixir"
          url="https://github.com/phelferick/yae"
        />
        <RepoCard
          title="Distropia/Ei"
          desc="Responsive & stateful frontend"
          color="#3178C6"
          lang="TypeScript"
          url="https://github.com/phelferick/ei"
        />
      </div>
    </div>
  );
};
