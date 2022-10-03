import { useEffect } from "react";
import { useState } from "react";
import SongListItem from "../../components/subcomponents/SongListItem";
import { InView } from "react-intersection-observer";
import useFetch from "../../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/subcomponents/Loader";
import { SwipeableList, SwipeableListItem } from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import trailingActions from "./TrailingActions";
import leadingActions from "./LeadingActions";
import useControls from "../../hooks/useControls";

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

  const { addToQueue } = useControls();

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
      {!loading && songArray && (
        <SwipeableList
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            marginTop: "1rem",
          }}
        >
          {songArray.map((track, i) => {
            const trackData = trackLocation ? track[trackLocation] : track;

            // on swipe right add song to queue
            const leadingAction = () =>
              leadingActions({
                action: () => addToQueue(trackData),
                destructive: false,
                text: "Queue",
                bgColor: "#93c572",
                textColor: "black",
              });
            const trailingAction = () =>
              trailingActions({
                action: null,
                destructive: false,
                text: "DELETE",
                bgColor: "red",
                textColor: "white",
              });

            if (i === loadMoreIndex && nextUrl) {
              return (
                <InView key={i} onChange={setInView}>
                  {({ inView, ref, entry }) => (
                    <div key={i} ref={ref}>
                      <SwipeableListItem
                        leadingActions={leadingAction()}
                        trailingActions={trailingAction()}
                      >
                        <SongListItem
                          key={i}
                          id={trackData?.id}
                          track={trackData}
                        />
                      </SwipeableListItem>
                    </div>
                  )}
                </InView>
              );
            } else {
              return (
                <SwipeableListItem
                  key={i}
                  leadingActions={leadingAction()}
                  trailingActions={trailingAction()}
                >
                  <SongListItem
                    key={trackData?.id}
                    id={trackData?.id}
                    track={trackData}
                  />
                </SwipeableListItem>
              );
            }
          })}
        </SwipeableList>
      )}
    </>
  );
};

export default List;