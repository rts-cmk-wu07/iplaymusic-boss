import { AnimatePresence, motion } from "framer-motion";
import { IoChevronDown, IoPlaySkipBack, IoPlayBack, IoPlayForward, IoPlayCircle, IoPlaySkipForward } from "react-icons/io5";
import { useState } from "react";
import { containerV, albumArtV, titleV, closeV, progressV, imgV, controlV } from "../assets/variants/LargePlayer";

const LargePlayer = ({ isOpen, setIsOpen, song }) => {
  let progress = 0;
  const [progressState, setProgressState] = useState(0);
  const updateProgress = () => {
    setTimeout(() => {
      if (progress < 100) {
        progress++;
        setProgressState(progress);
        updateProgress();
      }
    }, 100);
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div variants={containerV} initial="initial" animate="open" exit="exit" className="w-full h-full overflow-hidden relative">
          <motion.img
            variants={imgV}
            src={song?.album.images[0].url}
            className="w-full h-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />

          <motion.div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-additional/50">
            <nav className="flex absolute top-0 left-0 w-full p-2 py-4">
              <motion.button
                variants={closeV}
                className="rounded-full bg-primary/50 w-10 h-10 flex justify-center items-center backdrop-blur-md shadow-md shadow-additional/5"
                onClick={() => setIsOpen(false)}
              >
                <IoChevronDown size={24} className="-mb-px text-white" />
              </motion.button>
            </nav>
            <div className="px-6">
              <motion.div
                className="flex justify-center items-center w-64 h-64 mb-8 mx-auto rounded-full shadow-2xl shadow-additional/50"
                variants={albumArtV.bg}
              >
                <motion.img variants={albumArtV.art} src={song?.album.images[0].url} alt="album art" className="h-64 w-64 rounded-full" />
              </motion.div>
              <motion.div>
                <motion.h1 variants={titleV.name} style={{ textShadow: "0 2px 8px #00000030" }} className="text-white font-bold text-3xl text-center">
                  {song?.name || "Never Gonna Give You Up"}
                </motion.h1>
                <motion.h2 variants={titleV.artist} style={{ textShadow: "0 2px 8px #00000030" }} className="text-white text-xl text-center mt-2">
                  {song?.artist || "Rick Astley"}
                </motion.h2>
              </motion.div>
              <motion.div>
                <motion.div variants={progressV.bar} className="w-full h-1 bg-primary/50 rounded-full mt-12" onClick={updateProgress}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressState}%` }}
                    className="h-full gradient rounded-full shadow-glow shadow-gradientColors-right/50"
                  />
                </motion.div>
              </motion.div>
              <motion.div>
                <motion.div variants={progressV.time} className="flex justify-between text-white text-sm mt-2">
                  <span>0:00</span>
                  <span>3:33</span>
                </motion.div>
              </motion.div>
              <motion.div>
                <motion.div variants={progressV.controls} className="flex justify-center items-center mt-8 gap-4">
                  <motion.button variants={controlV.skipBack} className="rounded-full w-8 h-8 flex justify-center items-center">
                    <IoPlaySkipBack className="text-white w-full h-full" />
                  </motion.button>
                  <motion.button variants={controlV.back} className="rounded-full w-12 h-12 flex justify-center items-center">
                    <IoPlayBack className="text-white w-full h-full" />
                  </motion.button>
                  <motion.button
                    variants={controlV.play}
                    animate={{ scale: 1 }}
                    whileTap={{ scale: 0.75 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                    }}
                    className="rounded-full w-24 h-24 flex justify-center items-center"
                  >
                    <IoPlayCircle className="text-white w-full h-full" />
                  </motion.button>
                  <motion.button variants={controlV.next} className="rounded-full w-12 h-12 flex justify-center items-center">
                    <IoPlayForward className="text-white w-full h-full" />
                  </motion.button>
                  <motion.button variants={controlV.skipNext} className="rounded-full w-8 h-8 flex justify-center items-center">
                    <IoPlaySkipForward className="text-white w-full h-full" />
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LargePlayer;
