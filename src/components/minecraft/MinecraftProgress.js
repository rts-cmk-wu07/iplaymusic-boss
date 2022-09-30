import { motion } from "framer-motion";
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
				<IoHeart />
				{livesLeft}
			</div>
		</div>
	);
};

export default MinecraftProgress;
