import { useState, useEffect } from 'react';

import Player from './Player';
import TokenContext from '../contexts/TokenContext';
import { default as refreshTokenFunction } from '../functions/refreshToken';
import SongContext from '../contexts/SongContext';
import useFetch from '../hooks/useFetch';

const PlayerLayout = ({ children }) => {
	const [songData, setSongData] = useState({});

	const [tokenData, setTokenData] = useState({
		accessToken: '',
		refreshToken: '',
		expiredDate: null,
	});
	const { accessToken } = tokenData;

	useEffect(() => {
		refreshTokenFunction(setTokenData);
	}, []);

	return (
		<SongContext.Provider value={{ songData, setSongData }}>
			<TokenContext.Provider value={{ tokenData, setTokenData }}>
				{children}
				{accessToken && <Player />}
			</TokenContext.Provider>
		</SongContext.Provider>
	);
};

export default PlayerLayout;
