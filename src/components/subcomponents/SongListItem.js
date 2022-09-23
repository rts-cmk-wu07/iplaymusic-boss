import { useState } from "react";
import { IoPause, IoPlay } from "react-icons/io5";
const SongListItem = ({ item }) => {
  // State for the play/pause button
  const [isPlaying, setIsPlaying] = useState(false);
  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
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
      <div className="flex flex-col ml-4 w-full">
        <p className="dark:text-white font-bold text-ellipsis overflow-hidden whitespace-nowrap max-w-[260px]">
          {item.name}
        </p>
        <p className="dark:text-white text-xs">
          {item.artists[0] ? item.artists[0].name : ""}
          {item.artists[1] ? ", " + item.artists[1].name : ""}
          {item.artists[2] ? ", " + item.artists[2].name : ""}
          {item.artists[3] ? ", " + item.artists[3].name : ""}
        </p>
      </div>
      <p className="dark:text-white ml-auto">
        {millisToMinutesAndSeconds(item.duration_ms)}
      </p>
    </li>
  );
};

export default SongListItem;
