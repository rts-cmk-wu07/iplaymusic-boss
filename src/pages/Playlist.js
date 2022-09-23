import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Playlist = () => {
	const { id } = useParams();

	const { data } = useFetch(
		`https://api.spotify.com/v1/playlists/${id}/tracks`
	);
	console.log(data);

	return <div>Hej</div>;
};

export default Playlist;
