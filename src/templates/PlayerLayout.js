import { useState, useEffect } from "react";

import Player from "./Player";
import TokenContext from "../contexts/TokenContext";
import { default as refreshTokenFunction } from "../functions/refreshToken";
import SongContext from "../contexts/SongContext";
import SongListContext from "../contexts/SongListContext";
import ControlsContext from "../contexts/ControlsContext";

const PlayerLayout = ({ children }) => {
	const [songData, setSongData] = useState({});

	const [songList, setSongList] = useState({
		originalList: [],
		currentList: [],
	});

	useEffect(() => {
		if (songList.currentList[0]) {
			setSongData(songList.currentList[0]);
		}
	}, [songList]);

	const [controls, setControls] = useState({
		isPlaying: false,
		isShuffle: false,
		isRepeat: false,
	});

	const [tokenData, setTokenData] = useState({
		accessToken: "",
		refreshToken: "",
		expiredDate: null,
	});
	const { accessToken } = tokenData;

	useEffect(() => {
		refreshTokenFunction(setTokenData);
	}, []);

	return (
		<ControlsContext.Provider value={{ controls, setControls }}>
			<SongListContext.Provider value={{ songList, setSongList }}>
				<SongContext.Provider value={{ songData, setSongData }}>
					<TokenContext.Provider value={{ tokenData, setTokenData }}>
						{children}
						{accessToken && <Player />}
					</TokenContext.Provider>
				</SongContext.Provider>
			</SongListContext.Provider>
		</ControlsContext.Provider>
	);
};

export default PlayerLayout;
