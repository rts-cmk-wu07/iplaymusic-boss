import { useContext } from 'react';
import SongContext from '../contexts/SongContext';
import useFetch from './useFetch';

const useSong = songId => {
	const { songData, setSongData } = useContext(SongContext);
	const { data, loading, error } = useFetch(
		`https://api.spotify.com/v1/tracks/${songId}`
	);
	const updateSong = () => {
		console.log(data);
		setSongData(data);
	};

	return updateSong;
};

export default useSong;
