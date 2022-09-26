import { useEffect, useState } from 'react';
import villager from '../assets/sounds/villager.mp3';
import villagerImg from '../assets/images/villager.png';
import { Link, useLocation } from 'react-router-dom';
import H1 from '../components/subcomponents/H1';
import { motion } from 'framer-motion';
import { useCallback } from 'react';

const NotFound = () => {
	const [firstSoundHasPlayed, setFirstSoundHasPlayed] = useState(false);
	const randomWait = useCallback(() => {
		setTimeout(() => {
			const audio = new Audio(villager);
			audio.play();
			setFirstSoundHasPlayed(true);
			randomWait();
		}, Math.random() * 10000 + 100);
	}, []);

	useEffect(() => {
		randomWait();
	}, [randomWait]);

	// check if url has changed, if so, stop audio
	const location = useLocation();
	useEffect(() => {
		const audio = new Audio(villager);
		audio.pause();
	}, [location]);

	return (
		<div className="p-4">
			<H1 text="404" />
			<h2 className="text-xl font-semibold mb-4">
				Oops, we couldn't find this page
			</h2>
			<motion.button
				initial={{ scale: 0.5, opacity: 0 }}
				animate={{
					scale: 1,
					opacity: 1,
					boxShadow:
						'inset 4px 4px 0px 0px rgba(255,255,255,0.5), inset -4px -6px 0px 0px rgba(0,0,0,0.25)',
					transition: { scale: { delay: 0.25 }, opacity: { delay: 0.25 } },
				}}
				whileTap={{
					boxShadow:
						'inset 4px 4px 0px 0px rgba(0,0,0,0.25), inset -4px -6px 0px 0px rgba(255,255,255,0.5)',
				}}
				className="flex w-full border-4 border-black bg-stone-400 mb-6"
			>
				<Link to="/" className="p-4 w-full font-bold">
					Go back home
				</Link>
			</motion.button>
			<motion.img
				animate={
					firstSoundHasPlayed
						? {
								y: '0%',
								rotate: [5, -5, 5],
								scale: 1,
								transition: {
									rotate: { repeat: Infinity, ease: 'easeInOut', duration: 2 },
								},
						  }
						: { y: '100%' }
				}
				src={villagerImg}
				alt="villager"
				whileTap={{
					scale: 0.75,
					transition: { type: 'spring', stiffness: 500 },
				}}
				onPointerDown={() => {
					const audio = new Audio(villager);
					audio.play();
				}}
				className="absolute"
			/>
			<audio src={villager} autoPlay />
		</div>
	);
};

export default NotFound;
