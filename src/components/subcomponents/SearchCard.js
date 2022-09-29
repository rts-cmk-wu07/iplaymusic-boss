import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import useSong from "../../hooks/useSong";
import { useEffect } from "react";

const SearchCard = (props) => {
  const { title, type, img, id, albumId } = props;
  const navigate = useNavigate();
  const [song, setSong] = useState(null);
  const updateSong = useSong(song);

  // Giving different classnames to the different types of search results
  let borderRadius;
  if (type === "artist") borderRadius = "rounded-full";
  if (type === "track") borderRadius = "rounded-md";
  const [isLoaded, setIsLoaded] = useState(false);

  function handleClick() {
    if (type === "playlist") navigate(`/playlist/${id}?title=${title}`);
    if (type === "album") navigate(`/album/${id}?title=${title}`);
    if (type === "artist") navigate(`/artist/${id}`);
    if (type === "track") setSong(id);
  }
  useEffect(() => {
    if (song) {
      updateSong(song);
    }
  }, [handleClick]);
  return (
    <motion.li onClick={handleClick} whileTap={{ scale: 0.95 }} className="flex items-center">
      <div className="w-12 h-12 relative mr-2 aspect-square">
        {!img && <div className={"bg-gray-500 w-full h-full absolute z-10 " + borderRadius}></div>}
        {!isLoaded && <div className={"bg-gray-500 w-full h-full absolute z-10 " + borderRadius}></div>}
        {img && <img alt="Search item Cover" onLoad={() => setIsLoaded(true)} className={"w-full h-full absolute " + borderRadius} src={img} />}
      </div>
      <div className="flex flex-col whitespace-nowrap overflow-hidden w-full">
        <h1 className="text-base text-ellipsis max-w-[90%] overflow-hidden">{title}</h1>
        <p className="text-sm italic capitalize">{type}</p>
      </div>
      <p
        className="ml-auto text-2xl"
        onClick={(event) => {
          event.stopPropagation();
          if (type === "track") navigate(`/album/${albumId}`);
        }}
      >
        <FiChevronRight />
      </p>
    </motion.li>
  );
};

export default SearchCard;
