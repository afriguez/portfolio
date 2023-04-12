import { DiscordUser } from "use-lanyard"
import {
  DiscordIcon,
  GithubIcon,
  SteamIcon,
  TwitterIcon,
} from "./Icons";

export const TopBar = ({discordUser}: {discordUser: DiscordUser | undefined}) => {
  return (
    <div className="flex flex-wrap items-center justify-center bg-primary py-5 px-10 shadow-md shadow-[#000000] flex-col sm:flex-row sm:justify-between md:px-20">
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
      <div className="flex justify-center items-center sm:mt-0 mt-7 gap-5">
        <a href="https://blog.afriguez.com" className="text-secondary hover:text-gray">
          <p className="text-[2rem] font-bold">Blog</p>
        </a>
        <img
          src={discordUser ? `https://cdn.discordapp.com/avatars/${discordUser!.id}/${discordUser!.avatar}` : "https://github.com/afriguez.png"}
          alt="avatar"
          className="h-[3.5rem] w-[3.5rem] rounded-lg"
        />
      </div>
    </div>
  );
};
