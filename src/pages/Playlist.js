import { useParams } from "react-router-dom";
import List from "../templates/List";
import SongListHeader from "../components/SongListHeader";
import useFetch from "../hooks/useFetch";

const Playlist = () => {
	const { id } = useParams();

	const { data } = useFetch(`https://api.spotify.com/v1/playlists/${id}`);

	return (
		<div className="p-6">
			<SongListHeader playlist={data} />
			<List
				startUrl={`https://api.spotify.com/v1/playlists/${id}/tracks`}
				loadMoreOnIndex={16}
				trackLocation="track"
			/>
		</div>
	);
};

export default Playlist;
