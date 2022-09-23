import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import List from "../templates/List"

const Playlist = () => {
  const { id } = useParams()

  return (
    <div className="p-6">
      <h1 className="heading gradient-text">Your Top Songs</h1>
      <List
        startUrl={`https://api.spotify.com/v1/playlists/${id}/tracks`}
        loadMoreOnIndex={16}
      />
    </div>
  )
}

export default Playlist
