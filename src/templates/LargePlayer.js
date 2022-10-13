import { AnimatePresence, motion } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";
import {
	containerV,
	albumArtV,
	titleV,
	closeV,
	imgV,
} from "../assets/variants/LargePlayer";
import Progress from "../components/Progress";
import useFetch from "../hooks/useFetch";
import PlayBackButtons from "../components/buttons/PlayBackButtons";
import AnimatedText from "../components/subcomponents/text/AnimatedText";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActionMenu from "../components/ActionMenu";
import VolumeSlider from "../components/VolumeSlider";
import { memo } from "react";

const LargePlayer = ({
	isOpen,
	setIsOpen,
	song,
	isPlaying,
	controls,
	songProgress,
	setSongProgress,
	volume,
	setVolume,
}) => {
	const navigate = useNavigate();
	const [artistListOpen, setArtistListOpen] = useState(false);
	const { data } = useFetch(
		`https://api.spotify.com/v1/artists/${song?.artists[0].id}/`
	);

	const handleArtistClick = () => {
		if (song?.artists.length > 1) {
			setArtistListOpen(true);
		} else {
			navigate(`/artist/${song?.artists[0].id}`);
			setIsOpen(false);
		}
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<>
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
							<nav className="flex absolute top-0 left-0 w-full p-2 py-4 justify-between">
								<motion.button
									variants={closeV}
									className="rounded-full bg-primary/50 w-10 h-10 flex justify-center items-center backdrop-blur-md shadow-md shadow-additional/5"
									onClick={() => setIsOpen(false)}
								>
									<IoChevronDown size={24} className="-mb-px text-white" />
								</motion.button>
								<VolumeSlider current={volume} setCurrent={setVolume} />
							</nav>
							<div className="px-6 w-[calc(100vw-24px)]">
								<motion.div
									className="flex justify-center items-center w-64 h-64 mb-8 mx-auto rounded-full shadow-2xl shadow-additional/50"
									variants={albumArtV.bg}
								>
									<motion.img
										draggable="false"
										variants={{
											initial: {
												opacity: 0,
											},
											open: {
												opacity: 1,
												transition: {
													ease: "easeOut",
													rotate: {
														duration: 10,
														repeat: Infinity,
														ease: "linear",
													},
												},
											},
											exit: {
												opacity: 0,
												transition: {
													ease: "easeOut",
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
									<AnimatedText alignment="center">
										<motion.h1
											variants={titleV.artist}
											style={{ textShadow: "0 2px 8px #00000030" }}
											className="text-white font-bold text-3xl text-center"
										>
											{song?.name || "Never Gonna Give You Up"}
										</motion.h1>
									</AnimatedText>
									<AnimatedText alignment="center" callback={handleArtistClick}>
										<motion.h2
											variants={titleV.artist}
											style={{ textShadow: "0 2px 8px #00000030" }}
											className="text-white/75 text-xl text-center mt-2"
										>
											{song?.artists
												? song.artists.map(artist => artist.name).join(", ")
												: "Rick Astley"}
										</motion.h2>
									</AnimatedText>
								</motion.div>
								<motion.div>
									<Progress
										current={songProgress}
										setProgress={setSongProgress}
										controls={controls}
									/>
								</motion.div>
								<motion.div>
									<PlayBackButtons
										isPlaying={isPlaying}
										audioControls={controls}
										setIsOpen={setIsOpen}
									/>
								</motion.div>
							</div>
						</motion.div>
					</motion.div>

					<ActionMenu
						items={song?.artists}
						isOpen={artistListOpen}
						setIsOpen={setArtistListOpen}
						additionalCallback={setIsOpen}
					/>
				</>
			)}
		</AnimatePresence>
	);
};

export default memo(LargePlayer);
