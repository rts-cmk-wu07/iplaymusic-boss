import { useEffect } from "react";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import useFetch from "../../hooks/useFetch";
import ArtistListItem from "../subcomponents/ArtistListItem";
import Loader from "../subcomponents/Loader";
import { motion } from "framer-motion";

const ArtistList = props => {
	//recieve props
	const { startUrl, loadMoreOnIndex } = props;

	//set fetch state to the prop we sent from artist page component
	const [currentUrl, setCurrentUrl] = useState(startUrl);

	//Declaring array of objects for the artist list
	const [artistArray, setArtistArray] = useState([]);
	const [nextUrl, setNextUrl] = useState(null);

	//states for lazy loading
	const [inView, setInView] = useState(false);
	const [loadMoreIndex, setLoadMoreIndex] = useState(loadMoreOnIndex);

	//fetches artist data with custom useFetch hook
	const { data, loading } = useFetch(currentUrl);

	/* eslint-disable */
	useEffect(() => {
		if (data?.items) {
			if (artistArray) {
				//adds new loadmoreindex for every item received from api
				setLoadMoreIndex(prevState => prevState + loadMoreOnIndex + 1);
				//spreads new items into artists array
				setArtistArray([...artistArray, ...data?.items]);
			} else {
				setArtistArray(data?.items);
			}
			//uses the next url from spotify api to load next results
			setNextUrl(data?.next);
			//makes component reusable on every page, if data structure is different
		} else if (data?.artists?.items) {
			if (artistArray) {
				setLoadMoreIndex(prevState => prevState * 2);
				setArtistArray([...artistArray, ...data?.artists?.items]);
			} else {
				setArtistArray(data?.artists?.items);
			}
			setNextUrl(data?.artists?.next);
		} else if (data?.artists) {
			if (artistArray) {
				setArtistArray([...artistArray, ...data?.artists]);
			} else {
				setArtistArray(data?.artists);
			}
			setNextUrl(data?.artists?.next);
		}
	}, [data]);
	/* eslint-enable */

	//sets a new next url when
	useEffect(() => {
		if (inView) setCurrentUrl(nextUrl);
	}, [inView, nextUrl]);

	//Framer motion variants
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};
	const listItem = {
		hidden: { opacity: 0, scale: 1.25 },
		show: { opacity: 1, scale: 1 },
	};

	return (
		<>
			{/* If no artists are found, display info message */}
			{artistArray?.length <= 0 && !loading && (
				<div className="mt-[15%] col-start-1 col-end-4">
					<p className="text-center heading text-2xl text-black dark:text-white">
						There are no artists here, you can search for artists in the search
						bar above.
					</p>
				</div>
			)}
			{/* If artistArray isn't empty and the fetch isn't loading */}
			{artistArray && !loading && (
				<motion.ul
					variants={container}
					initial="hidden"
					animate="show"
					className="grid grid-cols-2 mt-4 gap-y-5 gap-x-2"
				>
					{artistArray?.map((item, i) =>
						//If element index in view is same as loadMore, then load more artists
						i === loadMoreIndex && nextUrl ? (
							<InView key={i} onChange={setInView}>
								{({ ref }) => (
									<motion.div ref={ref} variants={listItem}>
										<ArtistListItem key={i} id={item.id} item={item} />
									</motion.div>
								)}
							</InView>
						) : (
							//else print artist
							<motion.div key={i} variants={listItem}>
								<ArtistListItem key={i} id={item.id} item={item} />
							</motion.div>
						)
					)}
				</motion.ul>
			)}
			{/* If fetch is loading, show loading spinner animation */}
			{loading && <Loader />}
		</>
	);
};

export default ArtistList;
