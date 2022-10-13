import { IoPerson } from "react-icons/io5";
// takes in data as prop
const ArtistProfile = ({ data }) => {
  // seperates all genres with a comma and space
  const genres = data?.genres?.map((genre) => genre).join(", ");
  return (
    <div className="flex flex-col gap-4 items-center">
      {data?.images ? (
        // if there is an image, display it
        // else display a placeholder
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
      <p className="uppercase tracking-widest text-center ">Genres: {genres}</p>
    </div>
  );
};

export default ArtistProfile;
