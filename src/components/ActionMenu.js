import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { IoChevronForward } from "react-icons/io5";

const ActionMenu = ({
	items,
	baseUrl,
	isOpen,
	setIsOpen,
	additionalCallback,
}) => {
	const variants = {
		container: {
			hidden: {
				opacity: 0,
				transition: {
					staggerChildren: 0.1,
				},
			},
			show: {
				opacity: 1,
				transition: {
					staggerChildren: 0.1,
				},
			},
			exit: {
				opacity: 0,
				transition: {
					staggerChildren: 0.1,
				},
			},
		},
		list: {
			hidden: { opacity: 0, y: 100 },
			show: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
			exit: { opacity: 0, y: 50 },
		},
		button: {
			hidden: { opacity: 0, y: 50 },
			show: { opacity: 1, y: 0 },
			exit: { opacity: 0, y: 50 },
		},
		listItem: {
			hidden: { opacity: 0, y: -50 },
			show: { opacity: 1, y: 0 },
			exit: { opacity: 0, y: 50 },
		},
	};
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					variants={variants.container}
					initial="hidden"
					animate="show"
					exit="exit"
					className="fixed z-50 w-screen h-screen top-0 left-0 bg-white/50 dark:bg-secondary/50 backdrop-blur-lg flex flex-col justify-end gap-2 px-4 py-6 dark:text-white"
					onClick={() => setIsOpen(false)}
				>
					<motion.ul
						variants={variants.list}
						className="bg-white dark:bg-secondary rounded-md"
					>
						{items &&
							items.map((item, i) => (
								<motion.li variants={variants.listItem} key={i}>
									<Link
										className={`flex justify-between items-center py-4 px-6 font-medium ${
											i === items.length - 1 ? "border-b-0" : "border-b"
										} border-b-primary/10 dark:border-b-secondary/10`}
										to={baseUrl + item?.id}
										onClick={() => {
											setIsOpen(false);
											setTimeout(() => {
												additionalCallback && additionalCallback(false);
											}, 500);
										}}
									>
										<span>{item.name}</span>
										<IoChevronForward className="opacity-75" />
									</Link>
								</motion.li>
							))}
					</motion.ul>
					<motion.button
						variants={variants.button}
						className="w-full block py-4 bg-white/50 dark:bg-secondary/50 rounded-md"
						onClick={() => setIsOpen(false)}
					>
						Close
					</motion.button>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ActionMenu;
