import { motion } from 'framer-motion';
import { progressV } from '../assets/variants/LargePlayer';

const Progress = ({ current, min, max }) => {
	const maxValue = max || 123;
	const maxValueMinutes = Math.floor(maxValue / 60);
	const maxValueSeconds = maxValue % 60;
	const currentValue = current || 33;
	const currentValueMinutes = Math.floor(currentValue / 60);
	const currentValueSeconds = currentValue % 60;

	const progress = (currentValue / maxValue) * 100;

	return (
		<div className="flex flex-col w-full mt-12">
			<motion.div
				variants={progressV.bar}
				className="w-full h-1 bg-primary/50 rounded-full"
			>
				<motion.div
					initial={{ width: 0 }}
					animate={{ width: `${progress}%`, transition: { duration: 1 } }}
					className="h-full gradient rounded-full shadow-glow shadow-gradientColors-right/50 flex items-center relative"
				>
					<div className="absolute -right-2 w-4 h-4 bg-gradientColors-right rounded-full"></div>
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
