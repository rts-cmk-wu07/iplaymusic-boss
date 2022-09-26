import { motion } from "framer-motion"
import { useState, createRef } from "react"
import { useNavigate } from "react-router-dom"
import PlaylistCard from "./PlaylistCard"

const Playlist = (props) => {
  const navigate = useNavigate()
  const { uri, images, name, id, loading } = props
  // Check if images array contains items
  const isImages = !loading && images.length > 0

  const [isImage, setIsImage] = useState(false)

  return (
    <motion.li
      whileTap={{ scale: 1.1 }}
      className="flex flex-col h-[200px]"
      onClick={() => navigate(`/playlist/${id}?title=${name}`)}
    >
      {loading && (
        <>
          <div className="relative aspect-square">
            {!isImage && (
              <div className="bg-slate-500 w-full aspect-square z-30 opacity-50 absolute rounded-md" />
            )}
            <div className="mb-2 aspect-square fit-content -z-1 absolute" />
          </div>
          <p className="text-white text-center self-stretch opacity-0 mt-1">
            Loading...
          </p>
        </>
      )}
      {isImages && !loading && (
        <PlaylistCard
          isImage={isImage}
          images={images}
          name={name}
          setIsImage={setIsImage}
        />
      )}
      {!isImages && !loading && (
        <div className="bg-slate-500 aspect-square z-30 opacity-50 rounded-md" />
      )}
    </motion.li>
  )
}

export default Playlist

Playlist.defaultProps = {
  loading: false,
}
