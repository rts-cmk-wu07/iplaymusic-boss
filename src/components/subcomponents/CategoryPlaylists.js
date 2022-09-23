import useFetch from "../../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
const CategoryPlaylists = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: playlistData, loading: playlistLoading } = useFetch(
    `https://api.spotify.com/v1/browse/categories/${id}/playlists`
  );
  return (
    <>
      {!playlistLoading && (
        <ul className="mt-6 grid grid-cols-2 gap-4">
          {playlistData?.playlists.items.map((playlist, index) => (
            <motion.li
              whileTap={{ scale: 1.1 }}
              onClick={() => {
                navigate("/playlist/" + playlist.id);
              }}
              key={index}
            >
              <div className="relative aspect-square">
                <img
                  className="mb-2 aspect-square fit-content -z-1 absolute rounded-md"
                  src={playlist.images[0]?.url}
                  alt={playlist.name}
                />
              </div>

              <p className="text-additional dark:text-white text-center self-stretch mt-1 text-ellipsis overflow-hidden whitespace-nowrap">
                {playlist.name}
              </p>
            </motion.li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CategoryPlaylists;
