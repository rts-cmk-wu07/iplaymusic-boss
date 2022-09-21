import { useEffect } from 'react';
import villager from '../assets/sounds/villager.mp3';
import villagerImg from '../assets/images/villager.png';

const NotFound = () => {
	const randomWait = () => {
		setTimeout(() => {
			const audio = new Audio(villager);
			audio.play();
			randomWait();
		}, Math.random() * 10000 + 10000);
	};

	useEffect(() => {
		randomWait();
	});

	return (
		<div>
			<h1>404</h1>
			<img src={villagerImg} alt="villager" />
			<audio src={villager} autoPlay />
		</div>
	);
};

export default NotFound;
