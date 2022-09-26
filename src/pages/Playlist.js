import { useParams } from 'react-router-dom';
import List from '../templates/List';

const Playlist = () => {
	const { id } = useParams();

	return (
		<div className="p-6">
			<List
				startUrl={`https://api.spotify.com/v1/playlists/${id}/tracks`}
				loadMoreOnIndex={16}
				trackLocation="track"
			/>
		</div>
	);
};

export default Playlist;
