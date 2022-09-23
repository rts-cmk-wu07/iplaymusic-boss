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
			whileTap={{ scale: 0.8 }}
			transition={{ type: 'spring', stiffness: 500 }}
			onClick={callback}
			className={`rounded-full p-1`}
		>
			{children}
		</motion.button>
	);
};

export default PlayBackButton;
