import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

const SearchCard = (props) => {
  const { title, type, img, id } = props;
  const navigate = useNavigate();

  // Giving different classnames to the different types of search results
  let thing;
  if (type === "artist") thing = "rounded-full";
  if (type === "track") thing = "rounded-md";

  const [isLoaded, setIsLoaded] = useState(false);

  function handleClick() {
    if (type === "playlist") navigate(`/playlist/${id}?title=${title}`);
    if (type === "album") navigate(`/album/${id}?title=${title}`);
    if (type === "artist") navigate(`/artist/${id}`);
    if (type === "track")
      console.log(
        "%cFunction not implemented yet... playTrack in SearchCard",
        "color: red;"
      );
  }

  return (
    <motion.li
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
      className="flex items-center"
    >
      <div className="w-12 h-12 relative mr-2 aspect-square">
        {!img && (
          <div
            className={"bg-gray-500 w-full h-full absolute z-10 " + thing}
          ></div>
        )}
        {!isLoaded && (
          <div
            className={"bg-gray-500 w-full h-full absolute z-10 " + thing}
          ></div>
        )}
        {img && (
          <img
            onLoad={() => setIsLoaded(true)}
            className={"w-full h-full absolute " + thing}
            src={img}
            alt=""
          />
        )}
      </div>
      <div className="flex flex-col whitespace-nowrap overflow-hidden w-full">
        <h1 className="text-base text-ellipsis max-w-[90%] overflow-hidden">
          {title}
        </h1>
        <p className="text-sm italic capitalize">{type}</p>
      </div>
      <p className="ml-auto text-2xl">
        <FiChevronRight />
      </p>
    </motion.li>
  );
};

export default SearchCard;
