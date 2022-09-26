import useFetch from "../../hooks/useFetch";
import millisToTime from "../../functions/millisToTime";

const TopTracksList = ({ id }) => {
  const { data, loading } = useFetch(
    `https://api.spotify.com/v1/artists/${id}/top-tracks?market=from_token`
  );
  console.log(data);
  return (
    <>
      <h2 className="heading">Top Tracks</h2>
      {!loading ? (
        <ul className="flex flex-col gap-4 max-w-full">
          {data?.tracks?.map((track, index) => (
            <li className="flex items-center">
              <div className="flex justify-between items-center">
                <p className="text-lg w-6 font-bold tracking-widest">{index}</p>
                <img
                  src={track.album.images[0].url}
                  alt="album cover"
                  className="w-12 h-12 rounded-md"
                />
              </div>
              <div className="flex flex-col ml-4 w-full whitespace-nowrap max-w-[60%]">
                <p className="dark:text-white font-bold text-ellipsis overflow-hidden ">
                  {track.name}
                </p>
                <p className="dark:text-white text-xs text-ellipsis overflow-hidden ">
                  {track.artists.map((artist) => artist.name).join(", ")}
                </p>
              </div>
              <p className="dark:text-white ml-auto">
                {millisToTime(track.duration_ms)}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default TopTracksList;
