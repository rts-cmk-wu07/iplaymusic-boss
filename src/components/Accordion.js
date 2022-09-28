import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronDown } from 'react-icons/io5';

const Accordion = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<motion.article className=" border border-primary rounded-md overflow-y-hidden pb-4 my-4">
			<div
				className={`flex items-center justify-between p-4 pb-0 cursor-pointer ${
					isOpen ? 'mb-0' : 'mb-0'
				}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<h3 className="font-bold text-black dark:text-white select-none">
					{title}
				</h3>
				<button
					className="p-1 rounded-full transition-all"
					onClick={() => setIsOpen(!isOpen)}
				>
					<IoChevronDown
						className={`w-4 h-4 text-primary transition-all ${
							isOpen ? 'rotate-180' : 'rotate-0'
						}`}
					/>
				</button>
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{
							opacity: 0,
							height: 0,
							y: 40,
							marginTop: 0,
							scale: 0.95,
						}}
						animate={{
							opacity: 1,
							height: 'auto',
							y: 0,
							marginTop: 8,
							scale: 1,
						}}
						exit={{ opacity: 0, height: 0, y: 40, marginTop: 0, scale: 0.95 }}
						transition={{ duration: 0.25 }}
						className="px-4 text-sm font-medium text-black/75 dark:text-white/75"
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.article>
	);
};

export default Accordion;
