import { motion } from 'framer-motion';
import { progressV } from '../assets/variants/LargePlayer';
import { useRef } from 'react';

const Progress = ({ current, setProgress, controls }) => {
	const maxValue = 30;
	const maxValueMinutes = Math.floor(maxValue / 60);
	const maxValueSeconds = maxValue % 60;
	const currentValue = current || 0;
	const currentValueMinutes = Math.floor(currentValue / 60);
	const currentValueSeconds = Math.floor(currentValue % 60);

	const progress = (currentValue / maxValue) * 100;

	const containerRef = useRef();
	console.log(containerRef?.current?.offsetWidth);
	const progressRef = useRef();
	console.log(progressRef?.current?.offsetWidth);
	const progressButton = useRef();

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
						transition: { duration: 0.1, ease: 'linear' },
					}}
					className="h-full gradient rounded-full shadow-glow shadow-gradientColors-right/50 flex items-center relative"
				>
					<motion.div
						ref={progressButton}
						drag="x"
						whileDrag={{
							scale: 2.5,
							transition: {
								type: 'spring',
								stiffness: 500,
								damping: 30,
								right: '-2px',
							},
						}}
						animate={{
							scale: 1,
							transition: { type: 'spring', stiffness: 500, damping: 15 },
						}}
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={0}
						onDragStart={() => controls.pause()}
						onDrag={(e, info) => {
							// const newCurrent = (info.point.x / 400) * maxValue;
							const newCurrent =
								((info.point.x - 35) / containerRef.current.offsetWidth) *
								maxValue;
							console.log(newCurrent);
							if (newCurrent < 0) {
								setProgress(0);
							} else if (newCurrent > maxValue) {
								setProgress(maxValue);
							} else {
								setProgress(newCurrent);
							}
						}}
						onDragEnd={(e, info) => {
							controls.currentTime = (info.point.x / 400) * maxValue;
							controls.play();
						}}
						className="absolute -right-2 w-4 h-4 bg-gradientColors-right rounded-full"
					></motion.div>
				</motion.div>
			</motion.div>
			<motion.div
				variants={progressV.time}
				className="flex justify-between text-white/50 text-sm mt-2"
			>
				<span>
					{currentValueMinutes < 10
						? `0${currentValueMinutes}`
						: currentValueMinutes}
					:
					{currentValueSeconds < 10
						? `0${currentValueSeconds}`
						: currentValueSeconds}
				</span>
				<span>
					{maxValueMinutes < 10 ? `0${maxValueMinutes}` : maxValueMinutes}:
					{maxValueSeconds < 10 ? `0${maxValueSeconds}` : maxValueSeconds}
				</span>
			</motion.div>
		</div>
	);
};

export default Progress;
