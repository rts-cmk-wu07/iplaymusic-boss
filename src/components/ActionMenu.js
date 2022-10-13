import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { IoChevronForward } from "react-icons/io5";
import AnimatedText from "./subcomponents/text/AnimatedText";

const ActionMenu = ({
	items,
	isOpen,
	setIsOpen,
	additionalCallback,
	album,
}) => {
	console.log(album);
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
	console.log(album && album);
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					variants={variants.container}
					initial="hidden"
					animate="show"
					exit="exit"
					className="fixed z-[100] w-screen h-screen top-0 left-0 bg-white/50 dark:bg-secondary/50 backdrop-blur-lg flex flex-col justify-end gap-2 px-4 py-6 dark:text-white"
					onClick={() => setIsOpen(false)}
				>
					{album && (
						<motion.div
							variants={variants.list}
							className="flex flex-col items-start gap-4 py-4 px-6 bg-white dark:bg-secondary rounded-md max-w-full"
						>
							<div className="flex items-end gap-2 min-w-0 max-w-full">
								{album?.images[0] ? (
									<img
										src={album?.images[0]?.url}
										alt="album cover"
										className="z-50 w-16 h-16 rounded-md"
									/>
								) : (
									<div className="w-16 h-16 rounded-md bg-slate-500"></div>
								)}

								<AnimatedText>
									<h1 className="text-2xl font-bold whitespace-nowrap text-ellipsis w-full mb-1">
										{album?.name}
									</h1>
								</AnimatedText>
							</div>
							<div className="flex flex-col justify-end items-start">
								<p className="text-base text-black/75 dark:text-white/75">
									{album?.artists?.map((artist, index) => (
										<span key={artist.id}>
											{index ? ", " : ""}
											{artist.name}
										</span>
									))}
								</p>
							</div>
						</motion.div>
					)}
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
										to={`/artist/${item?.id}`}
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
