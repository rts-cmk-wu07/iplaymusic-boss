import SavedAlbums from "../components/lists/SavedAlbums"

const AllAlbums = () => {
  return (
    <div className="p-6">
      <h1 className="heading gradient-text ">All Albums</h1>
      <SavedAlbums url="https://api.spotify.com/v1/me/albums" />
    </div>
  )
}

export default AllAlbums
