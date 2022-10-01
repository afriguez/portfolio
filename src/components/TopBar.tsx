import {
  DiscordIcon,
  GithubIcon,
  SteamIcon,
  TwitterIcon,
} from "./Icons";

export const TopBar = () => {
  return (
    <div className="flex flex-wrap items-center justify-center bg-primary py-5 px-10 shadow-md shadow-[#1F1F1F] sm:justify-between md:px-20">
      <div className="flex w-[12.5rem] justify-around">
        <a
          href="https://discord.com/users/361159575036231691"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiscordIcon />
        </a>
        <a
          href="https://github.com/afriguez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
        <a
          href="https://steamcommunity.com/id/afriguez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SteamIcon />
        </a>
        <a
          href="https://twitter.com/afriguez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
};
