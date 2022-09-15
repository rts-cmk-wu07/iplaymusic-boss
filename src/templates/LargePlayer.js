import { AnimatePresence, motion } from 'framer-motion';
import { IoChevronDown } from 'react-icons/io5';
import {
	containerV,
	albumArtV,
	titleV,
	controlV,
	progressV,
	closeV,
	imgV,
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
					className="w-full h-full overflow-hidden relative"
				>
					<motion.img
						variants={imgV}
						src="https://picsum.photos/1920/1080"
						className="w-full h-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
					/>

					<motion.div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
						<nav className="flex absolute top-0 left-0 w-full p-2 py-4">
							<motion.button
								variants={closeV}
								className="p-2 rounded-full"
								onClick={() => setIsOpen(false)}
							>
								<IoChevronDown size={24} />
							</motion.button>
						</nav>
						<div>
							<motion.div
								variants={albumArtV}
								className="flex justify-center items-center w-full h-64"
							>
								<img
									src="https://picsum.photos/200/200"
									alt="album art"
									className="h-48 w-48 rounded-full shadow-2xl shadow-additional/50"
								/>
							</motion.div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default LargePlayer;
