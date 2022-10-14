import { AnimatePresence, motion } from "framer-motion";
import { IoRadio, IoHeart, IoMusicalNote } from "react-icons/io5";

const Breadcrumb = ({ currentIndex, thisIndex, setIndex }) => {
	return (
		<AnimatePresence>
			<motion.button
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{
					opacity: 1,
					scale: 1,
					backgroundColor:
						currentIndex === thisIndex ? "#ffffffff" : "#ffffff00",
					color: currentIndex === thisIndex ? "#FF1168" : "#ffffff",
					transition: {
						opacity: { delay: `0.${thisIndex * 2}` },
						scale: { delay: `0.${thisIndex * 2}` },
					},
				}}
				whileTap={{
					backgroundColor:
						currentIndex === thisIndex ? "#ffffffff" : "#ffffff80",
				}}
				className="border-4 border-white rounded-full w-20 h-20 grid place-items-center"
				onClick={() => setIndex(thisIndex)}
			>
				{thisIndex === 0 ? (
					<IoRadio className="text-4xl" />
				) : thisIndex === 1 ? (
					<motion.div
						animate={{
							scale: currentIndex === thisIndex ? [1, 1.2, 1, 1.2, 1, 1] : 1,
							transition: {
								duration: 1.5,
								repeat: Infinity,
								times: [0, 0.1, 0.2, 0.3, 0.4, 1],
							},
						}}
					>
						<IoHeart className="text-4xl" />
					</motion.div>
				) : (
					<IoMusicalNote className="text-4xl" />
				)}
			</motion.button>
		</AnimatePresence>
	);
};

export default Breadcrumb;
