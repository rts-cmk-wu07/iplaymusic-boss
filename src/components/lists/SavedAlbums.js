import useFetch from "../../hooks/useFetch"
import AlbumArt from "../subcomponents/AlbumArt"
import { useNavigate } from "react-router-dom"

const SavedAlbums = (props) => {
  const { url } = props
  const navigate = useNavigate()

  // Get current users saved albums
  const { data, loading, error } = useFetch(url)
  const myAlbums = data.items

  return (
    myAlbums?.length > 0 && (
      <>
        <h2 className="text-md font-bold mt-4 mb-3 text-black dark:text-white">
          Saved Albums
        </h2>
        <div className="flex gap-3 overflow-x-auto -mr-6 pr-6">
          {myAlbums?.map((album, index) => {
            const albumData = album.album
            console.log(albumData)
            return (
              <AlbumArt
                key={index}
                artwork={albumData.images[1].url}
                widthHeight="130px"
                callback={() => navigate(`/album/${albumData.id}`)}
              />
            )
          })}
        </div>
      </>
    )
  )
}

export default SavedAlbums
