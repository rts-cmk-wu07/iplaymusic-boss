import { motion } from "framer-motion";
import AnimatedText from "../subcomponents/text/AnimatedText";
import { titleV } from "../../assets/variants/LargePlayer";

const LargePlayerTitle = props => {
	const { title, artist, artistCallback } = props;
	return (
		<div>
			<AnimatedText alignment="center">
				<motion.h1
					className="text-3xl font-bold text-white"
					variants={titleV.name}
				>
					{title || "No song playing"}
				</motion.h1>
			</AnimatedText>
			<AnimatedText alignment="center" callback={artistCallback}>
				<motion.h2 className="text-xl text-white/75" variants={titleV.artist}>
					{artist || "No artist"}
				</motion.h2>
			</AnimatedText>
		</div>
	);
};

export default LargePlayerTitle;
