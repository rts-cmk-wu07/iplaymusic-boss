import { motion } from "framer-motion";
import { useState, useContext } from "react";
import SongContext from "../contexts/SongContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PlayButtons from "./buttons/PlayButtons";

const SongListHeader = ({ playlist }) => {
	const { songData } = useContext(SongContext);
	const isSongPlaying = playlist?.tracks?.items?.some(
		song => song.track.id === songData.id
	);
	const [albumArtIsShown, setAlbumArtIsShown] = useState(isSongPlaying);
	useEffect(() => {
		setAlbumArtIsShown(isSongPlaying);
	}, [songData, isSongPlaying]);
	return (
		<header className="pb-2 mb-6">
			<div className="relative h-48 w-48 flex justify-center items-center">
				{playlist.images && (
					<>
						<motion.div
							initial={{ x: "0%", opacity: 0 }}
							animate={{
								x: albumArtIsShown ? "70%" : "40%",
								opacity: 1,
								transition: {
									delay: 0.5,
									duration: 1,
									type: "spring",
									stiffness: 500,
									damping: 25,
								},
							}}
							className="absolute w-44 h-44 rounded-full shadow-xl"
						>
							<motion.div
								animate={{
									rotate: albumArtIsShown ? ["0deg", "360deg"] : "0deg",
									transition: {
										repeat: Infinity,
										duration: 10,
										ease: "linear",
									},
								}}
								className="relative flex justify-center items-center w-44 h-44 bg-black rounded-full"
								style={{
									boxShadow:
										"inset 0 0 2px 8px rgba(0,0,0,0.8), inset 0 0 2px 14px rgba(0,0,0,0.5), inset 0 0 2px 16px rgba(0,0,0,0.2), inset 0 0 2px 18px rgba(255,255,255,0.025), inset 0 0 2px 20px rgba(255,255,255,0.025), inset 0 0 2px 26px rgb(0,0,0), inset 0 0 2px 30px rgba(255,255,255,0.025), inset 0 0 2px 36px rgb(0,0,0), inset 0 0 2px 38px rgba(0,0,0,0.9), inset 0 0 2px 40px rgba(255,255,255,0.05), inset 0 0 2px 42px rgba(0,0,0,0.75), inset 0 0 2px 44px rgba(255,255,255,0.025), inset 0 0 2px 46px rgba(255,255,255,0.025), inset 0 0 2px 54px rgba(0,0,0,0.8), inset 0 0 2px 56px rgba(0,0,0,0.6), inset 0 0 2px 60px rgba(255,255,255,0.05), inset 0 0 2px 66px rgba(0,0,0,0.95), inset 0 0 2px 68px rgba(255,255,255,0.05), inset 0 0 2px 76px rgba(0, 0, 0, 0.9), inset 0 0 0 80px rgba(255, 255, 255, 0.05)",
								}}
							>
								<img
									src={playlist.images && playlist.images[0].url}
									alt=""
									className="w-12 h-12 object-cover rounded-full"
								/>
								<div className="w-2 h-2 bg-black rounded-full absolute"></div>
							</motion.div>
						</motion.div>
						<motion.img
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							src={playlist.images && playlist.images[0].url}
							alt=""
							className="relative w-48 h-48 object-cover rounded-md shadow-xl"
						/>
					</>
				)}
			</div>
			<section className="mt-4">
				<motion.div
					initial={{ y: "-100%", opacity: 0 }}
					animate={{
						y: "0%",
						opacity: 1,
						transition: { delay: 0.25, duration: 0.5, ease: "easeOut" },
					}}
				>
					<h1 className="heading gradient-text">{playlist.name}</h1>
				</motion.div>
				<p className="text-gray-400 dark:text-gray-600 text-sm">
					By{" "}
					<Link
						className="font-semibold text-primary z-50"
						to={`/user/${playlist?.owner?.id}`}
					>
						{playlist.owner && playlist.owner.display_name}
					</Link>
				</p>
				{playlist.description && (
					<p className="my-4 text-black/75 dark:text-white/75 text-base">
						{playlist.description}
					</p>
				)}
				<div className="flex justify-between items-center text-black/75 dark:text-white/75 text-xs">
					{playlist.tracks && <p>{playlist.tracks.total} songs</p>}
					{playlist.followers && (
						<p>{playlist.followers.total.toLocaleString()} followers</p>
					)}
				</div>
			</section>
			<PlayButtons trackList={playlist?.tracks?.items} />
		</header>
	);
};

export default SongListHeader;
