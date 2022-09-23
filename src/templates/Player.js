import { motion } from 'framer-motion';
import { useState } from 'react';
import MiniPlayer from './MiniPlayer';
import LargePlayer from './LargePlayer';
import ReactAudioPlayer from 'react-audio-player';
import { useRef } from 'react';

const Player = ({ song }) => {
	const [isOpen, setIsOpen] = useState(false);

	const [isPlaying, setIsPlayingState] = useState(false);

	const audioUrl = song?.preview_url;

	const audioPlayer = useRef();

	const [dragStart, setDragStart] = useState(0);
	const [dragCurrent, setDragCurrent] = useState(0);
	const [dragEnd, setDragEnd] = useState(0);

	const [padding, setPadding] = useState(isOpen ? 0 : 4);

	return (
		<motion.section
			drag="y"
			dragConstraints={{ top: 0, bottom: 0 }}
			onDragStart={(e, info) => {
				setDragStart(info.point.y);
			}}
			onDrag={(e, info) => {
				setDragCurrent(info.point.y);
				setPadding(
					(dragStart - dragCurrent) / 10 < 4
						? 4
						: (dragStart - dragCurrent) / 10
				);
			}}
			onDragEnd={(event, info) => {
				setPadding(4);
				if (info.point.y - dragStart > 300) {
					setIsOpen(false);
				} else if (dragStart - info.point.y > 300) {
					setIsOpen(true);
					setPadding(0);
				}
			}}
			dragTransition={{ bounceStiffness: 400, bounceDamping: 15, power: 2.5 }}
			layout
			animate={{
				borderRadius: isOpen ? '0px' : '8px',
				paddingTop: padding * 2,
				paddingBottom: padding,
			}}
			transition={{
				duration: 0.3,
				ease: 'easeInOut',
				paddingTop: { duration: 0.1 },
			}}
			className={`fixed flex flex-col gradient shadow-lg rounded-lg shadow-[#FF6A00]/50 z-30 ${
				isOpen
					? 'top-0 bottom-0 left-0 right-0'
					: 'bottom-20 left-2 right-2 p-1'
			}`}
		>
			<ReactAudioPlayer src={audioUrl} ref={audioPlayer} className="hidden" />
			<LargePlayer
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlayingState}
				song={song}
				controls={audioPlayer.current?.audioEl.current}
			/>
			<MiniPlayer
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				song={song}
				controls={audioPlayer.current?.audioEl.current}
			/>
		</motion.section>
	);
};

export default Player;
