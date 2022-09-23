import List from "../templates/List"
const AllSongs = () => {
  return (
    <div className="p-6">
      <h1 className="heading gradient-text">Your Top Songs</h1>
      <List
        startUrl="https://api.spotify.com/v1/me/top/tracks"
        loadMoreOnIndex={16}
      />
    </div>
  )
}

export default AllSongs
