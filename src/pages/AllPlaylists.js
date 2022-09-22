import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"
import { motion } from "framer-motion"
import SoundWaveHeader from "../components/subcomponents/SoundWaveHeader"
import { useNavigate } from "react-router-dom"

const AllPlaylists = () => {
  const [playlistData, setPlaylistData] = useState([])
  const [currentUrl, setCurrentUrl] = useState(
    "https://api.spotify.com/v1/me/playlists"
  )

  // Get current users playlists
  const { data, loading, error } = useFetch(currentUrl)

  // For development purposes
  useEffect(() => {
    if (data.items) {
      console.log(data.items)
      setPlaylistData((prevState) => [...data.items])
    } else {
      setPlaylistData(data.items)
    }
  }, [data, loading, error])

  const navigate = useNavigate()

  return (
    <div>
      <SoundWaveHeader />
      <ul className="p-6 grid grid-cols-2 gap-y-5 gap-x-4 max-w-[100%]">
        {!loading &&
          playlistData?.map((playlist) => {
            const { uri, images, name, id } = playlist
            const isImages = images.length > 0
            return (
              <motion.li
                whileTap={{ scale: 1.1 }}
                className="flex flex-col"
                onClick={() => navigate(`/playlist/${id}`)}
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
                {!isImages && (
                  <div className="w-full h-full bg-slate-500"></div>
                )}
              </motion.li>
            )
          })}
        {loading && <p>LOADING</p>}
      </ul>
    </div>
  )
}

export default AllPlaylists
