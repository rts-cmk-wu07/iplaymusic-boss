import useFetch from "../../hooks/useFetch";
import Loader from "../subcomponents/Loader";
import SongListItem from "./items/SongListItem";
import List from "./List";

const TopTracksList = ({ id }) => {
	const { data, loading } = useFetch(
		`https://api.spotify.com/v1/artists/${id}/top-tracks?market=from_token`
	);
	return (
		<>
			<h2 className="heading self-start mt-6 mb-4">Top Tracks</h2>
			{!loading ? (
				<List showAlbum>
					{data?.tracks?.map((track, index) => (
						<SongListItem index={index + 1} key={index} track={track} />
					))}
				</List>
			) : (
				<Loader />
			)}
		</>
	);
};

export default TopTracksList;
