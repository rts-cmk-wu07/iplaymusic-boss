import useFetch from "../../hooks/useFetch";
import SongListItem from "../subcomponents/SongListItem";

const TopTracksList = ({ id }) => {
  const { data, loading } = useFetch(
    `https://api.spotify.com/v1/artists/${id}/top-tracks?market=from_token`
  );
  return (
    <>
      <h2 className="heading self-start mt-6">Top Tracks</h2>
      {!loading ? (
        <ul className="flex flex-col gap-4 w-full">
          {data?.tracks?.map((track, index) => (
            <SongListItem index={index + 1} key={index} track={track} />
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default TopTracksList;
