import { Link, useNavigate } from "react-router-dom";
import millisToTime from "../../functions/millisToTime";
import useSong from "../../hooks/useSong";

const SongListItem = ({ track, index, noImage, largePadding }) => {
	// State for the play/pause button
	const navigate = useNavigate();
	const updateSong = useSong(track.id);

	return (
		<li
			key={index || track.id}
			onClick={updateSong}
			className={`flex items-center gap-2 justify-between w-full ${
				largePadding ? "py-2" : "py-1"
			} text-additional
      dark:text-white`}
		>
			<div className="flex justify-between items-center flex-shrink-0">
				{index && (
					<p className="w-6 font-light tracking-widest text-sm text-left shrink-0">
						{index}
					</p>
				)}
				{!noImage && (
					<img
						src={track.album.images[0].url}
						alt="album cover"
						className="w-12 h-12 rounded-md"
					/>
				)}
			</div>
			<div className="flex flex-col min-w-0 whitespace-nowrap">
				<p
					className="dark:text-white font-bold text-ellipsis overflow-hidden"
					onClick={updateSong}
				>
					{track.name}
				</p>
				<div className="flex min-w-0 text-ellipsis overflow-hidden whitespace-nowrap ">
					{track.artists.map((artist, index) => {
						return (
							<Link
								to={`/artist/${artist.id}`}
								key={index}
								className="text-xs opacity-75"
							>
								{(index ? ", " : "") + artist.name}
							</Link>
						);
					})}
				</div>
			</div>
			<p className="text-black/75 dark:text-white/75 ml-auto text-sm flex-shrink-0">
				{millisToTime(track.duration_ms)}
			</p>
		</li>
	);
};

export default SongListItem;
