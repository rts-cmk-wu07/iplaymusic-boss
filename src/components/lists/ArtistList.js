import { useEffect } from "react";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import useFetch from "../../hooks/useFetch";
import ArtistListItem from "../subcomponents/ArtistListItem";
import Loader from "../subcomponents/Loader";

const ArtistList = (props) => {
  const { startUrl, loadMoreOnIndex } = props;
  const [currentUrl, setCurrentUrl] = useState(startUrl);
  const [artistArray, setArtistArray] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [inView, setInView] = useState(false);
  const [loadMoreIndex, setLoadMoreIndex] = useState(loadMoreOnIndex);

  //Placheholder array of objects for the songs list items to be mapped over in the return statement below
  const { data, loading } = useFetch(currentUrl);
  //Makes this component reusable for every artist list

  /* eslint-disable */
  useEffect(() => {
    if (data?.items) {
      if (artistArray) {
        setLoadMoreIndex((prevState) => prevState * 2);
        setArtistArray([...artistArray, ...data?.items]);
      } else {
        setArtistArray(data?.items);
      }
      setNextUrl(data?.next);
    } else if (data?.artists?.items) {
      if (artistArray) {
        setLoadMoreIndex((prevState) => prevState * 2);
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

  useEffect(() => {
    if (inView) setCurrentUrl(nextUrl);
  }, [inView, nextUrl]);
  return (
    <ul className="grid grid-cols-2 mt-4 gap-y-5 gap-x-2">
      {artistArray?.length <= 0 && !loading && (
        <div className="mt-[15%] col-start-1 col-end-4">
          <p className="text-center heading text-2xl text-black dark:text-white">
            There are no artists here, you can search for artists in the search bar above.
          </p>
        </div>
      )}

      {!loading ? (
        artistArray?.map((item, i) =>
          //If element index is loadMore, then load more
          i === loadMoreIndex && nextUrl ? (
            <InView key={i} onChange={setInView}>
              {({ ref }) => (
                <div ref={ref}>
                  <ArtistListItem key={i} id={item.id} item={item} />
                </div>
              )}
            </InView>
          ) : (
            <ArtistListItem key={i} id={item.id} item={item} />
          )
        )
      ) : (
        <Loader />
      )}
    </ul>
  );
};

export default ArtistList;
