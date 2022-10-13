import { useRef } from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ children, alignment, callback }) => {
	const containerRef = useRef(null);

	const isOverFlowing =
		containerRef?.current?.scrollWidth >
		containerRef?.current?.parentNode.clientWidth;

	// calculate a animation duration based on containerRef width
	const baseAnimationDuration = 3;
	const calculatedDuration = containerRef?.current?.scrollWidth / 75;
	const duration = baseAnimationDuration + calculatedDuration;

	// if end keyframe should be 1 second before the end of the animation, calculate the end keyframe
	const endKeyframe = duration - 1;
	const percentage = endKeyframe / duration;

	return (
		<div
			className={`w-full flex overflow-x-hidden ${
				!callback ? "pointer-events-none" : null
			} ${
				isOverFlowing
					? "justify-start"
					: alignment === "center"
					? "justify-center"
					: alignment === "right"
					? "justify-end"
					: "justify-start"
			}`}
			onClick={callback}
		>
			<motion.div
				// if text is overflowing, animate it to back and forth to create a marquee effect
				animate={
					isOverFlowing
						? {
								y: ["0%", "0%", "100%", "0%"],
								x: ["0%", "-100%", "0%", "0%"],
								transition: {
									duration: duration,
									times: [0, percentage, percentage, 1],
									repeat: Infinity,
									repeatDelay: 1,
								},
						  }
						: {
								y: ["0%", "0%"],
								x: ["0%", "0%"],
								transition: {
									duration: 0,
								},
						  }
				}
				transition={{
					duration: 5,
					repeat: Infinity,
					repeatType: "reverse",
					ease: "linear",
				}}
				className="w-fit flex-shrink-0 whitespace-nowrap overflow-hidden"
				ref={containerRef}
			>
				{children}
			</motion.div>
		</div>
	);
};

export default AnimatedText;
