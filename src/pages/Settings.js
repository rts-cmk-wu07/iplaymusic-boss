import useFetch from "../hooks/useFetch";
import ReactCountryFlag from "react-country-flag";
import { IoLogOutOutline, IoPerson } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";
import { signOut } from "../functions/signOut";
import TokenContext from "../contexts/TokenContext";
import { useContext } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { data, loading } = useFetch("https://api.spotify.com/v1/me");
  const { data: followingData, loading: followingLoading } = useFetch(
    "https://api.spotify.com/v1/me/following?type=artist"
  );

  console.log(followingData);
  const { setTokenData } = useContext(TokenContext);
  const [showUserID, setShowUserID] = useState(false);

  const navigate = useNavigate();
  return (
    <section className="p-4">
      <h1 className="heading gradient-text">User Overview</h1>
      {!loading ? (
        <article className="relative flex flex-col w-full gap-4 mt-4 text-additional dark:text-white">
          <div className="flex flex-col items-center">
            {data.images[0] ? (
              <img
                src={data?.images[0]?.url}
                alt="profile avatar"
                className="max-w-[12rem] rounded-full"
              />
            ) : (
              <IoPerson
                className="rounded-full bg-[#C9CCD1]"
                color="white"
                size="100"
              />
            )}

            <h2 className="text-4xl ml-6 font-semibold flex gap-1 items-center">
              {data?.display_name}{" "}
              <ReactCountryFlag
                className="rounded-md w-fit"
                countryCode={data?.country}
                svg
                style={{
                  width: "2rem",
                  height: "2rem",
                }}
                title={data?.country}
              />
            </h2>
            <p className="bg-[#1ED760] mt-2 text-sm text-white font-bold uppercase rounded-full px-5 py-[6px] tracking-[0.12rem] w-fit">
              {data?.product}
            </p>
          </div>
          <p className="text-neutral-800 dark:text-zinc-300 text-sm text-center">
            {data?.email}
          </p>
          <div className="flex items-center justify-center flex-col gap-1">
            <p className="text-xl flex items-center justify-center">
              Followers: {data?.followers?.total} <IoPerson />{" "}
            </p>
            <p
              className="text-xl flex items-center justify-center underline"
              onClick={() => navigate("/following")}
            >
              Following: {followingData?.artists?.total}
              <HiOutlineExternalLink size="30" />
            </p>
          </div>
          <button
            className="rounded-full border-2 border-additional dark:border-white flex items-center mx-auto  text-sm w-fit px-3 py-1"
            onClick={() => {
              setShowUserID(!showUserID);
            }}
          >
            {showUserID ? "Hide" : "Show"} User ID
          </button>
          <AnimatePresence>
            {showUserID && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                className="text-lg p-0 text-center"
              >
                {data?.id}
              </motion.p>
            )}
          </AnimatePresence>
          <button
            className="rounded-full border-2 border-additional dark:border-white px-10 py-2 flex items-center justify-between gap-2 text-3xl w-fit mx-auto"
            onClick={() => {
              signOut({ setTokenData });
            }}
          >
            Sign out
            <IoLogOutOutline className="text-4xl " />
          </button>
        </article>
      ) : (
        <p>Loading</p>
      )}
    </section>
  );
};

export default Settings;
