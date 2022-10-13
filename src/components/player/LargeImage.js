import { motion } from "framer-motion";
import { albumArtV } from "../../assets/variants/LargePlayer";

const LargeImage = props => {
	const { isPlaying, src } = props;
	const { bg, art } = albumArtV;
	return (
		<motion.div
			variants={bg}
			className="flex justify-center items-center w-64 h-64 mb-8 mx-auto rounded-full shadow-2xl shadow-additional/50"
		>
			<motion.img
				draggable="false"
				src={src}
				alt="album cover"
				className="h-64 w-64 rounded-full user-select-none user-drag-none"
				variants={art}
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
			/>
		</motion.div>
	);
};

export default LargeImage;
