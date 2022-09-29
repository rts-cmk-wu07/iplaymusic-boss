import { useState } from "react";

const SearchInput = (props) => {
  function focusHandler(event) {
    if (isFocused && inputValue === "") {
      setIsFocused(!isFocused);
    } else {
      setIsFocused(true);
    }
  }
  const [isFocused, setIsFocused] = useState(false);
  const { onSubmitSearch, setInputValue, inputValue, searchResultsOpen } =
    props;
  return (
    <form
      className={
        searchResultsOpen ? "bg-white dark:bg-secondary pb-2 px-2" : "pb-2 px-2"
      }
      onSubmit={onSubmitSearch}>
      <label className="relative w-full">
        <span
          className={
            isFocused
              ? "cursor-text text-primary absolute text-xs ml-3 transition-all overflow-hidden text-ellipsis whitespace-nowrap"
              : "cursor-text text-primary transition-all absolute mt-4 ml-[23px] overflow-hidden text-ellipsis whitespace-nowrap"
          }>
          Search for Tracks, Artists, Playlists and Albums
        </span>
        <input
          required
          className="text-center border-2 rounded-2xl outline-none w-full h-[55px] bg-white text-black dark:bg-secondary dark:text-white border-primary"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={focusHandler}
          onBlur={focusHandler}
        />
      </label>
    </form>
  );
};

export default SearchInput;
