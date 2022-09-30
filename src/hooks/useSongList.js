import arrayShuffle from "array-shuffle";
import { useContext } from "react";
import ControlsContext from "../contexts/ControlsContext";
import SongListContext from "../contexts/SongListContext";

const useSongList = () => {
	const { isShuffle } = useContext(ControlsContext);
	const { setSongList } = useContext(SongListContext);

	const updateSongList = (newSongList, config) => {
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
