import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useFetch from "../../hooks/useFetch";
import TagList from "./TagList";
import AlbumArt from "../subcomponents/AlbumArt";
import Loader from "../subcomponents/Loader";

const AlbumList = (props) => {
  const { url, artistName } = props;
  const navigate = useNavigate();

  const [currentUrl, setCurrentUrl] = useState(url);

  // get albums
  const { data, loading } = useFetch(currentUrl);
  const albums = data.items;
  const [activeTag, setActiveTag] = useState("All");

  // framer-motion list variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        // children delay
        staggerChildren: 0.1,
      },
    },
  };

  // framer-motion list item variants
  const listItem = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0 },
  };

  // if used with tags, use these tags
  const tags = ["All", "Albums", "Singles & EPs"];
  /* eslint-disable */
  useEffect(() => {
    if (activeTag === "All") {
      return;
    }
    if (activeTag === "Albums") {
      console.log(
        "%c" +
          url.split("include_groups=")[0] +
          "include_groups=" +
          activeTag.slice(0, -1).toLowerCase(),
        "color: red;"
      );
      setCurrentUrl(
        url.split("include_groups=")[0] +
          "include_groups=" +
          activeTag.slice(0, -1).toLowerCase()
      );
      return;
    }
    if (activeTag === "Singles & EPs") {
      setCurrentUrl(
        url.split("include_groups=")[0] +
          "include_groups=" +
          "single,compilation"
      );
      return;
    }
  }, [activeTag, url]);
  /* eslint-enable */
  return (
    <>
      <h2
        className={
          artistName
            ? "text-2xl text-left font-bold mt-12 mb-6"
            : "text-md font-bold mt-4 mb-3 text-black dark:text-white"
        }
      >
        {artistName ? artistName + "'s Discography" : "Saved Albums"}
      </h2>
      {artistName && (
        <div className="flex my-2 gap-4 items-center">
          <TagList
            tags={tags}
            activeTag={activeTag}
            setActiveTag={setActiveTag}
          />
        </div>
      )}
      {albums?.length <= 0 && !loading && (
        <p className="text-3xl font-bold text-addition dark:text-white">
          No Music Found :(
        </p>
      )}
      {loading && <Loader />}
      {!loading && albums && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex gap-3 overflow-y-auto -mr-6 pr-6 pl-4 -ml-4 pb-4"
        >
          {albums?.map((album, index) => {
            const albumData = artistName ? album : album.album;
            return (
              <motion.div
                whileTap={{ scale: 0.9 }}
                key={index}
                variants={listItem}
              >
                <AlbumArt
                  artwork={albumData?.images[1]?.url}
                  widthHeight="130px"
                  callback={() => navigate(`/album/${albumData.id}`)}
                />
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </>
  );
};

export default AlbumList;
