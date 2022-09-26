import { IoPerson } from "react-icons/io5";
import { useParams } from "react-router-dom";
import TopTracksList from "../components/lists/TopTracksList";
import useFetch from "../hooks/useFetch";

const Artist = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(
    `https://api.spotify.com/v1/artists/${id}`
  );
  const genres = data?.genres?.map((genre) => genre).join(", ");
  return (
    <>
      {!loading ? (
        <section className="p-6 flex flex-col items-center gap-4 text-additional dark:text-white">
          {data.images ? (
            <img
              src={
                data?.images?.find((image) => image.width === 320)?.url ||
                data?.images?.find((image) => image.width === 640)?.url ||
                data?.images?.find((image) => image.width === 160)?.url
              }
              alt="profile avatar"
              className="w-48 h-48 rounded-full"
            />
          ) : (
            <IoPerson
              className="rounded-full bg-[#C9CCD1]"
              color="white"
              size="12rem"
            />
          )}
          <div className="flex flex-col gap-1">
            <h1 className="heading text-center">{data?.name}</h1>
            <p className="tracking-widest uppercase text-lg font-semibold">
              Followers: {data?.followers?.total?.toLocaleString()}
            </p>
          </div>
          <p className="uppercase tracking-widest text-center ">
            Genres: {genres}
          </p>
          <TopTracksList id={id} />
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Artist;
