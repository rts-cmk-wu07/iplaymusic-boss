import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { IoChevronForward } from "react-icons/io5";
import AnimatedText from "./subcomponents/text/AnimatedText";
import { useNavigate } from "react-router-dom";

const ActionMenu = ({
	items,
	isOpen,
	setIsOpen,
	additionalCallback,
	album,
}) => {
	const navigate = useNavigate();
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
		album: {
			hidden: { opacity: 0, y: 100 },
			show: {
				opacity: 1,
				y: 0,
				transition: { delay: 0.25, staggerChildren: 0.2, delayChildren: 0.5 },
			},
			exit: { opacity: 0, y: 50 },
		},
		albumHeader: {
			hidden: { opacity: 0, y: -50 },
			show: {
				opacity: 1,
				y: 0,
				transition: { delay: 0.25, staggerChildren: 0.2 },
			},
			exit: { opacity: 0 },
		},
		albumImage: {
			hidden: { opacity: 0, x: -30 },
			show: { opacity: 1, x: 0 },
			exit: { opacity: 0, x: -30 },
		},
		albumHeaderText: {
			hidden: { opacity: 0, y: 20 },
			show: { opacity: 1, y: 0 },
			exit: { opacity: 0, y: -20 },
		},
		albumArtistList: {
			hidden: { opacity: 0, x: -30 },
			show: { opacity: 1, x: 0 },
			exit: { opacity: 0, x: -30 },
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
					className="fixed z-[100] w-screen h-screen top-0 left-0 bg-white/50 dark:bg-secondary/50 backdrop-blur-lg flex flex-col justify-end gap-2 px-4 py-6 dark:text-white"
					onClick={() => setIsOpen(false)}
				>
					{album && (
						<motion.div
							variants={variants.album}
							className="flex flex-col items-start gap-4 py-4 px-6 bg-white dark:bg-secondary rounded-md max-w-full"
							onClick={() => navigate(`/album/${album?.id}`)}
						>
							<motion.div
								className="flex items-end gap-2 min-w-0 max-w-full"
								variants={variants.albumHeader}
							>
								{album?.images[0] ? (
									<motion.img
										src={album?.images[0]?.url}
										alt="album cover"
										className="z-50 w-16 h-16 rounded-md"
										variants={variants.albumImage}
									/>
								) : (
									<div className="w-16 h-16 rounded-md bg-slate-500"></div>
								)}
								<motion.div
									className="flex flex-col min-w-0 gap-1"
									variants={variants.albumHeaderText}
								>
									<p className="text-xs opacity-50 capitalize font-semibold">
										{album?.type}
									</p>
									<AnimatedText>
										<h1 className="text-2xl font-bold whitespace-nowrap text-ellipsis w-full mb-1">
											{album?.name}
										</h1>
									</AnimatedText>
								</motion.div>
							</motion.div>
							<motion.div
								className="flex flex-col justify-end items-start min-w-0"
								variants={variants.albumArtistList}
							>
								<AnimatedText>
									<p className="text-sm text-black/75 dark:text-white/75">
										{album?.artists?.map((artist, index) => (
											<span key={artist.id}>
												{index ? ", " : ""}
												{artist.name}
											</span>
										))}
									</p>
								</AnimatedText>
							</motion.div>
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
