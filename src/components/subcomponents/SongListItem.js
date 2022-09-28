import { useNavigate } from 'react-router-dom';
import millisToTime from '../../functions/millisToTime';
import useSong from '../../hooks/useSong';

const SongListItem = ({ track, index, noImage }) => {
	// State for the play/pause button
	const navigate = useNavigate();
	const updateSong = useSong(track.id);

	return (
		<li
			key={index || track.id}
			onClick={updateSong}
			className={`flex items-center gap-4 justify-between w-full py-2 text-additional
      dark:text-white`}
		>
			<div className="flex justify-between items-center">
				{index && (
					<p className="text-xl text-left w-8 font-light tracking-widest">
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
			<div className="flex flex-col w-full whitespace-nowrap max-w-[60%]">
				<p
					className="dark:text-white font-bold text-ellipsis overflow-hidden"
					onClick={updateSong}
				>
					{track.name}
				</p>
				<div className="flex min-w-0 text-ellipsis overflow-hidden whitespace-nowrap ">
					{track.artists.map((artist, index) => {
						return (
							<p
								key={index}
								className="text-sm "
								onClick={e => {
									e.stopPropagation();
									navigate(`/artist/${artist.id}`);
								}}
							>
								{(index ? ', ' : '') + artist.name}
							</p>
						);
					})}
				</div>
			</div>
			<p className="dark:text-white ml-auto">
				{millisToTime(track.duration_ms)}
			</p>
		</li>
	);
};

export default SongListItem;
