import { useState, useEffect } from "react";

import Player from "./Player";
import TokenContext from "../contexts/TokenContext";
import { default as refreshTokenFunction } from "../functions/refreshToken";
import SongContext from "../contexts/SongContext";
import SongListContext from "../contexts/SongListContext";
import ControlsContext from "../contexts/ControlsContext";
import handleShuffle from "../functions/handleShuffle";

const PlayerLayout = ({ children }) => {
	const [songData, setSongData] = useState({});

	const [songList, setSongList] = useState({
		originalList: [],
		currentList: [],
	});

	console.log("songList", songList);

	const [controls, setControls] = useState({
		isPlaying: false,
		isShuffle: false,
		isRepeat: false,
	});

	/* eslint-disable */
	useEffect(() => {
		if (songList.originalList.length > 0) {
			handleShuffle({
				isShuffle: controls.isShuffle,
				currentId: songData.id,
				setSongData,
				setSongList,
				songList,
			});
		}
	}, [controls.isShuffle]);
	/* eslint-enable */

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
