import { useEffect } from "react";
import { useState } from "react";
import SongListItem from "../components/subcomponents/SongListItem";
import { InView } from "react-intersection-observer";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import Loader from "../components/subcomponents/Loader";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
const List = (props) => {
  const { startUrl, loadMoreOnIndex, trackLocation, header, showTitle } = props;
  // States
  const [currentUrl, setCurrentUrl] = useState(startUrl);
  const [songArray, setSongArray] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [inView, setInView] = useState(false);
  const [loadMoreIndex, setLoadMoreIndex] = useState(loadMoreOnIndex);

  //Placheholder array of objects for the songs list items to be mapped over in the return statement below
  const { data, loading } = useFetch(currentUrl);

  // Getting the title
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");

  /* eslint-disable */
  useEffect(() => {
    if (data.items) {
      if (songArray) {
        setLoadMoreIndex((prevState) => prevState * 2);
        setSongArray([...songArray, ...data.items]);
      } else {
        setSongArray(data.items.filter((item) => item.track));
      }
      setNextUrl(data.next);
    }
  }, [data]);
  /* eslint-enable */

  // When bottom element (loadMoreOnIndex) gets show, fetch nextUrl
  useEffect(() => {
    if (inView) setCurrentUrl(nextUrl);
  }, [inView, nextUrl]);

  // Swipeable things
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => console.info("swipe action triggered")}>
        <div className="bg-red-500">leading</div>
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => console.info("swipe action triggered")}
      >
        <div className="bg-red-500">trailing</div>
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <>
      {showTitle && (
        <h1 className="heading gradient-text">{header ? header : title}</h1>
      )}
      {loading && <Loader />}
      {songArray?.length <= 0 && !loading && (
        <h2 className="heading text-addition dark:text-white text-center mt-[25%]">
          There are no songs here yet
        </h2>
      )}
      <SwipeableList>
        <SwipeableListItem
          leadingActions={leadingActions()}
          trailingActions={trailingActions()}
        >
          Item content
        </SwipeableListItem>
      </SwipeableList>
      <ul className="flex flex-col gap-2 mt-4 mx-auto overflow-y-auto max-h-[80vw]">
        {!loading &&
          songArray &&
          songArray?.map((track, i) => {
            const trackData = trackLocation ? track[trackLocation] : track;
            if (i === loadMoreIndex && nextUrl) {
              return (
                <InView key={i} onChange={setInView}>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      <SongListItem
                        key={i}
                        id={trackData?.id}
                        track={trackData}
                      />
                    </div>
                  )}
                </InView>
              );
            } else {
              return (
                <SongListItem
                  key={trackData?.id}
                  id={trackData?.id}
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
