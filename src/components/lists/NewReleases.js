import useFetch from "../../hooks/useFetch";
import { motion } from "framer-motion";
import AlbumListItem from "../subcomponents/AlbumListItem";

const NewReleases = (props) => {
  const { url } = props;

  // Get current users saved albums
  const { data } = useFetch(url);
  const newAlbums = data.albums?.items.filter(
    (album) => album.album_type === "album"
  );

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

  return (
    newAlbums?.length > 0 && (
      <>
        <h2 className="text-md font-bold mt-4 mb-3 text-black dark:text-white">
          New Releases
        </h2>
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-3">
          {newAlbums?.map((album, index) => {
            return (
              <motion.li key={index} variants={listItem}>
                <AlbumListItem {...album} />
              </motion.li>
            );
          })}
        </motion.ul>
      </>
    )
  );
};

export default NewReleases;
