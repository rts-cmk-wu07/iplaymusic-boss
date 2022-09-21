import { motion } from "framer-motion"
import { useState, useContext } from "react"
import MiniPlayer from "./MiniPlayer"
import LargePlayer from "./LargePlayer"
import TokenContext from "../contexts/TokenContext"

const Player = ({ isPlaying, song }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.section
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragEnd={() => {
        setIsOpen(!isOpen)
      }}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 15 }}
      layout
      animate={{ borderRadius: isOpen ? "0px" : "8px" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed flex flex-col gradient shadow-lg rounded-lg shadow-[#FF6A00]/50 z-30 ${
        isOpen
          ? "top-0 bottom-0 left-0 right-0"
          : "bottom-20 left-2 right-2 p-1"
      }`}
    >
      <LargePlayer isOpen={isOpen} setIsOpen={setIsOpen} song={song} />
      <MiniPlayer isOpen={isOpen} setIsOpen={setIsOpen} song={song} />
    </motion.section>
  )
}

export default Player
