import { useContext } from "react";
import SongContext from "../contexts/SongContext";
import SongListContext from "../contexts/SongListContext";
import ControlsContext from "../contexts/ControlsContext";

const useControls = () => {
	const { songData, setSongData } = useContext(SongContext);
	const { songList, setSongList } = useContext(SongListContext);
	const { controls, setControls } = useContext(ControlsContext);

	const nextSong = setOpen => {
		const { currentList, originalList } = songList;
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
			const currentIndex = originalList.findIndex(
				song => song.id === songData.id
			);
			const currentPlaylistIndex = playlist.findIndex(
				song => song.id === songData.id
			);

			const nextIndex =
				currentIndex === referenceIndex ? currentIndex + 1 : referenceIndex + 1;

			const playlistNextIndex =
				currentPlaylistIndex === referenceIndex
					? currentPlaylistIndex + 1
					: referenceIndex + 1;

			const nextSongIndex = controls.isShuffle
				? playlist.findIndex(
						song => song?.id === playlist[playlistNextIndex]?.id
				  )
				: playlist.findIndex(
						song => song?.id === originalList[nextIndex]?.id
				  ) || 0;

			if (nextIndex > playlist.length - 1 || playlist.length <= 1) {
				if (controls.isRepeat && playlist.length > 0) {
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
					setSongList({
						...songList,
						currentList: {
							playlist: [],
							upNext,
							referenceIndex: 0,
						},
					});
					setOpen(false);
				}
			} else {
				setSongData(playlist[nextSongIndex]);
				setSongList({
					...songList,
					currentList: {
						playlist,
						upNext,
						referenceIndex: nextIndex,
					},
				});
			}
		}
	};

	const previousSong = () => {
		const { currentList } = songList;
		const { playlist, referenceIndex } = currentList;
		const currentIndex = playlist.findIndex(song => song.id === songData.id);
		const previousIndex = currentIndex - 1;
		const previousSong =
			playlist[currentIndex].id === playlist[referenceIndex].id
				? playlist[previousIndex < 0 ? playlist.length - 1 : previousIndex]
				: playlist[referenceIndex];

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
