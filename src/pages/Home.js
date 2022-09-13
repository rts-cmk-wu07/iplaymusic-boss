import { useState } from 'react';

const Home = () => {
	const getTimeOfDay = () => {
		const date = new Date();
		const hours = date.getHours();
		if (hours < 12) {
			return 'Good morning';
		} else if (hours >= 12 && hours <= 17) {
			return 'Good afternoon';
		} else {
			return 'Good evening';
		}
	};

	const greeting = getTimeOfDay();

	return (
		<div className="p-6">
			<h1 className="text-3xl font-bold gradient-text">{greeting}</h1>
		</div>
	);
};

export default Home;
