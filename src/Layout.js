// Overall layout of the application
// This is the main component that is rendered by the application
// It contains the header, the main content, and the footer
// Here goes the Outlet
import { Outlet } from 'react-router-dom';
import ThemeToggle from './components/buttons/ThemeToggle';
import NavigationTop from './templates/NavigationTop';

const Layout = () => {
	return (
		<div className="flex flex-col bg-white dark:bg-secondary h-screen w-screen overflow-x-hidden overflow-y-auto">
			<NavigationTop />

			{/* Adjust py- of main for when height of top and bottom is set, should be a little bigger than their height */}
			{/* TODO: add motion to main for fluid navigation */}
			<main className="h-full py-16">
				<Outlet />
			</main>

			{/* Music player should be here */}

			<footer>
				{/* This is the footer
				It contains the footer navigation */}
				<ThemeToggle />
			</footer>
		</div>
	);
};

export default Layout;
