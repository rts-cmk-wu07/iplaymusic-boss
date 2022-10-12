import { IoMusicalNotes } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";

const AlbumArt = ({ artwork, callback, widthHeight }) => {
  const [isImage, setIsImage] = useState(false);

  return (
    <>
      {artwork ? (
        <div
          className="aspect-square relative"
          style={{ width: widthHeight, height: widthHeight }}>
          {!isImage && (
            <div
              className="aspect-square bg-slate-500 rounded-md"
              style={{ width: widthHeight, height: widthHeight }}></div>
          )}
          <motion.img
            className="rounded-md aspect-square h-1"
            style={{ width: widthHeight, height: widthHeight }}
            src={artwork}
            onLoad={() => setIsImage(true)}
            alt="album art"
            onClick={callback}
            draggable="false"
          />
        </div>
      ) : (
        <motion.div
          className="flex justify-center items-center rounded-md bg-gradient-to-br from-primary to-extra-700"
          style={{ width: widthHeight, height: widthHeight }}
          onClick={callback}>
          <IoMusicalNotes className="h-8 w-8 m-4 text-white opacity-50" />
        </motion.div>
      )}
    </>
  );
};

export default AlbumArt;
