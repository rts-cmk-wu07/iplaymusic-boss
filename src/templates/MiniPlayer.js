import { AnimatePresence, motion } from "framer-motion";
import { IoPlayCircle, IoPlayForward, IoPauseCircle } from "react-icons/io5";
import PlayBackButton from "../components/buttons/PlayBackButton";
import AlbumArt from "../components/subcomponents/AlbumArt";
import useControls from "../hooks/useControls";

const MiniPlayer = ({ isOpen, setIsOpen, song, controls, isPlaying }) => {
	const { nextSong } = useControls();
	return (
		<AnimatePresence>
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
						widthHeight="64px"
					/>
					<motion.div className="min-w-0" onClick={() => setIsOpen(true)}>
						<h2 className="text-white font-bold w-full whitespace-nowrap overflow-hidden text-ellipsis">
							{song?.name || "Never gonna let you down"}
						</h2>
						<p className="text-sm text-white opacity-75 whitespace-nowrap overflow-hidden text-ellipsis">
							{song?.artists
								? song.artists.map(artist => artist.name).join(", ")
								: "Rick Astley"}
						</p>
					</motion.div>
					<motion.div
						className={`flex gap-1 text-white items-center ${
							!isOpen && "ml-auto"
						} mr-2`}
					>
						<PlayBackButton
							initial={{ x: 8 }}
							animate={{ x: 0, transition: { delay: 0.7 } }}
							callback={() => (isPlaying ? controls.pause() : controls.play())}
						>
							{isPlaying ? (
								<IoPauseCircle className="w-12 h-12" />
							) : (
								<IoPlayCircle className="w-12 h-12" />
							)}
						</PlayBackButton>
						<PlayBackButton
							initial={{ opacity: 0, x: -16 }}
							animate={{ opacity: 1, x: 0, transition: { delay: 0.75 } }}
							callback={() => nextSong()}
						>
							<IoPlayForward size={24} />
						</PlayBackButton>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default MiniPlayer;
