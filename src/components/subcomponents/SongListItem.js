import { useState } from 'react';
import { IoPause, IoPlay } from 'react-icons/io5';
import millisToTime from '../../functions/millisToTime';
import useSong from '../../hooks/useSong';
import { useNavigate } from 'react-router-dom';

const SongListItem = ({ track, index }) => {
	const navigate = useNavigate();
	const { name, artists, duration_ms } = track;
	// State for the play/pause button
	const [isPlaying, setIsPlaying] = useState(false);

	const artistNames = artists.map(artist => artist.name).join(', ');

	const updateSong = useSong(track.id);

	return (
		<li key={index} className="flex items-center" onClick={updateSong}>
			{/* <button
				onClick={() => setIsPlaying(!isPlaying)}
				className="gradient p-2 rounded-full"
			>
				{isPlaying ? (
					<IoPause size="15" color="#fff" />
				) : (
					<IoPlay size="15" color="#fff" />
				)}
			</button> */}
			<div className="flex justify-between items-center">
				{index && (
					<p className="text-lg text-left w-8 font-light tracking-widest dark:text-white">
						{index}
					</p>
				)}
				<img
					src={track.album.images[0].url}
					alt="album cover"
					className="w-12 h-12 rounded-md"
				/>
			</div>
			<div className="flex flex-col ml-6 w-full whitespace-nowrap max-w-[65%]">
				<p className="dark:text-white font-bold text-ellipsis overflow-hidden ">
					{name}
				</p>
				<p className="dark:text-white text-xs text-ellipsis overflow-hidden ">
					{artistNames}
				</p>
			</div>
			<p className="dark:text-white ml-auto">{millisToTime(duration_ms)}</p>
		</li>
	);
};

export default SongListItem;
