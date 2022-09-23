import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Layout';
import { AnimatePresence } from 'framer-motion';
import useFetch from './hooks/useFetch';
import ReactAudioPlayer from 'react-audio-player';

// Import pages
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import EventFeed from './pages/EventFeed';
import AlbumDetails from './pages/AlbumDetails';
import AllAlbums from './pages/AllAlbums';
import AllArtists from './pages/AllArtists';
import AllPlaylists from './pages/AllPlaylists';
import Playlist from './pages/Playlist';
import AllSongs from './pages/AllSongs';
import Featured from './pages/Featured';
import Search from './pages/Search';
import LatestTrends from './pages/LatestTrends';
import NotFound from './pages/NotFound';
import Settings from './pages/Settings';
import AllCategories from './pages/AllCategories';
import loaderModalContext from './contexts/loaderModalContext';
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { default as refreshTokenFunction } from './functions/refreshToken';
import Callback from './pages/Callback';
import TokenContext from './contexts/TokenContext';
import SongContext from './contexts/SongContext';

function App() {
	const location = useLocation();
	const [loaderModal, setLoaderModal] = useState(false);

	const [songData, setSongData] = useState({});
	const audioUrl = songData?.preview_url;

	const audioPlayer = useRef();

	const [tokenData, setTokenData] = useState({
		accessToken: '',
		refreshToken: '',
		expiredDate: null,
	});
	const { accessToken } = tokenData;

	useEffect(() => {
		refreshTokenFunction(setTokenData);
	}, []);

	return (
		<TokenContext.Provider value={{ tokenData, setTokenData }}>
			<SongContext.Provider value={{ songData, setSongData }}>
				<loaderModalContext.Provider value={{ loaderModal, setLoaderModal }}>
					<AnimatePresence mode="wait" initial={false}>
						<ReactAudioPlayer
							src={audioUrl}
							ref={audioPlayer}
							className="hidden"
						/>

						<Routes location={location} key={location.pathname}>
							{accessToken.length > 0 ? (
								<Route
									path="/"
									element={
										<Layout
											audioControls={audioPlayer.current?.audioEl.current}
										/>
									}
								>
									<Route index element={<Home />} />
									<Route path="/login" element={<LogIn />} />
									<Route path="/events" element={<EventFeed />} />
									<Route path="/albumdetails" element={<AlbumDetails />} />
									<Route path="/albums" element={<AllAlbums />} />
									<Route path="/artists" element={<AllArtists />} />
									<Route path="/playlists" element={<AllPlaylists />} />
									<Route path="/playlist/:id" element={<Playlist />} />
									<Route path="/songs" element={<AllSongs />} />
									<Route path="/featured" element={<Featured />} />
									<Route path="/search" element={<Search />} />
									<Route path="/trends" element={<LatestTrends />} />
									<Route path="/settings" element={<Settings />} />
									<Route path="/categories" element={<AllCategories />} />
									<Route path="*" element={<NotFound />} />
								</Route>
							) : (
								<>
									<Route index element={<LogIn />} />
									<Route path="/callback" element={<Callback />} />
									<Route path="*" element={<NotFound />} />
								</>
							)}
						</Routes>
					</AnimatePresence>
				</loaderModalContext.Provider>
			</SongContext.Provider>
		</TokenContext.Provider>
	);
}

export default App;
