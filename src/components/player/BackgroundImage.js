import { motion } from "framer-motion";

const BackgroundImage = props => {
	const { src, variants } = props;
	return (
		<motion.img
			variants={variants}
			src={src}
			alt="background image with artist"
			className="w-full h-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
		/>
	);
};

export default BackgroundImage;
