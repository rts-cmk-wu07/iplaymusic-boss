import arrayShuffle from "array-shuffle";
import { useContext } from "react";
import SongListContext from "../contexts/SongListContext";

const useSongList = () => {
	const { setSongList } = useContext(SongListContext);

	const updateSongList = (newSongList, config) => {
		if (newSongList[0].track) {
			newSongList = newSongList.map(song => song.track);
		}

		const originalList = newSongList;
		let currentList = newSongList;
		if (config && config.shuffle) {
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
