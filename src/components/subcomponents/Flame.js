import { motion } from 'framer-motion';

const Flame = () => {
	return (
		<motion.div className="absolute -right-1">
			<motion.div className="absolute">
				<motion.div
					animate={{
						scale: 1,
						x: [0, -20, -40, -60, -80],
						y: [0, -2, -1, 2, 0],
						opacity: [0, 0.75, 1, 0.5, 0],
					}}
					transition={{
						duration: 2.5,
						repeat: Infinity,
						ease: 'linear',
					}}
					className="w-2 h-2 bg-gradientColors-right rounded-full"
				></motion.div>
			</motion.div>
			<motion.div
				animate={{
					opacity: [1, 0.8, 0.6, 0.95, 1],
					scale: [1, 1.05, 1, 0.9, 1],
					rotate: ['-45deg', '-43deg', '-44deg', '-48deg', '-45deg'],
					transition: { repeat: Infinity, duration: 1.5, ease: 'linear' },
				}}
				className="w-5 h-5 bg-red-600 rounded-tr-[40%] rounded-br-[60%] rounded-bl-[40%] rounded-tl-[2%] -rotate-45 bg-gradient-to-l from-[#EC9F05] to-[#FF4E00]"
			></motion.div>
		</motion.div>
	);
};

export default Flame;
