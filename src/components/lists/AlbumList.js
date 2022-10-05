import useFetch from "../../hooks/useFetch";
import AlbumArt from "../subcomponents/AlbumArt";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TagList from "./TagList";
import { useEffect, useState } from "react";

const AlbumList = (props) => {
  const { url, artist } = props;
  const navigate = useNavigate();

  // Get albums
  const [currentUrl, setCurrentUrl] = useState(url);
  const { data } = useFetch(currentUrl);
  const albums = data.items;
  const [activeTag, setActiveTag] = useState("All");
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
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0 },
  };
  const tags = ["All", "Albums", "Singles & EPs"];
  useEffect(() => {
    if (activeTag === "All") {
      setCurrentUrl(url);
    } else if (activeTag === "Albums") {
      setCurrentUrl(
        url.split("include_groups=")[0] +
          "include_groups=" +
          activeTag.slice(0, -1).toLowerCase()
      );
    } else if (activeTag === "Singles & EPs") {
      setCurrentUrl(
        url.split("include_groups=")[0] +
          "include_groups=" +
          "single,compilation"
      );
    }
  }, [activeTag, url]);

  return (
    <>
      <h2
        className={
          artist
            ? "text-2xl text-left font-bold mt-12 mb-6"
            : "text-md font-bold mt-4 mb-3 text-black dark:text-white"
        }>
        {artist ? artist + "'s Discography" : "Saved Albums"}
      </h2>
      {artist && (
        <div className="flex my-2 gap-4 items-center">
          <TagList
            tags={tags}
            activeTag={activeTag}
            setActiveTag={setActiveTag}
          />
        </div>
      )}
      {albums?.length > 0 ? (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex gap-3 overflow-y-auto -mr-6 pr-6 pl-4 -ml-4 pb-2">
          {albums?.map((album, index) => {
            const albumData = artist ? album : album.album;
            return (
              <motion.div
                whileTap={{ scale: 0.9 }}
                key={index}
                variants={listItem}>
                <AlbumArt
                  artwork={albumData?.images[1]?.url}
                  widthHeight="130px"
                  callback={() => navigate(`/album/${albumData.id}`)}
                />
              </motion.div>
            );
          })}
        </motion.div>
      ) : (
        <p className="text-2xl font-bold">No Music Found</p>
      )}
    </>
  );
};

export default AlbumList;
