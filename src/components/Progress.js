import { motion } from "framer-motion";
import { progressV } from "../assets/variants/LargePlayer";
import { useRef, useState, useEffect } from "react";

const Progress = ({ current, setProgress, controls }) => {
	const maxValue = 30;
	const maxValueMinutes = Math.floor(maxValue / 60);
	const maxValueSeconds = maxValue % 60;
	const currentValue = current || 0;
	const currentValueMinutes = Math.floor(currentValue / 60);
	const currentValueSeconds = Math.floor(currentValue % 60);

	const progress = (currentValue / maxValue) * 100;

	const containerRef = useRef();
	const progressRef = useRef();
	const progressButton = useRef();

	const [percentageDragged, setPercentageDragged] = useState(0);

	const [closeToLeftEdge, setCloseToLeftEdge] = useState(false);
	const [closeToRightEdge, setCloseToRightEdge] = useState(false);
	const [isDragging, setIsDragging] = useState(false);

	// useEffect that checks if the progress bar is close to the left or right edge
	// and sets the state accordingly
	useEffect(() => {
		if (percentageDragged * 100 < 20) {
			setCloseToLeftEdge(true);
		} else {
			setCloseToLeftEdge(false);
		}

		if (percentageDragged * 100 > 80) {
			setCloseToRightEdge(true);
		} else {
			setCloseToRightEdge(false);
		}
	}, [percentageDragged]);

	return (
		<div className="flex flex-col w-full mt-12">
			<motion.div
				ref={containerRef}
				variants={progressV.bar}
				className="w-full h-1 bg-primary/50 rounded-full"
			>
				<motion.div
					ref={progressRef}
					initial={{ width: 4 }}
					animate={{
						width: `${progress}%`,
						transition: { duration: 0.1, ease: "linear" },
					}}
					className="h-full gradient rounded-full shadow-glow shadow-gradientColors-right/50 flex items-center relative"
				>
					<motion.div
						ref={progressButton}
						drag="x"
						whileDrag={{
							scale: 2.5,
							transition: {
								type: "spring",
								stiffness: 500,
								damping: 30,
								right: "-2px",
							},
						}}
						animate={{
							scale: 1,
							transition: { type: "spring", stiffness: 500, damping: 15 },
						}}
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={0}
						onDragStart={() => controls.pause()}
						onDrag={(e, info) => {
							setIsDragging(true);
							setPercentageDragged(
								(info.point.x - 35) / containerRef.current.offsetWidth
							);

							const newCurrent =
								((info.point.x - 35) / containerRef.current.offsetWidth) *
								maxValue;
							if (newCurrent < 0) {
								setProgress(0);
							} else if (newCurrent > maxValue) {
								setProgress(maxValue);
							} else {
								setProgress(newCurrent);
							}
						}}
						onDragEnd={(e, info) => {
							setIsDragging(false);
							controls.currentTime =
								((info.point.x - 35) / containerRef.current.offsetWidth) *
								maxValue;
							controls.play();
						}}
						dragPropagation={false}
						className="slider absolute -right-2 w-4 h-4 bg-gradientColors-right rounded-full"
					></motion.div>
				</motion.div>
			</motion.div>
			<motion.div
				variants={progressV.time}
				className="flex justify-between text-white/50 text-sm mt-2"
			>
				<motion.span
					className="flex"
					animate={{
						y: closeToLeftEdge && isDragging ? 16 : 0,
						transition: { delay: 0.1, duration: 0.25, ease: "easeInOut" },
					}}
				>
					{currentValueMinutes < 10
						? `0${currentValueMinutes}`
						: currentValueMinutes}
					:
					{currentValueSeconds < 10
						? `0${currentValueSeconds}`
						: currentValueSeconds}
				</motion.span>
				<motion.span
					className="flex"
					animate={{
						y: closeToRightEdge && isDragging ? 16 : 0,
						transition: { delay: 0.1, duration: 0.25, ease: "easeInOut" },
					}}
				>
					{maxValueMinutes < 10 ? `0${maxValueMinutes}` : maxValueMinutes}:
					{maxValueSeconds < 10 ? `0${maxValueSeconds}` : maxValueSeconds}
				</motion.span>
			</motion.div>
		</div>
	);
};

export default Progress;
