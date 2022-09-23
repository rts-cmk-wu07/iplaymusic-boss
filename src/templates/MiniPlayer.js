import { AnimatePresence, motion } from "framer-motion"
import { IoPlayBack, IoPlayCircle, IoPlayForward } from "react-icons/io5"
import AlbumArt from "../components/subcomponents/AlbumArt"

const MiniPlayer = ({ isOpen, setIsOpen, song }) => {
  return (
    <AnimatePresence initial={false}>
      {!isOpen && (
        <motion.div
          layout
          className={`flex items-center gap-2`}
          initial={{ opacity: 0, y: 32 }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { delay: 0.4, delayChildren: 0.5 },
          }}
          exit={{
            opacity: 0,
            filter: "blur(32px)",
            height: 0,
            transition: { duration: 0.5 },
          }}
        >
          <AlbumArt
            callback={() => setIsOpen(true)}
            artwork={song?.album?.images[0]?.url}
          />
          <motion.div className="min-w-0" onClick={() => setIsOpen(true)}>
            <h2 className="text-white font-bold w-full whitespace-nowrap overflow-hidden text-ellipsis">
              {song?.name || "Never gonna let you down"}
            </h2>
            <p className="text-sm text-white opacity-75 whitespace-nowrap overflow-hidden text-ellipsis">
              {song?.artist || "Rick Astley"}
            </p>
          </motion.div>
          <motion.div
            className={`flex gap-1 text-white items-center ${
              !isOpen && "ml-auto"
            } mr-2`}
          >
            {isOpen && (
              <motion.button
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
              >
                <IoPlayBack size={24} />
              </motion.button>
            )}
            <motion.button
              initial={{ x: 8 }}
              animate={{ x: 0, transition: { delay: 0.7 } }}
              className="rounded-full p-1"
            >
              <IoPlayCircle className="w-12 h-12" />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.75 } }}
              className="rounded-full p-1"
            >
              <IoPlayForward className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MiniPlayer
