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
		const newCurrentList = arrayShuffle(songList.currentList);
		const currentIndex = newCurrentList.findIndex(
			song => song.id === currentId
		);
		setSongList({ ...songList, currentList: newCurrentList });
		setSongData(newCurrentList[currentIndex]);
	} else {
		// if isShuffle is false, set the currentList to the originalList and find currentId in the new list and  set it as the new songData
		const newCurrentList = songList.originalList;
		const currentIndex = newCurrentList.findIndex(
			song => song.id === currentId
		);
		setSongList({ ...songList, currentList: newCurrentList });
		setSongData(newCurrentList[currentIndex]);
	}
};

export default handleShuffle;
