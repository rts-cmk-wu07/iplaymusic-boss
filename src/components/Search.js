import useFetch from "../hooks/useFetch"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import TagList from "./lists/TagList"

// Setting the things we want to search for
const searchStates = [
  "Best Results",
  "Tracks",
  "Playlists",
  "Artists",
  "Albums",
]

const Search = () => {
  const [currentUrl, setCurrentUrl] = useState(null)
  const [inputValue, setInputValue] = useState("")
  const [activeSearchState, setActiveSearchState] = useState(searchStates[0])

  const { data, loading, error } = useFetch(currentUrl)

  useEffect(() => {
    console.log(data)
  }, [data])

  function onSubmitSearch(event) {
    event.preventDefault()
    const inputToQuery = inputValue.replace(" ", "%20")
    setCurrentUrl(
      `https://api.spotify.com/v1/search?type=${searchStates.join(
        ","
      )}&include_external=audio&q=${inputToQuery}`
    )
  }

  return (
    <motion.div
      //style={{ backgroundColor: "red" }}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{
        type: "spring",
        bounce: 0.25,
        duration: 0.5,
      }}
      className="p-2 flex flex-col top-[63px] overflow-hidden absolute w-full bg-white text-black dark:bg-secondary dark:text-white rounded-b-2xl shadow-2xl"
    >
      <form className="pb-1 mb-4 " onSubmit={onSubmitSearch}>
        <motion.input
          autoFocus
          initial={{ borderRadius: 3 }}
          whileFocus={{ borderRadius: 15 }}
          className="text-center border-2 outline-none w-full h-[55px] bg-white text-black dark:bg-secondary dark:text-white border-primary"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
      <TagList
        tags={[...searchStates]}
        activeTag={activeSearchState}
        setActiveTag={setActiveSearchState}
      />
    </motion.div>
  )
}

export default Search
