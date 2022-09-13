import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { IoChevronBackOutline, IoSearch } from 'react-icons/io5';

const NavigationTop = () => {
	const navigate = useNavigate();
	const location = useLocation();

	console.log(location.pathname);

	const paths = {
		'/': 'Home',
		'/login': 'Log In',
		'/events': 'Events Feed',
		'/albumdetails': 'Album Details',
		'/albums': 'All Albums',
		'/artists': 'All Artists',
		'/playlists': 'All Playlists',
		'/songs': 'All Songs',
		'/featured': 'Featured',
		'/search': 'Search',
		'/trends': 'Latest Trends',
		'/settings': 'Settings',
		'/categories': 'All Categories',
	};

	const pathsWithoutBack = ['/login', '/', '/events', '/trends', '/settings'];

	const currentPath = paths[location.pathname] || '404';

	return (
		<div className="h-16 w-screen fixed grid grid-cols-4 items-center bg-white dark:bg-secondary text-black dark:text-white shadow-xl shadow-additional/5 dark:shadow-additional/50">
			{pathsWithoutBack.includes(location.pathname) ? (
				<div aria-hidden="true" focusable="false"></div>
			) : (
				<button
					className="p-2 ml-2 w-fit h-fit rounded-full"
					onClick={() => navigate(-1)}
				>
					<IoChevronBackOutline className="h-6 w-6 stroke-3" />
				</button>
			)}
			<h1 className="text-lg col-span-2 mx-auto uppercase tracking-wider">
				{currentPath}
			</h1>
			{location.pathname !== '/search' && (
				<NavLink
					to="/search"
					className="p-2 mr-2 ml-auto w-fit h-fit rounded-full"
				>
					<IoSearch className="h-6 w-6 stroke-3" />
				</NavLink>
			)}
		</div>
	);
};

export default NavigationTop;
