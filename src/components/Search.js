import useFetch from "../hooks/useFetch"
import { motion } from "framer-motion"

const Search = () => {
  // const { data, loading, error } = useFetch(
  //   "https://api.spotify.com/v1/search?type=album&q=hej&include_external=audio"
  // )
  // console.log(data)
  return (
    <motion.div
      initial={{ y: -800, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -800, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-[600px] top-[63px] absolute w-full bg-white text-black dark:bg-secondary dark:text-white rounded-b-2xl"
    >
      SEARCH
    </motion.div>
  )
}

export default Search
