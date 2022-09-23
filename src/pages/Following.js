import { IoPerson } from "react-icons/io5";
import useFetch from "../hooks/useFetch";

const Following = () => {
  const { data, loading, error } = useFetch(
    "https://api.spotify.com/v1/me/following?type=artist&limit=50"
  );
  console.log(data);
  return (
    <section className="p-4">
      <h1 className="heading gradient-text">Following</h1>
      {!loading ? (
        <article className="grid grid-cols-3 row-gap-4 mt-4 text-additional dark:text-white">
          {data?.artists?.items?.map((artist) => (
            <div className="flex flex-col items-center">
              {artist.images[0] ? (
                <img
                  src={artist?.images[0]?.url}
                  alt="profile avatar"
                  className="w-24 h-24 rounded-full"
                />
              ) : (
                <IoPerson
                  className="rounded-full bg-[#C9CCD1]"
                  color="white"
                  size="12"
                />
              )}
              <p className="text-center text-xl">{artist.name}</p>
            </div>
          ))}
        </article>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default Following;
