import { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
/* Hooks */
import useFetch from "../hooks/useFetch";
/* Components */
import SoundWaveHeader from "../components/subcomponents/SoundWaveHeader";
import Playlist from "../components/subcomponents/Playlist";
import Loader from "../components/subcomponents/Loader";

//sfc => for printing users playlists out
const AllPlaylists = () => {
  const [currentUrl, setCurrentUrl] = useState(
    "https://api.spotify.com/v1/me/playlists"
  );
  const [nextUrl, setNextUrl] = useState(null);
  const [playlistData, setPlaylistData] = useState(null);

  // Get current users playlists
  const { data, loading } = useFetch(currentUrl);

  /* eslint-disable */
  useEffect(() => {
    // Saves data to playlistData state and sets nextUrl for lazy loading
    if (data?.items) {
      // The filter is for removing playlists with 0 tracks
      if (playlistData) {
        setPlaylistData([
          ...playlistData,
          ...data.items.filter((item) => item.tracks.total > 0),
        ]);
      } else {
        setPlaylistData(data.items.filter((item) => item.tracks.total > 0));
      }
      setNextUrl(data.next);
    }
  }, [data]);
  /* eslint-enable */

  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) setCurrentUrl(nextUrl);
  }, [inView, nextUrl]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="mb-[1rem]">
      <SoundWaveHeader />
      {loading && (
        <div className="mt-[75%]">
          <Loader />
        </div>
      )}
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
      {playlistData && (
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="px-6 grid grid-cols-2 gap-x-6 overflow-y-auto"
        >
          {playlistData?.map((playlist, i) =>
            i === 16 && nextUrl ? (
              <InView key={i} onChange={setInView}>
                {({ inView, ref, entry }) => (
                  <motion.div key={playlist.id} ref={ref} variants={listItem}>
                    <Playlist {...playlist} />
                  </motion.div>
                )}
              </InView>
            ) : (
              <motion.div key={playlist.id} variants={listItem}>
                <Playlist {...playlist} />
              </motion.div>
            )
          )}
        </motion.ul>
      )}
    </div>
  );
};

export default AllPlaylists;
