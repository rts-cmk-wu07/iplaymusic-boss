import { useNavigate } from "react-router-dom";
import millisToTime from "../../functions/millisToTime";

const SongListItem = ({ track, index }) => {
  // State for the play/pause button
  const navigate = useNavigate();
  return (
    <li
      key={index}
      className="flex items-center justify-between w-full text-additional dark:text-white"
    >
      <div className="flex justify-between items-center">
        {index && (
          <p className="text-xl text-left w-8 font-light tracking-widest">
            {index}
          </p>
        )}
        <img
          src={track.album.images[0].url}
          alt="album cover"
          className="w-12 h-12 rounded-md"
        />
      </div>
      <div className="flex flex-col ml-4 w-full whitespace-nowrap max-w-[60%]">
        <p className="dark:text-white font-bold text-ellipsis overflow-hidden ">
          {track.name}
        </p>
        <div className="flex min-w-0 text-ellipsis overflow-hidden whitespace-nowrap ">
          {track.artists.map((artist, index) => {
            return (
              <p
                key={index}
                className="text-sm "
                onClick={() => {
                  navigate(`/artist/${artist.id}`);
                }}
              >
                {(index ? ", " : "") + artist.name}
              </p>
            );
          })}
        </div>
      </div>
      <p className="dark:text-white ml-auto">
        {millisToTime(track.duration_ms)}
      </p>
    </li>
  );
};

export default SongListItem;
