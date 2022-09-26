import { useState } from "react";
import { IoPause, IoPlay } from "react-icons/io5";
const SongListItem = ({ item }) => {
  // State for the play/pause button
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <li className="flex items-center">
      <button onClick={() => setIsPlaying(!isPlaying)} className="gradient p-2 rounded-full">
        {isPlaying ? <IoPause size="15" color="#fff" /> : <IoPlay size="15" color="#fff" />}
      </button>
      <div className="flex flex-col ml-6">
        <p className="dark:text-white font-bold">{item.title}</p>
        <p className="dark:text-white text-xs">{item.artist}</p>
      </div>
      <p className="dark:text-white ml-auto">{item.duration}</p>
    </li>
  );
};

export default SongListItem;
