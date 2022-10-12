import { AnimatePresence, motion } from "framer-motion";

const Screen1 = () => {
	return (
		<div>
			<h1 className="text-3xl font-bold">
				<AnimatePresence>
					<motion.span
						className="inline-block"
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8 }}
					>
						Where
					</motion.span>
				</AnimatePresence>{" "}
				<AnimatePresence>
					<motion.span
						className="inline-block"
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1 }}
					>
						Words
					</motion.span>
				</AnimatePresence>{" "}
				<AnimatePresence>
					<motion.span
						className="inline-block"
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.2 }}
					>
						Fail
					</motion.span>
				</AnimatePresence>
				<AnimatePresence>
					<motion.span
						className="inline-block"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.35 }}
					>
						.
					</motion.span>
				</AnimatePresence>
				<br />
				<AnimatePresence>
					<motion.span
						className="inline-block"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 1.5 }}
					>
						Music
					</motion.span>
				</AnimatePresence>{" "}
				<AnimatePresence>
					<motion.span
						className="inline-flex gap-1"
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 1.7 }}
					>
						Speaks
						<div className="relative w-[1em] h-[1em] rotate-90 -ml-3 mt-1">
							<AnimatePresence>
								<motion.div
									className="absolute w-[1em] h-[1em] top-0 left-0 flex"
									initial={{ y: 10, opacity: 0 }}
									animate={{
										y: -2,
										opacity: 1,
										transition: { delay: 2.1 },
									}}
								>
									<svg
										fill="currentColor"
										viewBox="0 0 512 512"
										height="1em"
										width="1em"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M462 175.86a309 309 0 00-411.44 0 21 21 0 1028 31.29 267 267 0 01355.43 0 21 21 0 0028-31.31z"></path>
									</svg>
								</motion.div>
							</AnimatePresence>
							<AnimatePresence>
								<motion.div
									className="absolute w-[1em] h-[1em] top-0 left-0"
									initial={{ y: 10, opacity: 0 }}
									animate={{
										y: 0,
										opacity: 1,
										transition: {
											delay: 1.9,
										},
									}}
								>
									<motion.svg
										fill="currentColor"
										viewBox="0 0 512 512"
										height="1em"
										width="1em"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M256.28 183.7a221.47 221.47 0 00-151.8 59.92 21 21 0 1028.68 30.67 180.28 180.28 0 01246.24 0 21 21 0 1028.68-30.67 221.47 221.47 0 00-151.8-59.92z"></path>
									</motion.svg>
								</motion.div>
							</AnimatePresence>
						</div>
					</motion.span>
				</AnimatePresence>
			</h1>
			<AnimatePresence>
				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: { delay: 2.3, duration: 0.5, ease: "easeOut" },
					}}
					className="text-lg mt-4"
				>
					We are a community of music lovers and creators. We are here to share,
					discover, and discuss music.
				</motion.p>
			</AnimatePresence>
		</div>
	);
};

export default Screen1;
