import { AnimatePresence, motion } from "framer-motion";
import { IoHeart } from "react-icons/io5";

const MinecraftProgress = ({ progress, livesLeft }) => {
	// when progress goes up, the bar should go down and vice versa
	const progressValue = 100 - progress;

	return (
		<div
			className="w-full h-12 bg-stone-400 relative"
			style={{
				boxShadow:
					"-4px 0 0 0 rgb(0,0,0), 4px 0 0 0 rgb(0,0,0), 0 -4px 0 0 rgb(0,0,0), 0 4px 0 0 rgb(0,0,0)",
			}}
		>
			<motion.div
				className="h-full gradient"
				animate={{
					width: `${progressValue}%`,
				}}
			/>
			<div
				className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-2"
				style={{
					boxShadow:
						"inset 4px 4px 0 0 rgba(255,255,255,0.5), inset -4px -4px 0 0 rgba(0,0,0, 0.25)",
				}}
			>
				<div className="relative w-4 h-4">
					<AnimatePresence>
						<motion.div
							key={livesLeft}
							initial={{ opacity: 0.5, scale: 0.5 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{
								scale: 1.5,
								opacity: 0,
							}}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							className="absolute top-0 left-0 w-full h-full"
						>
							<IoHeart />
						</motion.div>
					</AnimatePresence>
				</div>
				{livesLeft}
			</div>
		</div>
	);
};

export default MinecraftProgress;
