// Overall layout of the application
// This is the main component that is rendered by the application
// It contains the header, the main content, and the footer
// Here goes the Outlet
import { Outlet } from 'react-router-dom';
import ThemeToggle from './components/buttons/ThemeToggle';

const Layout = () => {
	return (
		<div>
			<ThemeToggle />
			hej
			<Outlet />
		</div>
	);
};

export default Layout;
