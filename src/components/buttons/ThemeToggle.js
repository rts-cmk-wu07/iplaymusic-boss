import FeatherIcon from 'feather-icons-react';
import { sun, moon } from '../../assets/variants/ThemeToggle';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
	if (
		localStorage.getItem('theme') === 'dark' ||
		(!('theme' in localStorage) &&
			window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}

	return (
		<motion.button
			className="m-4 h-8 w-8 flex items-center justify-center rounded-full"
			initial={{ scale: 1, background: 'transparent' }}
			animate={{ scale: 1, background: '#bada5500' }}
			whileTap={{ scale: 0.9, background: '#bada55' }}
		>
			<FeatherIcon icon="moon" strokeWidth="3" />
		</motion.button>
	);
};

export default ThemeToggle;
