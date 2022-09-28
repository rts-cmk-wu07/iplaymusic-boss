import useFetch from "../../hooks/useFetch"
import AlbumArt from "../subcomponents/AlbumArt"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const SavedAlbums = (props) => {
  const { url } = props
  const navigate = useNavigate()

  // Get current users saved albums
  const { data, loading, error } = useFetch(url)
  const myAlbums = data.items

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
      },
    },
  }

  const listItem = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0 },
  }

  return (
    myAlbums?.length > 0 && (
      <>
        <h2 className="text-md font-bold mt-4 mb-3 text-black dark:text-white">
          Saved Albums
        </h2>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex gap-3 overflow-x-auto -mr-6 pr-6 pl-4 -ml-4"
        >
          {myAlbums?.map((album, index) => {
            const albumData = album.album
            console.log(albumData)
            return (
              <motion.div key={index} variants={listItem}>
                <AlbumArt
                  artwork={albumData.images[1].url}
                  widthHeight="130px"
                  callback={() => navigate(`/album/${albumData.id}`)}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </>
    )
  )
}

export default SavedAlbums
