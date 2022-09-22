import { motion } from "framer-motion";
import LoaderPulseFigure from "../figures/LoaderPulseFigure";

const LoaderModal = () => {
  return (
    <div className="z-40 w-screen h-screen fixed inset-0 bg-white dark:bg-secondary gap-14 flex flex-col items-center justify-center ">
      <LoaderPulseFigure />
      <motion.h2
        animate={{ scale: [0.9, 1.2, 0.9, 1.2, 0.9], type: "spring" }}
        transition={{ duration: 5, loop: Infinity }}
        className="heading dark:text-white text-black"
      >
        iPlayMusic
      </motion.h2>
    </div>
  );
};

export default LoaderModal;
