import useControls from "../../hooks/useControls";
import useSongList from "../../hooks/useSongList";
import { IoPlay, IoShuffle } from "react-icons/io5";
import { useContext } from "react";
import SongContext from "../../contexts/SongContext";

const PlayButtons = ({ trackList }) => {
	const { toggleShuffle } = useControls();
	const updateSongList = useSongList();
	const { setSongData } = useContext(SongContext);

	return (
		<section className="mt-6 flex gap-2">
			<button
				className="w-full h-12 gradient rounded-full font-bold text-white flex justify-center items-center gap-2"
				onClick={() => {
					updateSongList(trackList, { shuffle: false });
					setSongData(trackList[0]);
					toggleShuffle("off");
				}}
			>
				<IoPlay />
				Play
			</button>
			<button
				className="w-full h-12 border-2 border-primary box-border rounded-full font-bold text-primary dark:text-primary flex justify-center items-center gap-2"
				onClick={() => {
					updateSongList(trackList, { shuffle: true });
					setSongData(trackList[0]);
					toggleShuffle("on");
				}}
			>
				<IoShuffle size={20} />
				Shuffle
			</button>
		</section>
	);
};

export default PlayButtons;
