import useFetch from "../hooks/useFetch"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import TagList from "./lists/TagList"
import SearchInput from "./subcomponents/SearchInput"
import SearchCard from "./subcomponents/SearchCard"

// Setting the things we want to search for
const searchStates = ["track", "playlist", "artist", "album"]
// The tags
const tags = ["Best Results", "Tracks", "Artists", "Playlists", "Albums"]

const Search = () => {
  const [currentUrl, setCurrentUrl] = useState(null)
  const [inputValue, setInputValue] = useState("")
  const [activeSearchState, setActiveSearchState] = useState(tags[0]) // Best Results
  const [searchOpen, setSearchOpen] = useState(false)
  const [printData, setPrintData] = useState(null)

  const { data, loading, error } = useFetch(currentUrl)

  useEffect(() => {
    if (data) {
      if (activeSearchState !== "Best Results") {
        setPrintData(data[activeSearchState.toLowerCase()]?.items)
      } else {
        const topTracks = data.tracks?.items.filter((item, i) => i < 5)
        console.log(topTracks)
      }
    }
  }, [data, activeSearchState])

  function onSubmitSearch(event) {
    event.preventDefault()
    const inputToQuery = inputValue.replace(" ", "%20")
    setCurrentUrl(
      `https://api.spotify.com/v1/search?type=${searchStates.join(
        ","
      )}&include_external=audio&q=${inputToQuery}`
    )
    setSearchOpen(true)
  }

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{
        type: "spring",
        bounce: 0.25,
        duration: 0.5,
      }}
      className="flex flex-col top-[63px] overflow-hidden absolute w-full bg-white text-black dark:bg-secondary dark:text-white rounded-b-2xl shadow-2xl"
    >
      <SearchInput
        onSubmitSearch={onSubmitSearch}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {searchOpen && (
        <>
          <div className="ml-2">
            <TagList
              tags={tags}
              activeTag={activeSearchState}
              setActiveTag={setActiveSearchState}
            />
          </div>
          <ul className="flex flex-col px-3 gap-2 mb-3 max-h-[400px] overflow-y-auto">
            {printData?.map((item) => {
              const type = item.type.toLowerCase()
              let image

              if (type === "track") {
                image = item.album?.images[2]?.url
              } else {
                image = item?.images[0]?.url
              }

              return (
                <SearchCard
                  key={item.id}
                  title={item.name}
                  type={type}
                  img={image} //item.album.images[2].url
                />
              )
            })}
          </ul>
        </>
      )}
    </motion.div>
  )
}

export default Search
