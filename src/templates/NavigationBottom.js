import BottomNavLink from '../components/subcomponents/BottomNavLink';
import ThemeToggle from '../components/buttons/ThemeToggle';
import { useLocation } from 'react-router-dom';
const NavigationBottom = () => {
	// Array of objects containing the links and icons for the bottom navigation
	const bottomNavigationItems = [
		{ icon: 'IoHome', href: '/' },
		{ icon: 'IoPulse', href: '/trends' },
		{ icon: 'IoCalendar', href: '/events' },
		{ icon: 'IoSettingsSharp', href: '/settings' },
	];
	const location = useLocation();
	return (
		<nav className="flex fixed bottom-0 w-screen select-none shadow-top bg-white dark:bg-additional">
			<div className="h-full w-full mx-auto">
				<ul className="flex justify-between items-center py-2  px-6">
					{bottomNavigationItems.map((item, index) => (
						<BottomNavLink
							key={index}
							icon={item.icon}
							href={item.href}
							location={location.pathname}
						/>
					))}
					<ThemeToggle />
				</ul>
			</div>
		</nav>
	);
};

export default NavigationBottom;
