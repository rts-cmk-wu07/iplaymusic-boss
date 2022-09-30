import { useContext } from "react";
import SongContext from "../contexts/SongContext";
import SongListContext from "../contexts/SongListContext";
import ControlsContext from "../contexts/ControlsContext";

const useControls = () => {
	const { songData, setSongData } = useContext(SongContext);
	const { songList } = useContext(SongListContext);
	const { controls, setControls } = useContext(ControlsContext);

	const nextSong = setOpen => {
		const { currentList } = songList;
		const currentIndex = currentList.findIndex(song => song.id === songData.id);
		const nextIndex = currentIndex + 1;

		if (nextIndex < currentList.length) {
			setSongData(currentList[nextIndex]);
		} else {
			if (controls.isRepeat) {
				setSongData(currentList[0]);
			} else {
				setSongData({});
				setOpen(false);
			}
		}
	};

	const previousSong = () => {
		const { currentList } = songList;
		const currentIndex = currentList.findIndex(song => song.id === songData.id);
		const previousIndex = currentIndex - 1;
		const previousSong =
			currentList[previousIndex < 0 ? currentList.length - 1 : previousIndex];

		setSongData(previousSong);
	};

	const toggleShuffle = toggle => {
		if (toggle === "on") {
			setControls({ ...controls, isShuffle: true });
		} else if (toggle === "off") {
			setControls({ ...controls, isShuffle: false });
		} else {
			const { isShuffle } = controls;
			setControls({ ...controls, isShuffle: !isShuffle });
		}
	};

	const toggleRepeat = toggle => {
		if (toggle) {
			setControls({ ...controls, isRepeat: toggle });
		} else {
			const { isRepeat } = controls;
			setControls({ ...controls, isRepeat: !isRepeat });
		}
	};

	return {
		nextSong,
		previousSong,
		toggleShuffle,
		toggleRepeat,
	};
};
export default useControls;
