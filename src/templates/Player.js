import { AnimatePresence, motion } from "framer-motion";
import { useState, memo, useRef, useContext } from "react";
import MiniPlayer from "./MiniPlayer";
import LargePlayer from "./LargePlayer";
import useFetch from "../hooks/useFetch";
import ReactAudioPlayer from "react-audio-player";
import { useEffect } from "react";
import SongContext from "../contexts/SongContext";
import useControls from "../hooks/useControls";

const Player = () => {
	const { songData, setSongData } = useContext(SongContext);
	const { nextSong } = useControls();
	const [isPlaying, setIsPlaying] = useState(false);
	const { data } = useFetch(
		"https://api.spotify.com/v1/tracks/4cOdK2wGLETKBW3PvgPWqT"
	);

	const localStoredVolume = localStorage.getItem("volume");
	const convertedVolume = parseInt(localStoredVolume * 100) / 100;
	const [volume, setVolume] = useState(
		convertedVolume === 0 ? 0 : convertedVolume || 0.5
	);

	const [song, setSong] = useState(
		songData.preview_url === null ? data : songData
	);

	/* eslint-disable */
	useEffect(() => {
		setSong(songData.preview_url === null ? data : songData);
		setIsPlaying(true);
	}, [songData]);
	/* eslint-enable */

	const audioPlayer = useRef();

	const [isOpen, setIsOpen] = useState(false);
	const audioUrl = song?.preview_url;

	const [dragStart, setDragStart] = useState(0);
	const [dragCurrent, setDragCurrent] = useState(0);
	const [paddingTop, setPaddingTop] = useState(isOpen ? "0px" : "4px");
	const [paddingBottom, setPaddingBottom] = useState(isOpen ? "0px" : "4px");

	const [songProgress, setSongProgress] = useState(0);

	useEffect(() => {
		if (isOpen) {
			setPaddingTop("0px");
			setPaddingBottom("0px");
		} else {
			setPaddingTop("4px");
			setPaddingBottom("4px");
		}
	}, [isOpen]);

	const [shouldDrag, setShouldDrag] = useState(true);

	return (
		<AnimatePresence>
			{Object.keys(song).length > 0 && (
				<motion.section
					initial={{ y: 200, opacity: 0 }}
					animate={{
						y: 0,
						opacity: 1,
						borderRadius: isOpen ? "0px" : "8px",
						paddingTop: paddingTop,
						paddingBottom: paddingBottom,
						transition: {
							type: "spring",
							stiffness: 500,
							damping: 15,
						},
					}}
					exit={{ y: 200, opacity: 0 }}
					drag={shouldDrag ? "y" : false}
					dragConstraints={{ top: 0, bottom: 0 }}
					onDragStart={(e, info) => {
						setDragStart(info.point.y);
					}}
					onDrag={(e, info) => {
						const hasTargetClassName = e.target.className;
						if (typeof hasTargetClassName === "string") {
							if (e.target.className.includes("slider")) {
								setShouldDrag(false);
							} else {
								setShouldDrag(true);
								setPaddingTop(
									(dragStart - dragCurrent) / 5 < 4
										? "4px"
										: `${parseInt((dragStart - dragCurrent) / 5)}px`
								);
								setPaddingBottom(
									(dragStart - dragCurrent) / 10 < 4
										? "4px"
										: `${parseInt((dragStart - dragCurrent) / 10)}px`
								);
							}
						}
						setDragCurrent(info.point.y);
					}}
					onDragEnd={(event, info) => {
						setShouldDrag(true);
						if (!isOpen) {
							setPaddingTop("4px");
							setPaddingBottom("4px");
						} else {
							setPaddingTop("0px");
							setPaddingBottom("0px");
						}
						if (dragCurrent - dragStart > 200 && !isOpen) {
							setSongData({});
						} else if (info.point.y - dragStart > 300) {
							setIsOpen(false);
						} else if (dragStart - info.point.y > 300) {
							setIsOpen(true);
							setPaddingTop("0px");
							setPaddingBottom("0px");
						}
					}}
					dragTransition={{
						bounceStiffness: 400,
						bounceDamping: 15,
						power: 2.5,
					}}
					layout
					transition={{
						duration: 0.3,
						ease: "easeInOut",
						paddingTop: {
							type: "spring",
							stiffness: 150,
							damping: 15,
						},
						paddingBottom: { type: "spring", stiffness: 150, damping: 15 },
					}}
					className={`fixed flex flex-col gradient shadow-lg rounded-lg shadow-[#FF6A00]/50 z-30 ${
						isOpen
							? "top-0 bottom-0 left-0 right-0"
							: "bottom-20 left-2 right-2 p-1"
					}`}
				>
					<ReactAudioPlayer
						src={audioUrl}
						ref={audioPlayer}
						autoPlay={isPlaying}
						onPause={() => setIsPlaying(false)}
						onPlay={() => setIsPlaying(true)}
						onEnded={() => nextSong(setIsOpen)}
						listenInterval={100}
						onListen={e => setSongProgress(e)}
						volume={volume}
					/>
					<LargePlayer
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						isPlaying={isPlaying}
						setIsPlaying={setIsPlaying}
						song={song}
						controls={audioPlayer.current?.audioEl.current}
						songProgress={songProgress}
						setSongProgress={setSongProgress}
						volume={volume}
						setVolume={setVolume}
					/>
					<MiniPlayer
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						isPlaying={isPlaying}
						setIsPlaying={setIsPlaying}
						song={song}
						controls={audioPlayer.current?.audioEl.current}
					/>
				</motion.section>
			)}
		</AnimatePresence>
	);
};

export default memo(Player);
