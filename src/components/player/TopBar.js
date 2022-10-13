import { IoChevronDown } from "react-icons/io5";
import VolumeSlider from "./VolumeSlider";
import { motion } from "framer-motion";

const TopBar = props => {
	const { variants, setIsOpen, volume, setVolume } = props;
	return (
		<nav className="flex absolute top-0 left-0 w-full p-2 py-4 justify-between">
			<motion.button
				variants={variants}
				className="rounded-full bg-primary/50 w-10 h-10 flex justify-center items-center backdrop-blur-md shadow-md shadow-additional/5"
				onClick={() => setIsOpen(false)}
			>
				<IoChevronDown size={24} className="-mb-px text-white" />
			</motion.button>
			<VolumeSlider current={volume} setCurrent={setVolume} />
		</nav>
	);
};

export default TopBar;
