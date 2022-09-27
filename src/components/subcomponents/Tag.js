import { motion } from "framer-motion"

const Tag = (props) => {
  const { content, activeTag, setActiveTag } = props

  if (activeTag) {
    if (activeTag.toLowerCase() === content.toLowerCase()) {
      return (
        <motion.li
          whileTap={{ scale: 0.9 }}
          className="h-[41px] bg-primary px-4 py-2 font-bold w-fit text-white rounded-full list-none"
          onClick={setActiveTag ? () => setActiveTag(content) : null}
        >
          {content}
        </motion.li>
      )
    } else {
      return (
        <motion.li
          whileTap={{ scale: 0.9 }}
          className="h-[41px] border border-primary  px-4 py-2 font-bold w-fit text-primary dark:text-white list-none rounded-full"
          onClick={setActiveTag ? () => setActiveTag(content) : null}
        >
          {content}
        </motion.li>
      )
    }
  } else {
    return (
      <motion.li
        whileTap={{ scale: 0.9 }}
        className="h-[41px] bg-primary px-4 py-2 font-bold w-fit text-white rounded-full list-none"
        onClick={setActiveTag ? () => setActiveTag(content) : null}
      >
        {content}
      </motion.li>
    )
  }
}

export default Tag
