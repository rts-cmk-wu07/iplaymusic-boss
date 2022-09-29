import arrayShuffle from "array-shuffle";
import { useContext } from "react";
import ControlsContext from "../contexts/ControlsContext";
import SongListContext from "../contexts/SongListContext";

const useSongList = () => {
	const { isShuffle } = useContext(ControlsContext);
	const { setSongList } = useContext(SongListContext);

	const updateSongList = (newSongList, config) => {
		if (newSongList[0].track) {
			newSongList = newSongList.map(song => song.track);
		}

		const originalList = newSongList;
		let currentList = newSongList;
		if (isShuffle) {
			currentList = arrayShuffle(newSongList);
		}

		setSongList({
			originalList,
			currentList,
		});
	};

	return updateSongList;
};

export default useSongList;
