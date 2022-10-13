import { useEffect } from "react";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import useFetch from "../../hooks/useFetch";
import ArtistListItem from "../subcomponents/ArtistListItem";
import Loader from "../subcomponents/Loader";
import { motion } from "framer-motion";

const ArtistList = (props) => {
  // recieve props
  const { startUrl, loadMoreOnIndex } = props;

  // saves the url from props in a state
  const [currentUrl, setCurrentUrl] = useState(startUrl);

  // declaring empty array for data to be saved in
  const [artistArray, setArtistArray] = useState([]);

  // states for lazy loading
  const [inView, setInView] = useState(false);
  const [nextUrl, setNextUrl] = useState(null);

  // fetches artist data with custom useFetch hook
  const { data, loading } = useFetch(currentUrl);

  // useEffect to update the artistArray state with the data from the fetch
  useEffect(() => {
    if (data?.items || data?.artists?.items) {
      if (artistArray) {
        // adds new items into artists array
        setArtistArray([
          ...artistArray,
          ...(data?.items || data?.artists?.items),
        ]);
      } else {
        setArtistArray(data?.items || data?.artists?.items);
      }
      // uses the next url from api to load next results
      setNextUrl(data?.next || data?.artists?.next);
    }
  }, [data]);

  // sets a new next url when bottom is in view
  useEffect(() => {
    if (inView) setCurrentUrl(nextUrl);
  }, [inView, nextUrl]);

  // Framer motion variants
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
      {/* If no data is found, display info message */}
      {artistArray?.length <= 0 && !loading ? (
        <div className="mt-[15%] col-start-1 col-end-4">
          <p className="text-center heading text-2xl text-black dark:text-white">
            There are no artists here, you can search for artists in the search
            bar above.
          </p>
        </div>
      ) : (
        //Else if data is found, print data
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 mt-4 gap-y-5 gap-x-2">
          {/* Maps through the array of data */}
          {artistArray?.map((item, i) =>
            // If element index in view is same as loadMore, then load more artists
            i === loadMoreOnIndex && nextUrl ? (
              <InView key={i} onChange={setInView}>
                {({ ref }) => (
                  <motion.div ref={ref} variants={listItem}>
                    <ArtistListItem key={i} id={item.id} item={item} />
                  </motion.div>
                )}
              </InView>
            ) : (
              // else print artist
              <motion.div key={i} variants={listItem}>
                <ArtistListItem key={i} id={item.id} item={item} />
              </motion.div>
            )
          )}
        </motion.ul>
      )}
      {/* If artistArray isn't empty and the fetch isn't loading */}
      {loading && <Loader />}
    </>
  );
};

export default ArtistList;
