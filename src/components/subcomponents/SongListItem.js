import { useState } from "react"
import { IoPause, IoPlay } from "react-icons/io5"
import millisToTime from "../../functions/millisToTime"

const SongListItem = ({ track }) => {
  const { name, artists, duration_ms } = track
  // State for the play/pause button
  const [isPlaying, setIsPlaying] = useState(false)

  const artistNames = artists.map((artist) => artist.name).join(", ")

  return (
    <li className="flex items-center">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="gradient p-2 rounded-full"
      >
        {isPlaying ? (
          <IoPause size="15" color="#fff" />
        ) : (
          <IoPlay size="15" color="#fff" />
        )}
      </button>
      <div className="flex flex-col ml-6 w-full whitespace-nowrap max-w-[65%]">
        <p className="dark:text-white font-bold text-ellipsis overflow-hidden ">
          {name}
        </p>
        <p className="dark:text-white text-xs text-ellipsis overflow-hidden ">
          {artistNames}
        </p>
      </div>
      <p className="dark:text-white ml-auto">{millisToTime(duration_ms)}</p>
    </li>
  )
}

export default SongListItem
