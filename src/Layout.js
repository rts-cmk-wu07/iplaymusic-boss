// Overall layout of the application
// This is the main component that is rendered by the application
// It contains the header, the main content, and the footer
// Here goes the Outlet
import { Outlet } from 'react-router-dom';
import ThemeToggle from './components/buttons/ThemeToggle';

const Layout = () => {
	return (
		<div className="bg-white dark:bg-secondary h-screen w-screen overflow-x-hidden overflow-y-auto">
			<header>
				{/* This is the header
				It contains the logo, the navigation, and the
				theme toggle */}
			</header>
			hej
			<Outlet />
			<footer>
				{/* This is the footer
				It contains the footer navigation */}
				<ThemeToggle />
			</footer>
		</div>
	);
};

export default Layout;
