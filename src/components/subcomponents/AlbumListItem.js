import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const AlbumListItem = (props) => {
  const { id, images, name, artists, total_tracks } = props

  const [isImage, setIsImage] = useState(false)
  const navigate = useNavigate()

  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate(`/album/${id}`)}
      className="flex items-center"
    >
      <div className="mr-3 rounded-sm overflow-hidden relative w-[50px]">
        {!isImage && (
          <div className="bg-slate-500 w-full aspect-square absolute"></div>
        )}
        <img
          className="aspect-square"
          src={images[1].url}
          onLoad={() => setIsImage(true)}
          alt="album cover"
        />
      </div>
      <div className=" max-w-[60%] whitespace-nowrap dark:text-white">
        <h3 className="font-bold overflow-hidden text-ellipsis">{name}</h3>
        <p className="font-light text-sm overflow-hidden text-ellipsis">
          {artists.name}
        </p>
      </div>
      <span className="ml-auto font-light text-sm dark:text-white">
        {total_tracks} Songs
      </span>
    </motion.div>
  )
}

export default AlbumListItem
