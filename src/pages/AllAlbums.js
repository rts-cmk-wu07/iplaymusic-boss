import SavedAlbums from "../components/lists/SavedAlbums";
import NewReleases from "../components/lists/NewReleases";

const AllAlbums = () => {
  return (
    <div className="p-6">
      <h1 className="heading gradient-text pb-3">All Albums</h1>
      <SavedAlbums url="https://api.spotify.com/v1/me/albums" />
      <NewReleases url="https://api.spotify.com/v1/browse/new-releases?country=US" />
    </div>
  );
};

export default AllAlbums;
