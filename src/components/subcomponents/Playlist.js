import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlaylistCard from "./PlaylistCard";

const Playlist = (props) => {
  const navigate = useNavigate();
  const { images, name, id, loading } = props;

  // Check if images array contains items
  const isImages = !loading && images.length > 0;

  const [isImage, setIsImage] = useState(false);

  return (
    <motion.li
      whileTap={{ scale: 0.9 }}
      className="flex flex-col h-[200px]"
      onClick={() => navigate(`/playlist/${id}?title=${name}`)}>
      {loading && (
        <>
          <div className="relative aspect-square">
            {!isImage && (
              <div className="bg-slate-500 w-full aspect-square z-30 opacity-50 absolute rounded-md" />
            )}
            <div className="mb-2 aspect-square fit-content -z-1 absolute" />
          </div>
        </>
      )}
      {isImages && !loading && (
        <PlaylistCard
          isImage={isImage}
          images={images}
          name={name}
          setIsImage={setIsImage}
        />
      )}
      {!isImages && !loading && (
        <div className="bg-slate-500 aspect-square z-30 opacity-50 rounded-md" />
      )}
    </motion.li>
  );
};

export default Playlist;

Playlist.defaultProps = {
  loading: false,
};
