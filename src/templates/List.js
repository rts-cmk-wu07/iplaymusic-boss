import { useEffect } from 'react';
import { useState } from 'react';
import SongListItem from '../components/subcomponents/SongListItem';
import { InView } from 'react-intersection-observer';
import useFetch from '../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';
const List = props => {
	const { startUrl, loadMoreOnIndex, trackLocation, header } = props;

	// States
	const [currentUrl, setCurrentUrl] = useState(startUrl);
	const [songArray, setSongArray] = useState(null);
	const [nextUrl, setNextUrl] = useState(null);
	const [inView, setInView] = useState(false);
	const [loadMoreIndex, setLoadMoreIndex] = useState(loadMoreOnIndex);

	//Placheholder array of objects for the songs list items to be mapped over in the return statement below
	const { data, loading, error } = useFetch(currentUrl);

	// Getting the title
	const [searchParams, setSearchParams] = useSearchParams();
	const title = searchParams.get('title');

	useEffect(() => {
		if (data.items) {
			console.log(data);
			if (songArray) {
				setLoadMoreIndex(prevState => prevState * 2);
				setSongArray([...songArray, ...data.items]);
			} else {
				setSongArray(data.items);
			}
			setNextUrl(data.next);
		}
	}, [data]);

	// When bottom element (loadMoreOnIndex) gets show, fetch nextUrl
	useEffect(() => {
		if (inView) setCurrentUrl(nextUrl);
	}, [inView]);

	return (
		<>
			<h1 className="heading gradient-text">{header ? header : title}</h1>
			<ul className="flex flex-col gap-4 mt-4 mx-auto overflow-y-auto h-[100vh] mb-[4rem]">
				{songArray &&
					songArray?.map((track, i) => {
						const trackData = trackLocation ? track[trackLocation] : track;
						if (i === loadMoreIndex && nextUrl) {
							return (
								<InView key={i} onChange={setInView}>
									{({ inView, ref, entry }) => (
										<div ref={ref}>
											<SongListItem
												key={trackData.id}
												id={trackData.id}
												track={trackData}
											/>
										</div>
									)}
								</InView>
							);
						} else {
							return (
								<SongListItem
									key={trackData.id}
									id={trackData.id}
									track={trackData}
								/>
							);
						}
					})}
			</ul>
		</>
	);
};

export default List;
