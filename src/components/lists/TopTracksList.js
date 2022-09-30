import useFetch from "../../hooks/useFetch";
import Loader from "../subcomponents/Loader";
import SongListItem from "../subcomponents/SongListItem";

const TopTracksList = ({ id }) => {
  const { data, loading } = useFetch(
    `https://api.spotify.com/v1/artists/${id}/top-tracks?market=from_token`
  );
  return (
    <>
      <h2 className="heading self-start mt-6 mb-4">Top Tracks</h2>
      {!loading ? (
        <ul className="flex flex-col gap-4 w-full">
          {data?.tracks?.map((track, index) => (
            <SongListItem index={index + 1} key={index} track={track} />
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default TopTracksList;
