import ColoredListItem from "../components/lists/items/ColoredListItem";
import FeaturedItemsList from "../components/lists/FeaturedItemsList";
import useFetch from "../hooks/useFetch";
const Home = () => {
	const getTimeOfDay = () => {
		const date = new Date();
		const hours = date.getHours();
		if (hours < 12) {
			return "Good morning";
		} else if (hours >= 12 && hours <= 17) {
			return "Good afternoon";
		} else {
			return "Good evening";
		}
	};

	const greeting = getTimeOfDay();
	const topLinks = [
		{
			id: 1,
			name: "Playlists",
			link: "/playlists",
			colorStart: "from-extra-600",
			colorEnd: "to-extra-700",
			span: "col-span-2",
		},
		{
			id: 2,
			name: "Songs",
			link: "/songs",
			colorStart: "from-extra-800",
			colorEnd: "to-extra-700",
		},
		{
			id: 3,
			name: "Albums",
			link: "/albums",
			colorStart: "from-extra-200",
			colorEnd: "to-extra-300",
		},
		{
			id: 4,
			name: "Artists",
			link: "/artists",
			colorStart: "from-extra-400",
			colorEnd: "to-extra-500",
		},
		{
			id: 5,
			name: "Categories",
			link: "/categories",
			colorStart: "from-extra-100",
			colorEnd: "to-extra-200",
		},
	];

	const { data } = useFetch("https://api.spotify.com/v1/me");

	return (
		<>
			<div className="p-6">
				<h1 className="heading gradient-text text-center mb-8">
					{greeting}, {data?.display_name}
				</h1>
				<div className="grid grid-cols-2 gap-2 mt-4 place-content-center">
					{topLinks.map(link => (
						<ColoredListItem key={link.id} {...link} />
					))}
				</div>
				<h1 className="heading gradient-text mt-16 mb-4">Featured</h1>

				<FeaturedItemsList
					startUrl="https://api.spotify.com/v1/browse/featured-playlists?limit=4&offset=0"
					loadMoreOnIndex={3}
				/>
			</div>
		</>
	);
};

export default Home;
