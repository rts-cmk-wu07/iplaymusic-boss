import { useContext } from "react";
import SongContext from "../contexts/SongContext";
import SongListContext from "../contexts/SongListContext";
import ControlsContext from "../contexts/ControlsContext";

const useControls = () => {
	const { songData, setSongData } = useContext(SongContext);
	const { songList, setSongList } = useContext(SongListContext);
	const { controls, setControls } = useContext(ControlsContext);

	const nextSong = setOpen => {
		const { currentList } = songList;
		const { playlist, upNext, referenceIndex } = currentList;
		if (upNext.length > 0) {
			const nextSong = upNext[0];
			setSongData(nextSong);
			setSongList({
				...songList,
				currentList: {
					playlist,
					upNext: upNext.slice(1),
					referenceIndex,
				},
			});
		} else {
			const currentIndex = playlist.findIndex(song => song.id === songData.id);
			const nextIndex = currentIndex + 1;

			if (nextIndex < playlist.length) {
				setSongData(playlist[nextIndex]);
				setSongList({
					...songList,
					currentList: {
						playlist,
						upNext,
						referenceIndex: nextIndex,
					},
				});
			} else {
				if (controls.isRepeat) {
					setSongData(playlist[0]);
					setSongList({
						...songList,
						currentList: {
							playlist,
							upNext,
							referenceIndex: 0,
						},
					});
				} else {
					setSongData({});
					setOpen(false);
				}
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

	const addToQueue = song => {
		const { currentList, originalList } = songList;
		const { upNext, playlist, referenceIndex } = currentList;

		const newSongList = [...upNext, song];

		setSongList({
			originalList,
			currentList: {
				playlist,
				upNext: newSongList,
				referenceIndex,
			},
		});
	};

	return {
		nextSong,
		previousSong,
		toggleShuffle,
		toggleRepeat,
		addToQueue,
	};
};
export default useControls;
