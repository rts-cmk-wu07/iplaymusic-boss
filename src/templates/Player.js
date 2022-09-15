import { motion } from 'framer-motion';
import { useState } from 'react';
import MiniPlayer from './MiniPlayer';
import LargePlayer from './LargePlayer';

const Player = ({ isPlaying, song }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<motion.section
			layout
			animate={{ borderRadius: isOpen ? '0px' : '8px' }}
			transition={{ duration: 0.5, ease: 'easeInOut' }}
			className={`fixed flex flex-col gradient left-2 right-2 p-1 shadow-lg shadow-[#FF6A00]/50 ${
				isOpen ? 'top-0 bottom-0 left-0 right-0' : 'bottom-20 left-2 right-2'
			}`}
		>
			<LargePlayer isOpen={isOpen} setIsOpen={setIsOpen} song={song} />
			<MiniPlayer isOpen={isOpen} setIsOpen={setIsOpen} song={song} />
		</motion.section>
	);
};

export default Player;
