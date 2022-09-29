import { useState, useEffect } from "react";
import { InView } from "react-intersection-observer";
import useFetch from "../../hooks/useFetch";
import Loader from "../subcomponents/Loader";
import FeaturedItem from "./FeaturedItem";

const FeaturedItemsList = (props) => {
  const { startUrl, loadMoreOnIndex } = props;
  const [currentUrl, setCurrentUrl] = useState(startUrl);
  const [featuredArray, setFeaturedArray] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [inView, setInView] = useState(false);
  const [loadMoreIndex, setLoadMoreIndex] = useState(loadMoreOnIndex);
  const { data, loading } = useFetch(currentUrl);

  /* eslint-disable */
  useEffect(() => {
    if (data?.playlists?.items) {
      if (featuredArray) {
        setLoadMoreIndex((prevState) => prevState * 2);
        setFeaturedArray([...featuredArray, ...data?.playlists?.items]);
      } else {
        setFeaturedArray(data?.playlists?.items);
      }
      setNextUrl(data?.playlists?.next);
    }
  }, [data]);
  /* eslint-enable */

  // When bottom element (loadMoreOnIndex) gets show, fetch nextUrl
  useEffect(() => {
    if (inView) setCurrentUrl(nextUrl);
  }, [inView, nextUrl]);
  return (
    <ul className="flex flex-col gap-12">
      {featuredArray?.length <= 0 && !loading && (
        <div className="mt-[15%] col-start-1 col-end-4">
          <p className="text-center heading text-2xl text-black dark:text-white">No featured items here :(</p>
        </div>
      )}

      {!loading ? (
        featuredArray?.map((item, i) =>
          //If element index is loadMore, then load more
          i === loadMoreIndex && nextUrl ? (
            <InView key={i} onChange={setInView}>
              {({ ref }) => (
                <div className="gap-12 flex flex-col" ref={ref}>
                  <FeaturedItem key={i} id={item.id} item={item} />
                </div>
              )}
            </InView>
          ) : (
            <FeaturedItem key={i} id={item.id} item={item} />
          )
        )
      ) : (
        <Loader />
      )}
    </ul>
  );
};

export default FeaturedItemsList;
