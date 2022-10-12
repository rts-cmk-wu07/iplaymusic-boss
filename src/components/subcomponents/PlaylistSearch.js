import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";

const PlaylistSearch = ({ search, setSearch }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  function focusHandler() {
    if (isFocused && search === "") {
      setIsFocused(!isFocused);
    } else {
      setIsFocused(true);
    }
  }
  return (
    <AnimatePresence>
      <motion.label
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative w-full">
        <span
          className={
            isFocused
              ? "cursor-text text-center flex items-center opacity-50 justify-center gap-1 text-black dark:text-white absolute text-xs ml-3 transition-all w-[calc(100%-33px)]"
              : "cursor-text flex items-center justify-center gap-1 text-center text-black dark:text-white transition-all overflow-hidden text-ellipsis whitespace-nowrap  absolute mt-[10px] ml-[23px] w-[calc(100%-33px)]"
          }>
          <IoSearch
            className="transition-all duration-500"
            size={isFocused ? 16 : 20}
          />
          Search for a song or artist...
        </span>
        <button
          className="absolute right-4 bottom-[5px] text-white w-5 h-5 text-xs rounded-full gradient font-semibold"
          onClick={(e) => {
            e.stopPropagation();
            setSearch("");
            inputRef.current.focus();
          }}>
          X
        </button>
        <input
          className="text-center rounded-2xl outline-none w-full h-[45px] bg-white text-black dark:bg-additional pt-2 dark:text-white"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={focusHandler}
          onBlur={focusHandler}
          ref={inputRef}
        />
      </motion.label>
    </AnimatePresence>
  );
};

export default PlaylistSearch;
