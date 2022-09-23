import { motion } from 'framer-motion';

const PlayBackButton = ({
	children,
	callback,
	variants,
	size,
	initial,
	animate,
}) => {
	return (
		<motion.button
			initial={initial}
			animate={animate}
			variants={variants}
			whileTap={{ scale: 0.75 }}
			transition={{ type: 'spring', stiffness: 500 }}
			onClick={callback}
			className={`rounded-full p-1 ${
				size === 'xl' ? 'w-24 h-24' : null
			} flex justify-center items-center text-white`}
		>
			{children}
		</motion.button>
	);
};

export default PlayBackButton;
