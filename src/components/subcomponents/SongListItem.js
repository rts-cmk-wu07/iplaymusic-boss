import { Link } from "react-router-dom";
import millisToTime from "../../functions/millisToTime";
import { useState } from "react";
import useSong from "../../hooks/useSong";

const SongListItem = ({ track, index, noImage, largePadding }) => {
  // State for the play/pause button
  const updateSong = useSong(track?.id);
  const [isImage, setIsImage] = useState(false);

  let isExists =
    track?.album?.images.length > 0 ? true : noImage ? true : false;

  return (
    isExists && (
      <li
        key={index || track?.id}
        onClick={updateSong}
        className={`flex items-center gap-2 justify-between w-full ${
          largePadding ? "py-2" : "py-1"
        } text-additional
      dark:text-white`}>
        <div className="flex justify-between items-center flex-shrink-0">
          {index && (
            <p className="w-6 font-light tracking-widest text-sm text-left shrink-0">
              {index}
            </p>
          )}
          {!noImage && (
            <div className="w-12 h-12 rounded-md relative overflow-hidden">
              {!isImage && (
                <div className="absolute bg-slate-500 z-10 w-full aspect-square"></div>
              )}
              <img
                src={track?.album?.images[0]?.url}
                alt="album cover"
                onLoad={() => setIsImage(true)}
                className="absolute aspect-square"
              />
            </div>
          )}
        </div>
        <div className="flex flex-col min-w-0 whitespace-nowrap">
          <p
            className="dark:text-white font-bold text-ellipsis overflow-hidden"
            onClick={updateSong}>
            {track?.name}
          </p>
          <div className="flex min-w-0 text-ellipsis overflow-hidden whitespace-nowrap ">
            {track?.artists?.map((artist, index) => {
              return (
                <Link
                  to={`/artist/${artist?.id}`}
                  key={index}
                  className="text-xs opacity-75"
                  onClick={(e) => e.stopPropagation()}>
                  {(index ? ", " : "") + artist?.name}
                </Link>
              );
            })}
          </div>
        </div>
        <p className="text-black/75 dark:text-white/75 ml-auto text-sm flex-shrink-0">
          {millisToTime(track?.duration_ms)}
        </p>
      </li>
    )
  );
};

export default SongListItem;
