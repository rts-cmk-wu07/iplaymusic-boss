import { useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
/* Hooks */
import useFetch from '../hooks/useFetch';
/* Components */
import SoundWaveHeader from '../components/subcomponents/SoundWaveHeader';
import Playlist from '../components/subcomponents/Playlist';

const loadingPlaceholderAmount = Array.from({ length: 20 }, () => 0);

//sfc => for printing users playlists out
const AllPlaylists = () => {
	const [currentUrl, setCurrentUrl] = useState(
		'https://api.spotify.com/v1/me/playlists'
	);
	const [nextUrl, setNextUrl] = useState(null);
	const [playlistData, setPlaylistData] = useState(null);

	// Get current users playlists
	const { data, loading } = useFetch(currentUrl);

	useEffect(() => {
		// Saves data to playlistData state and sets nextUrl for lazy loading
		if (data?.items) {
			if (playlistData) {
				setPlaylistData([...playlistData, ...data.items]);
			} else {
				setPlaylistData(data.items);
			}
			setNextUrl(data.next);
		}
	}, [data, playlistData, setPlaylistData, setNextUrl, nextUrl]);

	const [inView, setInView] = useState(false);

	useEffect(() => {
		if (inView) setCurrentUrl(nextUrl);
	}, [inView, nextUrl]);

	return (
		<div className="mb-[5rem]">
			<SoundWaveHeader />

			{!loading && (
				<ul className="px-6 grid grid-cols-2 gap-x-6 overflow-y-auto h-[75vh]">
					{playlistData?.map((playlist, i) =>
						i === 16 && nextUrl ? (
							<InView key={i} onChange={setInView}>
								{({ inView, ref, entry }) => (
									<div ref={ref}>
										<Playlist key={playlist.id} {...playlist} />
									</div>
								)}
							</InView>
						) : (
							<Playlist key={playlist.id} {...playlist} />
						)
					)}
				</ul>
			)}
			{loading && (
				<ul className="px-6 grid grid-cols-2 gap-x-6 overflow-y-auto h-[100vh]">
					{loadingPlaceholderAmount.map((_, i) => (
						<Playlist key={i} loading />
					))}
				</ul>
			)}
		</div>
	);
};

export default AllPlaylists;
