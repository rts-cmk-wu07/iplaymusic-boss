import { useEffect } from "react";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import useFetch from "../../hooks/useFetch";
import Artist from "../subcomponents/Artist";
import { useNavigate } from "react-router-dom";

const ArtistList = (props) => {
  const { startUrl, loadMoreOnIndex } = props;
  const [currentUrl, setCurrentUrl] = useState(startUrl);
  const [artistArray, setArtistArray] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [inView, setInView] = useState(false);
  const [loadMoreIndex, setLoadMoreIndex] = useState(loadMoreOnIndex);

  //Placheholder array of objects for the songs list items to be mapped over in the return statement below
  const { data, loading, error } = useFetch(currentUrl);
  console.log(data?.items);
  const navigate = useNavigate();
  useEffect(() => {
    if (data?.items) {
      console.log(data);
      if (artistArray) {
        setLoadMoreIndex((prevState) => prevState * 2);
        setArtistArray([...artistArray, ...data?.items]);
      } else {
        setArtistArray(data?.items);
      }
      setNextUrl(data?.next);
    }
  }, [data]);

  useEffect(() => {
    if (inView) setCurrentUrl(nextUrl);
  }, [inView]);
  return (
    <ul className="grid grid-cols-3 mt-4 gap-y-5 gap-x-2">
      {artistArray && data?.items.length > 0 ? (
        !loading ? (
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
          )
        ) : (
          <p>Loading...</p>
        )
      ) : (
        <div className="mt-[15%] col-start-1 col-end-4">
          <p className="text-center heading text-2xl text-black dark:text-white">You don't follow any artists yet. you can find some here:</p>
          <button
            className="mt-4 rounded-full text-additional dark:text-white border-2 border-additional dark:border-white px-10 py-2 flex items-center justify-between gap-2 text-3xl w-fit mx-auto"
            onClick={() => {
              navigate("/artists");
            }}
          >
            Discover Artists
          </button>
        </div>
      )}
    </ul>
  );
};

export default ArtistList;
