import { Data } from "use-lanyard";
import { Spotify } from "./Spotify";
import { YoutubeMusic } from "./YoutubeMusic";

export const Footer = ({
  lanyard,
}: {
  lanyard: Data | undefined
}) => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-wrap items-center justify-center py-3 px-10 lg:justify-between md:px-20">
      {lanyard?.spotify ? (
        <Spotify spotify={lanyard?.spotify} />
      ) :
        <YoutubeMusic lanyard={lanyard} />
      }
      <p className="mt-5 text-[0.9rem] text-secondary text-center sm:mt-0 px-4 md:p-0">
        Fer L. {year} • <Link url="https://afriguez.com" text="afriguez.com" />&nbsp;&gt;&nbsp;
        <Link url="https://github.com/afriguez/portfolio/blob/main/LICENSE.md" text="MIT License" />
      </p>
    </footer>
  );
};

const Link = ({ url, text }: { url: string, text: string }) => {
  return <a href={url} className="hover:underline hover:underline-offset-2">{text}</a>
}
