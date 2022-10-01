import { Spotify as lanyardSpotify } from "use-lanyard";

export const Spotify = ({
  spotify,
}: {
  spotify: lanyardSpotify | undefined | null;
}) => {
  return spotify ? (
    <div className="flex h-[6.25rem] max-w-[25rem] justify-center items-center rounded-lg bg-[#1F1F1F] p-5">
      <img
        src={spotify.album_art_url}
        alt="activity"
        className="mr-3 h-[4.37rem] w-[4.37rem] rounded-lg"
      />
      <div className="flex flex-col text-secondary truncate">
		<p className="font-bold text-[0.9rem] text-[#1ed760]">Listening to spotify...</p>
        <p className="font-bold text-[0.75rem]">{spotify.song}</p>
        <p className="text-[0.75rem]">by {spotify.artist}</p>
        <p className="text-[0.75rem]">on {spotify.album}</p>
      </div>
    </div>
  ) : (
    <div className="flex h-[6.25rem] w-[18.75rem] items-center rounded-lg bg-[#1F1F1F] p-2 text-center">
      <p className="text-secondary">
        I'm not listening to anything right now
      </p>
    </div>
  );
};
