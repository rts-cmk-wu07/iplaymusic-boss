import { AnimatePresence, motion } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";
import {
	containerV,
	albumArtV,
	titleV,
	closeV,
	imgV,
} from "../assets/variants/LargePlayer";
import Progress from "../components/player/Progress";
import useFetch from "../hooks/useFetch";
import PlayBackButtons from "../components/buttons/PlayBackButtons";
import AnimatedText from "../components/subcomponents/text/AnimatedText";
import { useContext } from "react";
import VolumeSlider from "../components/player/VolumeSlider";
import { memo } from "react";
import ActionContext from "../contexts/ActionContext";
import BackgroundImage from "../components/player/BackgroundImage";
import TopBar from "../components/player/TopBar";
import LargeImage from "../components/player/LargeImage";
import LargePlayerTitle from "../components/player/LargePlayerTitle";

const LargePlayer = props => {
	const {
		isOpen,
		setIsOpen,
		song,
		isPlaying,
		controls,
		songProgress,
		setSongProgress,
		volume,
		setVolume,
	} = props;
	const { items, open, album } = useContext(ActionContext);
	const { data } = useFetch(
		`https://api.spotify.com/v1/artists/${song?.artists[0].id}/`
	);

	const handleArtistClick = () => {
		open.setActionMenuOpen(true);
		items.setActionMenuItems(song?.artists);
		album.setActionAlbum(song?.album);
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
						{/* Background image showing the artist if possible, else will show album cover */}
						<BackgroundImage
							src={data?.images[0]?.url || song?.album?.images[0]?.url || ""}
							variants={imgV}
						/>

						<motion.div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-additional/50">
							<TopBar
								variants={closeV}
								setIsOpen={setIsOpen}
								volume={volume}
								setVolume={setVolume}
							/>
							<div className="px-6 w-[calc(100vw-24px)]">
								<LargeImage
									src={song?.album.images[0].url}
									isPlaying={isPlaying}
								/>
								<LargePlayerTitle
									title={song?.name}
									artist={song.artists.map(artist => artist.name).join(", ")}
									callback={handleArtistClick}
								/>
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
				</>
			)}
		</AnimatePresence>
	);
};

export default memo(LargePlayer);
