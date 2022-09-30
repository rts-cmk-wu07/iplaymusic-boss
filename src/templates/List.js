import { useEffect } from "react";
import { useState } from "react";
import SongListItem from "../components/subcomponents/SongListItem";
import { InView } from "react-intersection-observer";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import Loader from "../components/subcomponents/Loader";
import Select from "react-select";
const List = (props) => {
  const {
    startUrl,
    loadMoreOnIndex,
    trackLocation,
    header,
    showTitle,
    allSongs,
  } = props;
  // States
  const [currentUrl, setCurrentUrl] = useState(startUrl);
  const [songArray, setSongArray] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [inView, setInView] = useState(false);
  const [loadMoreIndex, setLoadMoreIndex] = useState(loadMoreOnIndex);
  const [selectState, setSelectState] = useState("Top Songs");

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
        setSongArray(data.items);
      }
      setNextUrl(data.next);
    }
  }, [data]);
  /* eslint-enable */

  // When bottom element (loadMoreOnIndex) gets show, fetch nextUrl
  useEffect(() => {
    if (inView) setCurrentUrl(nextUrl);
  }, [inView, nextUrl]);
  const options = [
    { value: "top/tracks", label: "Top Songs" },
    { value: "tracks", label: "Saved Songs" },
  ];
  const handleChange = (e) => {
    setSelectState(e.label);
    if (currentUrl !== `https://api.spotify.com/v1/me/${e.value}`) {
      setSongArray(null);
    }
    setCurrentUrl(`https://api.spotify.com/v1/me/${e.value}`);
  };
  return (
    <>
      {showTitle && !allSongs && (
        <h1 className="heading gradient-text">{header ? header : title}</h1>
      )}
      {allSongs && (
        <h1 className="heading gradient-text">Your {selectState}</h1>
      )}
      {allSongs && (
        <Select
          onChange={handleChange}
          options={options}
          className="my-react-select-container w-fit my-4"
          classNamePrefix="my-react-select"
          defaultValue={options.filter(
            (option) => option.label === "Top Songs"
          )}
        />
      )}
      {loading && <Loader />}
      {songArray?.length <= 0 && !loading && (
        <h2 className="heading text-addition dark:text-white text-center mt-[25%]">
          There are no songs here yet
        </h2>
      )}
      <ul className="flex flex-col gap-2 mt-4 mx-auto">
        {!loading &&
          songArray &&
          songArray?.map((track, i) => {
            const trackData = trackLocation
              ? track[trackLocation]
              : track
              ? selectState === "Saved Songs"
                ? track["track"]
                : track
              : null;
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
