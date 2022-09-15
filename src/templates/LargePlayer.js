import { AnimatePresence, motion } from 'framer-motion';
import { IoChevronDown } from 'react-icons/io5';
import {
	containerV,
	albumArtV,
	titleV,
	controlV,
	progressV,
	closeV,
} from '../assets/variants/LargePlayer';

const LargePlayer = ({ isOpen, setIsOpen, song }) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					variants={containerV}
					initial="initial"
					animate="open"
					exit="exit"
					className="w-full relative"
				>
					<motion.img />
					<motion.div>
						<nav className="flex p-2 py-4">
							<motion.button
								variants={closeV}
								className="p-2 rounded-full"
								onClick={() => setIsOpen(false)}
							>
								<IoChevronDown size={24} />
							</motion.button>
						</nav>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default LargePlayer;
