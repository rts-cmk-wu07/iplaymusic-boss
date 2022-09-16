// Overall layout of the application
// This is the main component that is rendered by the application
// It contains the header, the main content, and the footer
// Here goes the Outlet
import { Outlet } from 'react-router-dom';
import NavigationBottom from './templates/NavigationBottom';
import NavigationTop from './templates/NavigationTop';
import { motion } from 'framer-motion';
import Player from './templates/Player';

const Layout = () => {
	return (
		<div className="flex flex-col bg-white dark:bg-secondary h-screen w-screen overflow-x-hidden overflow-y-auto">
			<NavigationTop />
			{/* Adjust py- of main for when height of top and bottom is set, should be a little bigger than their height */}
			{/* TODO: add motion to main for fluid navigation */}
			<motion.main
				initial={{ x: '100%', opacity: 1 }}
				animate={{ x: '0%', opacity: 1, filter: 'blur(0)' }}
				exit={{ x: '0%', opacity: 0, filter: 'blur(18px)' }}
				transition={{
					duration: 0.25,
					// x: { delay: 0, duration: 0.5 },
					// opacity: { delay: 0, duration: 0.5 },
				}}
				className="py-20"
			>
				<Outlet />
			</motion.main>
			{/* Music player should be here */}
			<NavigationBottom />
			<Player />
		</div>
	);
};

export default Layout;
