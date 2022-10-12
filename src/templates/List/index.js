import { useEffect } from "react";
import { useState } from "react";
import SongListItem from "../../components/subcomponents/SongListItem";
import useFetch from "../../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/subcomponents/Loader";
import { SwipeableList, SwipeableListItem } from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import trailingActions from "./TrailingActions";
import leadingActions from "./LeadingActions";
import useControls from "../../hooks/useControls";
import PlaylistSearch from "../../components/subcomponents/PlaylistSearch";
const List = (props) => {
  const { startUrl, trackLocation, header, showTitle } = props;
  // States
  const [currentUrl] = useState(startUrl);
  const [songArray, setSongArray] = useState(null);

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
        setSongArray([...songArray, ...data.items]);
      } else {
        setSongArray(data.items.filter((item) => item));
      }
    }
  }, [data]);
  /* eslint-enable */
  const [search, setSearch] = useState("");
  const filteredTracks = songArray?.filter((track) => {
    const trackData = trackLocation ? track[trackLocation] : track;
    const trackArtists = trackData?.artists
      ? trackData?.artists?.map((artist) => artist.name)
      : trackData?.artists;
    return (
      trackData.name.toLowerCase().includes(search.toLowerCase()) ||
      trackArtists?.join(" ").toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      {showTitle && (
        <h1 className="heading gradient-text">{header ? header : title}</h1>
      )}

      {songArray?.length <= 0 && !loading && (
        <h2 className="heading text-addition dark:text-white text-center mt-[25%]">
          There are no songs here yet
        </h2>
      )}
      <PlaylistSearch search={search} setSearch={setSearch} />
      {loading && <Loader />}
      {!loading && songArray && (
        <SwipeableList
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            marginTop: "1rem",
            height: "auto",
          }}>
          {filteredTracks.map((track, i) => {
            const trackData = trackLocation ? track[trackLocation] : track;

            // on swipe right add song to queue
            const leadingAction = () =>
              leadingActions({
                action: () => addToQueue(trackData),
                destructive: false,
                text: "Queue",
                bgColor: "#1db954",
                textColor: "white",
              });
            const trailingAction = () =>
              trailingActions({
                action: null,
                destructive: false,
                text: "DELETE",
                bgColor: "red",
                textColor: "white",
              });

            return (
              <SwipeableListItem
                key={i}
                leadingActions={leadingAction()}
                trailingActions={trailingAction()}>
                <SongListItem
                  key={trackData?.id}
                  id={trackData?.id}
                  track={trackData}
                />
              </SwipeableListItem>
            );
          })}
        </SwipeableList>
      )}
    </>
  );
};

export default List;
