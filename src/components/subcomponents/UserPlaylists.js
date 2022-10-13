import useFetch from "../../hooks/useFetch";
import Playlist from "../subcomponents/Playlist";
import Loader from "./Loader";
const UserPlayLists = ({ id, name }) => {
  const { data, loading } = useFetch(
    `https://api.spotify.com/v1/users/${id}/playlists`
  );
  return (
    <div className="flex flex-col w-full my-6">
      <h2 className="text-3xl text-additional dark:text-white font-semibold mb-4 px-6">
        {name}'s Playlists
      </h2>
      {!loading ? (
        <ul className="ml-6 pr-12 overflow-x-auto flex w-full gap-4 select-none">
          {data?.items.map((playlist) => (
            <div key={playlist.id} className="min-w-[165px] min-h-[215px]">
              <Playlist {...playlist} />
            </div>
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default UserPlayLists;
