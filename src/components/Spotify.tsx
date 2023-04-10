import { Spotify as lanyardSpotify } from "use-lanyard";

export const Spotify = ({
	spotify,
}: {
	spotify: lanyardSpotify | undefined | null;
}) => {
	return spotify ? (
		<div
			className="flex h-[8rem] max-w-[25rem] items-center justify-center rounded-lg bg-[#1F1F1F] p-5">
			<a
				href={`https://open.spotify.com/track/${spotify.track_id}`}
				rel="noopener noreferrer"
				target="_blank">
				<img
					src={spotify.album_art_url ? spotify.album_art_url : ""}
					alt="activity"
					className="mr-3 h-[5.5rem] min-w-[5.5rem] rounded-lg transition duration-500 transform hover:-scale-x-100"
				/>
			</a>

			<div className="flex flex-col overflow-hidden text-secondary">
				<p className="text-[0.9rem] font-bold text-[#1ed760]">
					Listening to spotify...
				</p>
				<p className="text-[0.8rem] truncate font-bold">{spotify.song}</p>
				<p className="text-[0.8rem] truncate">by {spotify.artist}</p>
				<p className="text-[0.8rem] truncate">on {spotify.album}</p>
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
