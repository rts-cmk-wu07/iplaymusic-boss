import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import {
	IoPlayBack,
	IoPlayForward,
	IoPlayCircle,
	IoPauseCircle,
	IoShuffle,
	IoRepeat,
} from "react-icons/io5";
import { controlV } from "../../assets/variants/LargePlayer";
import useControls from "../../hooks/useControls";
import PlayBackButton from "./PlayBackButton";
import ControlsContext from "../../contexts/ControlsContext";

const PlayBackButtons = ({ isPlaying, audioControls, setIsOpen }) => {
	const { nextSong, previousSong, toggleRepeat, toggleShuffle } = useControls();
	const { controls } = useContext(ControlsContext);
	const { isShuffle, isRepeat } = controls;
	return (
		<motion.section className="flex justify-center items-center mt-8 gap-2">
			<PlayBackButton
				variants={controlV.skipBack}
				callback={() => toggleShuffle()}
			>
				<AnimatePresence>
					{isShuffle ? (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className={`w-full h-full flex justify-center items-center p-2 rounded-full gradient`}
						>
							<IoShuffle className="w-6 h-6" />
						</motion.div>
					) : (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className={`w-full h-full flex justify-center items-center p-2 rounded-full`}
						>
							<IoShuffle className="w-6 h-6" />
						</motion.div>
					)}
				</AnimatePresence>
			</PlayBackButton>
			<PlayBackButton
				size="lg"
				variants={controlV.back}
				animate={{ scale: 1 }}
				callback={() => previousSong()}
			>
				<IoPlayBack className="text-white w-full h-full" />
			</PlayBackButton>
			<PlayBackButton
				size="xl"
				variants={controlV.play}
				animate={{ scale: 1 }}
				callback={() =>
					isPlaying ? audioControls.pause() : audioControls.play()
				}
			>
				{isPlaying ? (
					<IoPauseCircle className="w-full h-full" />
				) : (
					<IoPlayCircle className="w-full h-full" />
				)}
			</PlayBackButton>
			<PlayBackButton
				size="lg"
				variants={controlV.next}
				animate={{ scale: 1 }}
				callback={() => nextSong(setIsOpen)}
			>
				<IoPlayForward className="text-white w-full h-full" />
			</PlayBackButton>
			<PlayBackButton
				variants={controlV.skipNext}
				callback={() => toggleRepeat()}
			>
				<AnimatePresence>
					{isRepeat ? (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className={`w-full h-full flex justify-center items-center p-2 rounded-full gradient`}
						>
							<IoRepeat className="w-6 h-6" />
						</motion.div>
					) : (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className={`w-full h-full flex justify-center items-center p-2 rounded-full`}
						>
							<IoRepeat className="w-6 h-6" />
						</motion.div>
					)}
				</AnimatePresence>
			</PlayBackButton>
		</motion.section>
	);
};

export default PlayBackButtons;
