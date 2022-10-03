import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";
import arrayShuffle from "array-shuffle";
import { motion } from "framer-motion";
import TagList from "./lists/TagList";
import SearchInput from "./subcomponents/SearchInput";
import SearchCard from "./subcomponents/SearchCard";
import SongListItem from "./subcomponents/SongListItem";

// Setting the things we want to search for
const searchStates = ["track", "playlist", "artist", "album"];
// The tags
const tags = ["Best Results", "Tracks", "Artists", "Playlists", "Albums"];
const Search = ({ setSearchOpen, transparent }) => {
  const [currentUrl, setCurrentUrl] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [activeSearchState, setActiveSearchState] = useState(tags[0]); // Best Results
  const [searchResultsOpen, setSearchResultsOpen] = useState(false);
  const [printData, setPrintData] = useState(null);
  const [showErr, setShowErr] = useState(false);

  const { data } = useFetch(currentUrl);

  useEffect(() => {
    setShowErr(false);
    if (JSON.stringify(data).length > 2) {
      if (activeSearchState !== "Best Results") {
        setPrintData(data[activeSearchState.toLowerCase()]?.items);
      } else {
        const topTracks = data?.tracks?.items.filter(
          (item, i) => i <= 5 && i >= 2
        );
        const topArtists = data?.artists?.items.filter(
          (item, i) => i <= 5 && i >= 2
        );
        const firstFour = [
          ...data?.tracks?.items.filter((item, i) => i <= 1),
          ...data?.artists?.items.filter((item, i) => i <= 1),
        ];
        const topPlaylists = data?.playlists?.items.filter((item, i) => i <= 5);
        const topAlbums = data?.albums?.items.filter((item, i) => i <= 5);
        const allTop = [
          ...topTracks,
          ...topArtists,
          ...topPlaylists,
          ...topAlbums,
        ];
        if (allTop.length === 0) {
          setShowErr(true);
        }
        setPrintData([...firstFour, ...arrayShuffle([...allTop])]);
      }
    }
  }, [data, activeSearchState]);

  function onSubmitSearch(event) {
    event.preventDefault();
    const inputToQuery = inputValue.replace(" ", "%20");

    if (inputValue === "") {
      setSearchOpen(false);
    } else {
      setCurrentUrl(
        `https://api.spotify.com/v1/search?type=${searchStates.join(
          ","
        )}&include_external=audio&q=${inputToQuery}`
      );
      setSearchResultsOpen(true);
    }
  }
  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{
        type: "spring",
        bounce: 0.25,
        duration: 0.5,
      }}
      className={
        transparent
          ? "flex flex-col top-[63px] overflow-hidden absolute w-full  text-black  dark:text-white rounded-b-2xl"
          : "flex flex-col top-[63px] overflow-hidden absolute w-full bg-white text-black dark:bg-secondary dark:text-white rounded-b-2xl shadow-2xl"
      }>
      <SearchInput
        onSubmitSearch={onSubmitSearch}
        inputValue={inputValue}
        setInputValue={setInputValue}
        searchResultsOpen={searchResultsOpen}
      />
      {searchResultsOpen && (
        <div className="bg-white dark:bg-secondary">
          <div className="pl-2">
            <TagList
              tags={tags}
              activeTag={activeSearchState}
              setActiveTag={setActiveSearchState}
            />
          </div>
          <ul className="flex flex-col px-3 gap-2 mb-3 max-h-[400px] overflow-y-auto ">
            {printData?.map((item) => {
              const type = item.type.toLowerCase();
              let image;

              if (type === "track") {
                image = item.album?.images[2]?.url;
              } else {
                image = item?.images[0]?.url;
              }

              if (type !== "track") {
                return (
                  <SearchCard
                    key={item.id}
                    id={item.id}
                    title={item.name}
                    type={type}
                    img={image} //item.album.images[2].url
                    albumId={item?.album?.id}
                  />
                );
              } else {
                return (
                  <SongListItem
                    key={item.id}
                    id={item.id}
                    title={item.name}
                    type={type}
                    img={image} //item.album.images[2].url
                    albumId={item?.album?.id}
                    searchCard
                  />
                );
              }
            })}
          </ul>
          {showErr && (
            <p className="text-center -translate-y-3 text-primary">
              No results
            </p>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default Search;
