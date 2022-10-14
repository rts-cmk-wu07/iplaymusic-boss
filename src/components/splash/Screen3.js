import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { IoHeartOutline, IoMusicalNotesOutline } from "react-icons/io5";

const SwappableText = ({ text, icon, index }) => {
	const [showIcon, setShowIcon] = useState(Math.random() > 0.8 ? true : false);
	// at random repeating intervals, show the icon instead of the text, and vice versa
	const [randomInterval, setRandomInterval] = useState(
		Math.floor(Math.random() * 15000) + 2000
	);
	useEffect(() => {
		const interval = setTimeout(() => {
			setShowIcon(prev => !prev);
			setRandomInterval(Math.floor(Math.random() * 15000) + 2000);
		}, randomInterval);
		return () => clearInterval(interval);
	}, [randomInterval]);

	return (
		<AnimatePresence>
			<motion.span
				className="inline-flex"
				initial={{ opacity: 0, x: -30 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: `0.${index * 2}` }}
				onClick={() => setShowIcon(!showIcon)}
			>
				<AnimatePresence>
					{showIcon ? (
						<motion.span
							initial={{ width: 0, opacity: 0 }}
							animate={{ width: "fit-content", opacity: 1 }}
							exit={{ width: 0, opacity: 0 }}
							className="inline-flex items-center gap-2"
						>
							{icon}
						</motion.span>
					) : (
						<motion.span
							initial={{ width: 0, opacity: 0 }}
							animate={{ width: "fit-content", opacity: 1 }}
							exit={{ width: 0, opacity: 0 }}
							className="inline-flex items-center gap-2"
						>
							{text}
						</motion.span>
					)}
				</AnimatePresence>
				{index < 2 && !showIcon && ","}
			</motion.span>
		</AnimatePresence>
	);
};

const PeaceIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="48px"
		viewBox="0 0 700 700"
		width="48px"
		className="inline-block -mb-2"
	>
		<path
			fill="currentColor"
			d="m462.58 254.27 33.84-178.76c4.043-21.352-9.9023-41.984-31.078-45.992l-4.3359-.81641c-10.305-1.9531-20.777.25391-29.5 6.1953-8.7266 5.9453-14.598 14.895-16.547 25.195l-25.211 133.14-5.293 27.758-33.184-161.19c-4.3789-21.285-25.121-35.066-46.238-30.723l-4.3164.89062c-10.27 2.1172-19.102 8.0977-24.871 16.855-5.7695 8.7578-7.7773 19.234-5.6406 29.629l25.609 119c-1.0938-.09375-2.1914-.15234-3.3047-.15234h-4.4062c-18.988 0-34.867 13.551-38.477 31.477-3.7695-1.2109-7.7852-1.8633-11.949-1.8633h-4.4141c-21.645 0-39.25 17.605-39.25 39.25v113.95c0 .035156.003906.066406.003906.09375 0 .035156-.003906.0625-.003906.09375 0 84.465 83.41 152.48 152.48 152.48 84.078 0 152.48-68.398 152.48-152.48v-73.297c0-.45312-.52734-36.07-36.387-50.742zm-45.105-55.777 25.211-133.16c.54688-2.8906 2.2227-5.4219 4.7109-7.1172 2.4922-1.6953 5.4531-2.3359 8.3477-1.7812l4.3359.81641c5.8867 1.1133 9.7383 6.9453 8.5898 12.996l-33.684 177.96c-.66797-.09375-1.3398-.16406-2.0273-.16406h-24.93zm-118.05-136.13c1.6172-2.457 4.0977-4.1367 6.9844-4.7305l4.3164-.89062c5.8672-1.2109 11.648 2.7227 12.891 8.7578l37.574 182.55h-25.172l-38.18-177.41c-.59766-2.8789-.03125-5.8203 1.5859-8.2773zm-11.324 161.18h4.4062c5.9883 0 10.859 5.0117 10.859 11.172v47.207.027344 45.594c0 6.0742-4.9453 11.02-11.016 11.02h-4.4141c-6.043 0-10.961-4.8906-11.008-10.922l.15234-93.09c0-6.0703 4.9453-11.008 11.02-11.008zm-65.855 40.621c0-6.0742 4.9453-11.016 11.02-11.016h4.4141c6.0742 0 11.016 4.9375 11.016 11.016v63.379c0 6.0742-4.9453 11.02-11.016 11.02h-4.4141c-6.0742 0-11.016-4.9453-11.016-11.02v-29.605l.003906-33.773zm248.48 114.16c0 68.512-55.738 124.24-124.24 124.24-26.566 0-58.207-14.078-82.57-36.746-26.867-24.992-41.668-56.066-41.668-87.5 0-.035156-.003906-.066406-.003906-.09375 0-.035156.003906-.0625.003906-.09375v-12.914c3.5 1.0234 7.1914 1.5859 11.016 1.5859h4.4141c9.5547 0 18.316-3.4375 25.133-9.1328 6.8164 5.6953 15.578 9.1328 25.133 9.1328h4.4141c18.969 0 34.832-13.523 38.465-31.434.5-1.4453.78516-2.9961.78516-4.6094v-18.723c7.5938 7.375 16.406 13.031 26 16.801-5.4375 4.0938-10.562 8.6797-15.277 13.797-21.039 22.848-32.625 53.688-32.625 86.828 0 7.7969 6.3242 14.117 14.117 14.117 7.7969 0 14.117-6.3242 14.117-14.117 0-54.258 38.227-95.176 88.91-95.176 7.7969 0 14.117-6.3242 14.117-14.117 0-7.7969-6.3242-14.117-14.117-14.117h-40.254c-24.102 0-39.742-15.484-46.316-29.766h86.574c40.777 0 43.719 23.895 43.883 28.863l-.003906 73.172z"
		/>
	</svg>
);

const Screen3 = () => {
	return (
		<div>
			<h1 className="text-3xl font-bold flex items-center gap-3 leading-[3.25rem] flex-wrap justify-center gap-y-0">
				<SwappableText text="Peace" index={0} icon={<PeaceIcon />} />
				<SwappableText
					text="Love"
					index={1}
					icon={<IoHeartOutline size={40} />}
				/>
				<SwappableText
					text="Music"
					index={2}
					icon={<IoMusicalNotesOutline size={40} />}
				/>
			</h1>
			<AnimatePresence>
				<motion.p
					className="text-lg mt-4"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.2 }}
				>
					Music speaks to the soul, and the soul speaks to the music.
				</motion.p>
			</AnimatePresence>
		</div>
	);
};

export default Screen3;
