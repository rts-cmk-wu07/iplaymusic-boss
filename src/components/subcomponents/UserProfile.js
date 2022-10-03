import { IoPerson } from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SignoutButton from "../buttons/SignoutButton";
import UserInfo from "../subcomponents/UserInfo";
const UserProfile = ({ data }) => {
  const [showUserID, setShowUserID] = useState(false);
  return (
    <article className="relative flex flex-col w-full gap-5 mt-4 text-additional dark:text-white">
      <UserInfo data={data} />
      <p className="text-xl flex items-center justify-center">
        Followers: {data?.followers?.total} <IoPerson />{" "}
      </p>
      <button
        className="rounded-full border-2 border-additional dark:border-white flex items-center mx-auto  text-sm w-fit px-3 py-1"
        onClick={() => {
          setShowUserID(!showUserID);
        }}>
        {showUserID ? "Hide" : "Show"} User ID
      </button>
      <AnimatePresence>
        {showUserID && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="text-lg p-0 text-center">
            {data?.id}
          </motion.p>
        )}
      </AnimatePresence>
      <SignoutButton />
    </article>
  );
};

export default UserProfile;
