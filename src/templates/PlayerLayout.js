import { useState, useEffect } from "react";

import Player from "./Player";
import TokenContext from "../contexts/TokenContext";
import { default as refreshTokenFunction } from "../functions/refreshToken";
import SongContext from "../contexts/SongContext";
import SongListContext from "../contexts/SongListContext";
import ControlsContext from "../contexts/ControlsContext";
import handleShuffle from "../functions/handleShuffle";
import Notification from "../components/subcomponents/Notification";
import ActionMenu from "../components/ActionMenu";
import ActionContext from "../contexts/ActionContext";

const PlayerLayout = ({ children }) => {
	const [songData, setSongData] = useState({});

	const [songList, setSongList] = useState({
		originalList: [],
		currentList: { upNext: [], playlist: [], referenceIndex: 0 },
	});

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
				currentSong: songData,
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

	const [actionMenuItems, setActionMenuItems] = useState([]);
	const [actionMenuOpen, setActionMenuOpen] = useState(false);
	const [actionAlbum, setActionAlbum] = useState(null);

	return (
		<ControlsContext.Provider value={{ controls, setControls }}>
			<SongListContext.Provider value={{ songList, setSongList }}>
				<SongContext.Provider value={{ songData, setSongData }}>
					<TokenContext.Provider value={{ tokenData, setTokenData }}>
						<ActionContext.Provider
							value={{
								items: {
									actionMenuItems,
									setActionMenuItems,
								},
								open: {
									actionMenuOpen,
									setActionMenuOpen,
								},
								album: {
									actionAlbum,
									setActionAlbum,
								},
							}}
						>
							{children}
							{accessToken && <Player />}
							{/* if song is unavailable: */}
							{accessToken && (
								<>
									<Notification text="Song not available, enjoy Rick Roll instead :D" />
									<ActionMenu
										items={actionMenuItems}
										isOpen={actionMenuOpen}
										setIsOpen={setActionMenuOpen}
										album={actionAlbum}
									/>
								</>
							)}
						</ActionContext.Provider>
					</TokenContext.Provider>
				</SongContext.Provider>
			</SongListContext.Provider>
		</ControlsContext.Provider>
	);
};

export default PlayerLayout;
