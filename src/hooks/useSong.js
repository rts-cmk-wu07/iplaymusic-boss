import { useContext } from "react";
import SongContext from "../contexts/SongContext";
import useFetch from "./useFetch";

const useSong = (songId) => {
  let url;
  if (songId) {
    url = `https://api.spotify.com/v1/tracks/${songId}`;
  }
  /* eslint-disable */
  const { songData, setSongData } = useContext(SongContext);
  const { data } = useFetch(url);
  /* eslint-enable */
  const updateSong = () => {
    setSongData(data);
  };

  return updateSong;
};

export default useSong;
