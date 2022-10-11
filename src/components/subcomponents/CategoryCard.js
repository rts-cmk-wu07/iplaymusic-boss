import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CategoryCard = ({ playlist, listItem }) => {
  const navigate = useNavigate();
  const [isImage, setIsImage] = useState(false);
  console.log(playlist);
  return (
    <>
      {playlist && (
        <motion.li
          whileTap={{ scale: 0.9 }}
          variants={listItem}
          onClick={() => {
            navigate(`/playlist/${playlist.id}?title=${playlist.name}`);
          }}>
          {playlist?.images?.length > 0 && (
            <div className="relative aspect-square">
              {!isImage && <div className="mb-2 aspect-square z-10 absolute rounded-md bg-slate-500 w-full"></div>}

              <img
                className="mb-2 aspect-square fit-content -z-1 absolute rounded-md"
                src={playlist?.images[0]?.url}
                onLoad={() => setIsImage(true)}
                alt={playlist?.name}
              />
            </div>
          )}
          <p className="text-additional dark:text-white text-center self-stretch mt-1 text-ellipsis overflow-hidden whitespace-nowrap">
            {playlist?.name}
          </p>
        </motion.li>
      )}
    </>
  );
};

export default CategoryCard;
