import { useState, useEffect } from "react";
import { InView } from "react-intersection-observer";
import useFetch from "../../hooks/useFetch";
import FeaturedItem from "./FeaturedItem";

const TrendsList = (props) => {
  const { startUrl, loadMoreOnIndex } = props;
  const [currentUrl, setCurrentUrl] = useState(startUrl);
  const [trendsArray, setTrendsArray] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [inView, setInView] = useState(false);
  const [loadMoreIndex, setLoadMoreIndex] = useState(loadMoreOnIndex);
  const { data, loading } = useFetch(currentUrl);

  useEffect(() => {
    if (data?.albums?.items) {
      if (trendsArray) {
        setLoadMoreIndex((prevState) => prevState * 2);
        setTrendsArray([...trendsArray, ...data?.albums?.items]);
      } else {
        setTrendsArray(data?.albums?.items);
      }
      setNextUrl(data?.albums?.next);
    }
  }, [data]);

  // When bottom element (loadMoreOnIndex) gets show, fetch nextUrl
  useEffect(() => {
    if (inView) setCurrentUrl(nextUrl);
  }, [inView]);
  return (
    <ul className="flex flex-col gap-12">
      {trendsArray?.length <= 0 && !loading && (
        <div className="mt-[15%] col-start-1 col-end-4">
          <p className="text-center heading text-2xl text-black dark:text-white">
            There are no trends here :( Come back later
          </p>
        </div>
      )}

      {!loading ? (
        trendsArray?.map((item, i) =>
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
        <p>Loading...</p>
      )}
    </ul>
  );
};

export default TrendsList;