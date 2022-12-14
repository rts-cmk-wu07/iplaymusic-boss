import {
	IoVolumeHigh,
	IoVolumeLow,
	IoVolumeMedium,
	IoVolumeOff,
} from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const VolumeSlider = ({ current, setCurrent }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [startOffset, setStartOffset] = useState(0);
	const keys = current === 0 ? 0 : current < 0.5 ? 1 : current < 0.75 ? 2 : 3;

	const [stretch, setStretch] = useState(1);

	useEffect(() => {
		// check if clicked outside component and close if so
		const handleClickOutside = e => {
			if (e.target.closest(".volume")) return;
			setIsOpen(false);
		};
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	const saveVolume = volume => {
		localStorage.setItem("volume", volume >= 1 ? 1 : volume <= 0 ? 0 : volume);
	};

	return (
		<motion.div
			animate={{
				width: isOpen ? 64 : 40,
				height: isOpen ? 280 : 40,
				borderRadius: 32,
				boxShadow: isOpen
					? "0 8px 24px 0 rgba(0, 0, 0, 0.15)"
					: "0 8px 24px 0 rgba(0, 0, 0, 0.05)",
				transition: {
					duration: 0.3,
					type: "spring",
					stiffness: 200,
					damping: 20,
				},
			}}
			className={`volume relative z-50`}
		>
			<motion.div
				animate={{
					width: isOpen ? 64 * (1 / stretch) : 40,
					height: isOpen ? 280 * stretch : 40,
					x: "-50%",
					y: "-50%",
					borderRadius: 32,
					// scaleX: 1 / stretch,
					// scaleY: stretch,
					boxShadow: isOpen
						? "0 8px 24px 0 rgba(0, 0, 0, 0.15)"
						: "0 8px 24px 0 rgba(0, 0, 0, 0.05)",
					transition: {
						duration: 0.3,
					},
				}}
				className={`volume absolute top-1/2 left-1/2 z-50 flex flex-col items-center rounded-full bg-primary/25 backdrop-blur-md overflow-hidden justify-end`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<AnimatePresence>
					<motion.button
						key={keys}
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							width: isOpen ? 64 : 40,
							height: isOpen ? 64 : 40,
							transition: {
								width: {
									delay: 0.2,
								},
							},
						}}
						exit={{ opacity: 0 }}
						className="absolute text-white flex justify-center items-center top-0"
					>
						{current === 0 ? (
							<IoVolumeOff
								size={isOpen ? 32 : 24}
								className="transition-all -ml-1"
							/>
						) : current < 0.5 ? (
							<IoVolumeLow size={isOpen ? 32 : 24} className="transition-all" />
						) : current < 0.75 ? (
							<IoVolumeMedium
								size={isOpen ? 32 : 24}
								className="transition-all"
							/>
						) : (
							<IoVolumeHigh
								size={isOpen ? 32 : 24}
								className="transition-all"
							/>
						)}
					</motion.button>
				</AnimatePresence>
				<AnimatePresence>
					{isOpen && (
						<>
							<motion.div
								className="absolute w-full h-full bg-transparent"
								drag="y"
								dragConstraints={{ top: 0, bottom: 0 }}
								dragElastic={0.1}
								dragMomentum={true}
								onDragStart={(e, info) => {
									setStartOffset(current);
								}}
								onDrag={(e, info) => {
									const maxStretch = 1.1;
									if (startOffset - info.offset.y / 280 < 0) {
										setCurrent(0);

										// calculate how much under 0 the volume is
										const underZero = (startOffset - info.offset.y / 280) * -1;
										// calculate how much to stretch the volume bar
										const stretch = 1 + underZero * maxStretch;
										setStretch(stretch < maxStretch ? stretch : maxStretch);
									} else if (startOffset - info.offset.y / 280 > 1) {
										setCurrent(1);
										// calculate how much over 1 the volume is
										const overOne = startOffset - info.offset.y / 280 - 1;
										// calculate how much to stretch the volume bar
										const stretch = 1 + overOne * maxStretch;
										setStretch(stretch < maxStretch ? stretch : maxStretch);
									} else {
										setCurrent(startOffset - info.offset.y / 280);
										setStretch(1);
									}
								}}
								onDragEnd={(e, info) => {
									saveVolume(startOffset - info.offset.y / 280);
									setStretch(1);
								}}
							/>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{
									height: `${current * 100}%`,
									opacity: 1,
									transition: {
										opacity: {
											delay: 0.2,
											ease: "easeOut",
										},
										height: {
											type: "spring",
											stiffness: 200,
											damping: 20,
											delay: 0,
										},
									},
								}}
								exit={{ opacity: 0, height: "0%" }}
								className="w-full bg-gradient-to-tr from-gradientColors-left to-gradientColors-right"
							></motion.div>
						</>
					)}
				</AnimatePresence>
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								transition: {
									opacity: {
										delay: 0.5,
										ease: "easeOut",
									},
								},
							}}
							exit={{ opacity: 0 }}
							className="absolute w-16 h-16 bg-transparent flex justify-center items-center font-semibold text-white/75 text-lg pointer-events-none -rotate-90 mb-2"
						>
							{parseInt(current * 100) + "%"}
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</motion.div>
	);
};

export default VolumeSlider;
