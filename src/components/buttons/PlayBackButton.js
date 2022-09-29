import { motion } from "framer-motion";

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
			transition={{ type: "spring", stiffness: 500 }}
			onClick={callback}
			className={`p-1 bg-white/0 ${
				size === "xl" ? "w-24 h-24" : size === "lg" ? "w-14 h-14" : null
			} flex justify-center items-center text-white`}
		>
			{children}
		</motion.button>
	);
};

export default PlayBackButton;
