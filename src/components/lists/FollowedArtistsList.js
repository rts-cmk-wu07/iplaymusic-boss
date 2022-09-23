import { useEffect } from "react";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import useFetch from "../../hooks/useFetch";
import Artist from "../subcomponents/Artist";

const FollowedArtistsList = (props) => {
  const { startUrl, loadMoreOnIndex } = props;
  const [currentUrl, setCurrentUrl] = useState(startUrl);
  const [artistArray, setArtistArray] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [inView, setInView] = useState(false);
  const [loadMoreIndex, setLoadMoreIndex] = useState(loadMoreOnIndex);

  //Placheholder array of objects for the songs list items to be mapped over in the return statement below
  const { data, loading, error } = useFetch(currentUrl);
  console.log(data.artists);
  useEffect(() => {
    if (data?.artists?.items) {
      console.log(data);
      if (artistArray) {
        setLoadMoreIndex((prevState) => prevState * 2);
        setArtistArray([...artistArray, ...data?.artists?.items]);
      } else {
        setArtistArray(data?.artists?.items);
      }
      setNextUrl(data?.artists?.next);
    }
  }, [data]);

  useEffect(() => {
    if (inView) setCurrentUrl(nextUrl);
  }, [inView]);
  return (
    <ul className="grid grid-cols-3 mb-48">
      {artistArray &&
        artistArray?.map((item, i) =>
          //If element index is loadMore, then load more
          i === loadMoreIndex && nextUrl ? (
            <InView key={i} onChange={setInView}>
              {({ ref }) => (
                <div ref={ref}>
                  <Artist key={item.id} id={item.id} item={item} />
                </div>
              )}
            </InView>
          ) : (
            <Artist key={item.id} id={item.id} item={item} />
          )
        )}
    </ul>
  );
};

export default FollowedArtistsList;
