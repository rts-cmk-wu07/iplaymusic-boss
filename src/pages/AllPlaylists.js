import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import { motion } from "framer-motion"

const AllPlaylists = () => {
  // Get current users playlists
  const { data, loading, error } = useFetch(
    "https://api.spotify.com/v1/me/playlists"
  )
  const playlistArray = data?.items

  // For development purposes
  useEffect(() => {
    console.log(playlistArray)
    console.log(loading)
  }, [data, loading, error])

  return (
    <ul className="p-6 grid grid-cols-2 gap-y-5 gap-x-4 max-w-[100%]">
      {!loading &&
        playlistArray?.map((playlist) => {
          const { uri, images, name } = playlist
          const isImages = images.length > 0
          return (
            <motion.li
              whileTap={{ scale: 1.1 }}
              className="flex flex-col"
              key={uri}
            >
              {isImages && (
                <>
                  <img
                    className="mb-2"
                    src={images[1]?.url || images[0]?.url}
                    alt=""
                  />
                  <p className="text-white self-center">{name}</p>
                </>
              )}
              {!isImages && <div className="w-full h-full bg-slate-500"></div>}
            </motion.li>
          )
        })}
      {loading && <p>LOADING</p>}
    </ul>
  )
}

export default AllPlaylists
