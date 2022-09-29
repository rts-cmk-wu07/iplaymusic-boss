import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { IoFlame } from "react-icons/io5";
import { motion } from "framer-motion";
import List from "../components/lists/List";
import SongListItem from "../components/subcomponents/SongListItem";
import NavBg from "../components/NavBg";
import { useInView } from "react-intersection-observer";
import { useContext } from "react";
import NavBgContext from "../contexts/NavBgContext";
import convertDate from "../functions/convertDate";
import Flame from "../components/subcomponents/Flame";

const Album = () => {
  const { id } = useParams();
  const { ref, inView } = useInView();
  const { setNavBgOpen } = useContext(NavBgContext);

  setNavBgOpen(!inView);

  const { data } = useFetch(`https://api.spotify.com/v1/albums/${id}`);

  // const convertDate = date => {
  // 	const newDate = new Date(date);
  // 	const month = newDate.toLocaleString('default', { month: 'long' });
  // 	const day = newDate.getDate();
  // 	const year = newDate.getFullYear();
  // 	return `${month} ${day}, ${year}`;
  // };

  return (
    <div className="-mt-20">
      <NavBg />
      <section
        ref={ref}
        className="w-screen aspect-square pt-20"
        style={{
          background:
            data.images &&
            `url(${data.images[0].url}) no-repeat center center/cover`,
        }}
      >
        <div className="w-full h-full p-4 bg-gradient-to-t from-additional/100 to-additional/0 flex flex-col justify-end gap-6">
          <div>
            <h1
              style={{ textShadow: "0 2px 8px #00000080" }}
              className="text-2xl text-white font-bold"
            >
              {data?.name}
            </h1>
            <p
              style={{ textShadow: "0 2px 8px #00000080" }}
              className="text-white mt-2 text-lg font-medium"
            >
              {data?.artists?.map((artist) => artist.name).join(", ")}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-white/75">
              <p>
                {/* {data?.release_date?.split('-')[2]} -{' '}
								{data?.release_date?.split('-')[1]} -{' '}
								{data?.release_date?.split('-')[0]} */}
                {convertDate(data?.release_date)}
              </p>
              <p>•</p>
              <p>{data?.total_tracks} songs</p>
            </div>
            <div className="flex items-center gap-2 text-white/75 mt-2">
              <IoFlame className="text-xl flex-shrink-0 text-gradientColors-right" />
              <div className="w-full h-4 rounded-md bg-additional/50">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: data ? data.popularity + "%" : 0,
                    transition: {
                      delay: 0.25,
                      duration: 1,
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                    },
                  }}
                  className="h-full rounded-md bg-gradient-to-r from-gradientColors-right to-gradientColors-left relative flex items-center"
                >
                  <Flame />
                </motion.div>
              </div>
              <p>{data?.popularity}%</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 pr-4">
        <List>
          {data?.tracks?.items?.map((track) => (
            <SongListItem key={track.id} track={track} noImage />
          ))}
        </List>
      </section>
      <section className="flex flex-col px-4 py-2 text-sm opacity-50 dark:text-white">
        <p>{data?.label}</p>
        <p>{data.copyrights && data.copyrights[0].text}</p>
      </section>
    </div>
  );
};

export default Album;
