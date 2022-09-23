// hook for fetching data from Spotify API with authorization

import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import TokenContext from '../contexts/TokenContext';
import { default as refreshTokenFunction } from '../functions/refreshToken';

export default function useFetch(url) {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Get token from context
	const { tokenData, setTokenData } = useContext(TokenContext);
	// Deconstructing to get both tokens individually
	const { accessToken, refreshToken } = tokenData;

	// fetch data from Spotify API
	useEffect(() => {
		// if there is no token, return
		if (!accessToken) return;

		refreshTokenFunction(setTokenData);

		// fetch data from Spotify API with axios
		axios
			.get(url, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			})
			.then(response => {
				// if successful, set data and loading to false
				if (response.status >= 200 && response.status < 300) {
					setData(response.data);
					setLoading(false);
				} else {
					// if unsuccessful, set error
					setError(response.status);
				}
			});
	}, [url]);

	return { data, loading, error };
}
