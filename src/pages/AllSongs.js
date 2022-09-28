import List from '../templates/List';
const AllSongs = () => {
	return (
		<div className="p-6">
			<List
				startUrl="https://api.spotify.com/v1/me/top/tracks"
				loadMoreOnIndex={16}
				header="Your Top Songs"
				showTitle
			/>
		</div>
	);
};

export default AllSongs;
