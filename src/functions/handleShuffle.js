import arrayShuffle from "array-shuffle";

const handleShuffle = ({
	isShuffle,
	currentId,
	setSongData,
	setSongList,
	songList,
}) => {
	// if isShuffle is true, shuffle the currentList, and find currentId in the new list and  set it as the new songData
	if (isShuffle) {
		const { currentList } = songList;
		const { playlist, upNext } = currentList;
		const newCurrentList = {
			upNext,
			playlist: arrayShuffle(playlist),
			referenceIndex: playlist.findIndex(song => song.id === currentId),
		};
		const newCurrentIndex = newCurrentList.playlist.findIndex(
			song => song.id === currentId
		);
		setSongList({ ...songList, currentList: newCurrentList });

		if (currentId === upNext[0]?.id) {
			setSongData(upNext[0]);
		} else {
			setSongData(newCurrentList.playlist[newCurrentIndex]);
		}
	} else {
		const { currentList, originalList } = songList;
		const { upNext } = currentList;
		const newCurrentList = songList.originalList;
		// find referenceIndex in the new list and set it as the new songData
		const newCurrentIndex = newCurrentList.findIndex(
			song => song.id === currentId
		);
		if (currentId === upNext[0]?.id) {
			setSongList({
				...songList,
				currentList: {
					...currentList,
					playlist: originalList,
					referenceIndex: newCurrentIndex,
				},
			});
		} else {
			setSongList({
				...songList,
				currentList: {
					...currentList,
					playlist: originalList,
					referenceIndex: newCurrentIndex,
				},
			});
		}
	}
};

export default handleShuffle;
