import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';

// Import pages
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import EventFeed from './pages/EventFeed';
import AlbumDetails from './pages/AlbumDetails';
import AllAlbums from './pages/AllAlbums';
import AllArtists from './pages/AllArtists';
import AllPlaylists from './pages/AllPlaylists';
import AllSongs from './pages/AllSongs';
import Featured from './pages/Featured';
import Search from './pages/Search';
import LatestTrends from './pages/LatestTrends';
import NotFound from './pages/NotFound';
import Settings from './pages/Settings';
import AllCategories from './pages/AllCategories';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="/login" element={<LogIn />} />
						<Route path="/events" element={<EventFeed />} />
						<Route path="/albumdetails" element={<AlbumDetails />} />
						<Route path="/albums" element={<AllAlbums />} />
						<Route path="/artists" element={<AllArtists />} />
						<Route path="/playlists" element={<AllPlaylists />} />
						<Route path="/songs" element={<AllSongs />} />
						<Route path="/featured" element={<Featured />} />
						<Route path="/search" element={<Search />} />
						<Route path="/trends" element={<LatestTrends />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="/categories" element={<AllCategories />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
