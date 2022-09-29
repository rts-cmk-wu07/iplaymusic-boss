import { AnimatePresence, motion } from "framer-motion";
import {
	IoChevronDown,
	IoPlayBack,
	IoPlayForward,
	IoPlayCircle,
	IoPauseCircle,
	IoShuffle,
	IoRepeat,
} from "react-icons/io5";
import {
	containerV,
	albumArtV,
	titleV,
	closeV,
	progressV,
	imgV,
	controlV,
} from "../assets/variants/LargePlayer";
import Progress from "../components/Progress";
import PlayBackButton from "../components/buttons/PlayBackButton";
import useFetch from "../hooks/useFetch";
import useControls from "../hooks/useControls";
import { useContext } from "react";
import ControlsContext from "../contexts/ControlsContext";

const LargePlayer = ({
	isOpen,
	setIsOpen,
	song,
	isPlaying,
	controls,
	songProgress,
	setSongProgress,
}) => {
	const { nextSong, previousSong, toggleShuffle, toggleRepeat } = useControls();
	const { controls: playBackControls } = useContext(ControlsContext);
	const { isShuffle, isRepeat } = playBackControls;
	const { data } = useFetch(
		`https://api.spotify.com/v1/artists/${song?.artists[0].id}/`
	);
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					variants={containerV}
					initial="initial"
					animate="open"
					exit="exit"
					className="w-full h-full overflow-hidden relative"
				>
					<motion.img
						variants={imgV}
						src={data?.images[0]?.url}
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
								<motion.img
									variants={{
										initial: {
											opacity: 0,
										},
										open: {
											opacity: 1,
											transition: {
												delay: 0.5,
												ease: "easeOut",
												rotate: {
													duration: 10,
													repeat: Infinity,
													ease: "linear",
												},
											},
										},
									}}
									animate={
										isPlaying
											? {
													rotate: ["0deg", "360deg"],
													opacity: 1,
													transition: {
														delay: 0.5,
														ease: "easeOut",
														rotate: {
															delay: 0,
															duration: 10,
															repeat: Infinity,
															ease: "linear",
														},
													},
											  }
											: {
													rotate: "0deg",
													opacity: 1,
													transition: {
														delay: 0.5,
														ease: "easeOut",
														rotate: {
															delay: 0,
															type: "spring",
															stiffness: 100,
															damping: 10,
														},
													},
											  }
									}
									src={song?.album.images[0].url}
									alt="album art"
									className="h-64 w-64 rounded-full user-select-none user-drag-none"
								/>
							</motion.div>
							<motion.div>
								<motion.h1
									variants={titleV.name}
									style={{ textShadow: "0 2px 8px #00000030" }}
									className="text-white font-bold text-3xl text-center"
								>
									{song?.name || "Never Gonna Give You Up"}
								</motion.h1>
								<motion.h2
									variants={titleV.artist}
									style={{ textShadow: "0 2px 8px #00000030" }}
									className="text-white text-xl text-center mt-2"
								>
									{song?.artists
										? song.artists.map(artist => artist.name).join(", ")
										: "Rick Astley"}
								</motion.h2>
							</motion.div>
							<motion.div>
								<Progress
									current={songProgress}
									setProgress={setSongProgress}
									controls={controls}
								/>
							</motion.div>
							<motion.div>
								<motion.div
									variants={progressV.controls}
									className="flex justify-center items-center mt-8 gap-2"
								>
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
											isPlaying ? controls.pause() : controls.play()
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
