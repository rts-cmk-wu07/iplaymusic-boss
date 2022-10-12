import { useNavigate } from "react-router-dom";
import millisToTime from "../../functions/millisToTime";
import { useContext, useState } from "react";
import useSong from "../../hooks/useSong";
import { FiChevronRight } from "react-icons/fi";
import SongContext from "../../contexts/SongContext";
import NowPlaying from "./NowPlaying";
import { AnimatePresence } from "framer-motion";

const SongListItem = ({
  track,
  index,
  noImage,
  largePadding,
  searchCard,
  albumId,
}) => {
  // State for the play/pause button
  const updateSong = useSong(track?.id);
  const [isImage, setIsImage] = useState(false);
  const { songData } = useContext(SongContext);
  let isExists =
    track?.album?.images.length > 0 ? true : noImage ? true : false;
  const navigate = useNavigate();
  return (
    isExists && (
      <li
        key={index || track?.id}
        onClick={updateSong}
        className={`flex items-center gap-2 justify-between w-full ${
          largePadding ? "py-2" : "py-1"
        } text-additional
      dark:text-white select-none`}>
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
                draggable="false"
              />
            </div>
          )}
        </div>
        <div className="flex flex-col min-w-0 whitespace-nowrap">
          <div onClick={updateSong} className="flex items-baseline">
            <AnimatePresence>
              {songData?.id === track?.id && <NowPlaying />}
            </AnimatePresence>
            <p
              className={
                songData?.id === track?.id
                  ? "text-primary text-md font-bold text-ellipsis overflow-hidden"
                  : "text-md font-bold text-ellipsis overflow-hidden"
              }>
              {track?.name}
            </p>
          </div>
          <div className="flex min-w-0 text-ellipsis overflow-hidden whitespace-nowrap">
            {track?.artists?.map((artist, index) => {
              return (
                <p key={index} className="text-xs opacity-75">
                  {(index ? ", " : "") + artist?.name}
                </p>
              );
            })}
          </div>
        </div>
        {searchCard ? (
          <p
            className="ml-auto text-2xl"
            onClick={(event) => {
              event.stopPropagation();
              navigate(`/album/${albumId}`);
            }}>
            <FiChevronRight />
          </p>
        ) : (
          <p className="text-black/75 dark:text-white/75 ml-auto text-sm flex-shrink-0">
            {millisToTime(track?.duration_ms)}
          </p>
        )}
      </li>
    )
  );
};

export default SongListItem;
