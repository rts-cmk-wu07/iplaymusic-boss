import { motion, AnimatePresence } from "framer-motion";

const Screen2 = () => {
	return (
		<div>
			<h1 className="text-3xl font-bold">
				<AnimatePresence>
					<motion.span
						className="inline-block"
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
					>
						No
					</motion.span>
				</AnimatePresence>{" "}
				<AnimatePresence>
					<motion.span
						className="inline-block"
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
					>
						Music
					</motion.span>
				</AnimatePresence>{" "}
				<br />
				<AnimatePresence>
					<motion.span
						className="inline-block"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
					>
						No
					</motion.span>
				</AnimatePresence>{" "}
				<AnimatePresence>
					<motion.span
						className="inline-block"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8 }}
					>
						Life
					</motion.span>
				</AnimatePresence>
			</h1>
			<AnimatePresence>
				<motion.p
					className="text-lg mt-4"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.2 }}
				>
					We believe in the power of music to bring people together.
				</motion.p>
			</AnimatePresence>
		</div>
	);
};

export default Screen2;
