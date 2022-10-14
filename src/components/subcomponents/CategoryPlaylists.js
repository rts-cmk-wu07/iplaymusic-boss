import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
const CategoryPlaylists = () => {
  const { id } = useParams();
  const { data: playlistData, loading: playlistLoading } = useFetch(
    `https://api.spotify.com/v1/browse/categories/${id}/playlists`
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
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      {!playlistLoading && (
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-6 grid grid-cols-2 gap-4"
        >
          {playlistData?.playlists.items.map((playlist, index) => (
            <CategoryCard playlist={playlist} key={index} listItem={listItem} />
          ))}
        </motion.ul>
      )}
    </>
  );
};

export default CategoryPlaylists;
