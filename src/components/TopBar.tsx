import { useState } from "react";
import { DiscordUser } from "use-lanyard"
import {
  DiscordIcon,
  GithubIcon,
  SteamIcon,
  TwitterIcon,
} from "./Icons";

const colors = [
  ["#F04747", "#A32323", "Man"],
  ["#FAA61A", "#B57B1B", "I"],
  ["#43B581", "#2E8D62", "Love"],
  ["#565656", "#3F3F3F", "Furina <3"]
]

export const TopBar = ({ discordUser }: { discordUser: DiscordUser | undefined }) => {
  const [show, setShow] = useState(false);
  const [style, setStyle] = useState({});

  const [colorIdx, setColorIdx] = useState(0);

  return (
    <div className="flex flex-wrap items-center justify-center py-5 px-10 flex-col sm:flex-row sm:justify-between md:px-20 select-none">
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
        <p
          className="text-[2rem] font-bold text-secondary cursor-pointer"
          onClick={() => setShow((show) => !show)}
        >
          Huh
        </p>
        {show &&
          <div
            className="max-w-max text-center min-w-[8.75rem] rounded-lg p-2 px-5 font-bold text-secondary transition-all hover:-translate-y-1 active:translate-y-1"
            style={style}
            onMouseEnter={() =>
              setStyle({
                backgroundColor: colors[colorIdx][0],
                boxShadow: `0rem 0.5rem ${colors[colorIdx][1]}`,
                transform: 'translateY(-5px)',
              })
            }
            onMouseLeave={() =>
              setStyle({
                backgroundColor: colors[colorIdx][0],
                boxShadow: `0rem 0.3rem ${colors[colorIdx][1]}`,
                transform: 'translateY(0px)',
              })
            }
            onPointerDown={() =>
              setStyle({
                backgroundColor: colors[colorIdx][0],
                boxShadow: `0rem 0rem ${colors[colorIdx][1]}`,
                transform: 'translateY(5px)',
              })
            }
            onPointerUp={() =>
              setStyle({
                backgroundColor: colors[colorIdx][0],
                boxShadow: `0rem 0.5rem ${colors[colorIdx][1]}`,
                transform: 'translateY(-5px)',
              })
            }
            onClick={() => {
              setColorIdx((current) => {
                return current == colors.length - 1 ? 0 : current + 1;
              });
            }}
          >
            {colors[colorIdx][2]}
          </div>
        }
        <img
          src={discordUser ? `https://cdn.discordapp.com/avatars/${discordUser!.id}/${discordUser!.avatar}` : "https://github.com/afriguez.png"}
          alt="avatar"
          className="h-[3.5rem] w-[3.5rem] rounded-lg"
        />
      </div>
    </div >
  );
};
