import { useEffect, useState, useRef } from "react";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
/* Hooks */
import useFetch from "../hooks/useFetch";
/* Components */
import SoundWaveHeader from "../components/subcomponents/SoundWaveHeader";
import Playlist from "../components/subcomponents/Playlist";

const loadingPlaceholderAmount = Array.from({ length: 20 }, () => 0);

//sfc => for printing users playlists out
const AllPlaylists = () => {
  const [currentUrl, setCurrentUrl] = useState(
    "https://api.spotify.com/v1/me/playlists"
  );
  const [nextUrl, setNextUrl] = useState(null);
  const [playlistData, setPlaylistData] = useState(null);

  // Get current users playlists
  const { data, loading, error } = useFetch(currentUrl);

  useEffect(() => {
    // Saves data to playlistData state and sets nextUrl for lazy loading
    if (data?.items) {
      if (playlistData) {
        setPlaylistData([...playlistData, ...data.items]);
      } else {
        setPlaylistData(data.items);
      }
      setNextUrl(data.next);
    }
  }, [data]);

  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) setCurrentUrl(nextUrl);
  }, [inView]);

  return (
    <div className="mb-[5rem]">
      <SoundWaveHeader />
      {!loading && data?.items.length <= 0 && (
        <div className="text-additional dark:text-white mt-[75%]">
          <h2 className="text-4xl font-bold text-center mb-2">
            You don't have any playlists yet.
          </h2>
          <h3 className="text-2xl font-semibold text-center">
            Create a playlist to see it here.
          </h3>
        </div>
      )}
      {data ? (
        <ul className="px-6 grid grid-cols-2 gap-x-6 overflow-y-auto h-[75vh]">
          {playlistData?.map((playlist, i) =>
            i === 16 && nextUrl ? (
              <InView key={i} onChange={setInView}>
                {({ inView, ref, entry }) => (
                  <div ref={ref}>
                    <Playlist key={playlist.id} {...playlist} />
                  </div>
                )}
              </InView>
            ) : (
              <Playlist key={playlist.id} {...playlist} />
            )
          )}
        </ul>
      ) : (
        <ul className="px-6 grid grid-cols-2 gap-x-6 overflow-y-auto h-screen">
          {loadingPlaceholderAmount.map((_, i) => (
            <Playlist key={i} loading />
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllPlaylists;
