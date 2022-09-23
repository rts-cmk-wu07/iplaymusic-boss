import { motion } from 'framer-motion';
import { useState, memo, useRef } from 'react';
import MiniPlayer from './MiniPlayer';
import LargePlayer from './LargePlayer';
import useFetch from '../hooks/useFetch';
import ReactAudioPlayer from 'react-audio-player';

const Player = ({ song }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const { data, loading, error } = useFetch(
		'https://api.spotify.com/v1/tracks/4cOdK2wGLETKBW3PvgPWqT'
	);
	console.log(data);
	console.log('%cPlayer rerender', 'color: #ff0000');
	const [isOpen, setIsOpen] = useState(false);
	const audioUrl = data?.preview_url;
	console.log(audioUrl);
	const audioPlayer = useRef();
	const [dragStart, setDragStart] = useState(0);
	const [dragCurrent, setDragCurrent] = useState(0);
	const [paddingTop, setPaddingTop] = useState(isOpen ? '0px' : '4px');
	const [paddingBottom, setPaddingBottom] = useState(isOpen ? '0px' : '4px');
	return (
		<motion.section
			drag="y"
			dragConstraints={{ top: 0, bottom: 0 }}
			onDragStart={(e, info) => {
				setDragStart(info.point.y);
			}}
			onDrag={(e, info) => {
				setDragCurrent(info.point.y);
				setPaddingTop(
					(dragStart - dragCurrent) / 5 < 4
						? '4px'
						: `${parseInt((dragStart - dragCurrent) / 5)}px`
				);
				setPaddingBottom(
					(dragStart - dragCurrent) / 10 < 4
						? '4px'
						: `${parseInt((dragStart - dragCurrent) / 10)}px`
				);
			}}
			onDragEnd={(event, info) => {
				setPaddingTop('4px');
				setPaddingBottom('4px');
				if (info.point.y - dragStart > 300) {
					setIsOpen(false);
				} else if (dragStart - info.point.y > 300) {
					setIsOpen(true);
					setPaddingTop('0px');
					setPaddingBottom('0px');
				}
			}}
			dragTransition={{ bounceStiffness: 400, bounceDamping: 15, power: 2.5 }}
			layout
			animate={{
				borderRadius: isOpen ? '0px' : '8px',
				paddingTop: paddingTop,
				paddingBottom: paddingBottom,
			}}
			transition={{
				duration: 0.3,
				ease: 'easeInOut',
				paddingTop: {
					type: 'spring',
					stiffness: 150,
					damping: 15,
				},
				paddingBottom: { type: 'spring', stiffness: 150, damping: 15 },
			}}
			className={`fixed flex flex-col gradient shadow-lg rounded-lg shadow-[#FF6A00]/50 z-30 ${
				isOpen
					? 'top-0 bottom-0 left-0 right-0'
					: 'bottom-20 left-2 right-2 p-1'
			}`}
		>
			<ReactAudioPlayer
				src={audioUrl}
				ref={audioPlayer}
				autoPlay={isPlaying}
				onPause={() => setIsPlaying(false)}
				onPlay={() => setIsPlaying(true)}
			/>
			<LargePlayer
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				song={data}
				controls={audioPlayer.current?.audioEl.current}
			/>
			<MiniPlayer
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				song={data}
				controls={audioPlayer.current?.audioEl.current}
			/>
		</motion.section>
	);
};

export default memo(Player);
