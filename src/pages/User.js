import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { IoPerson } from "react-icons/io5";
import UserPlaylists from "../components/subcomponents/UserPlaylists";
import Loader from "../components/subcomponents/Loader";

const User = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`https://api.spotify.com/v1/users/${id}`);
  return (
    <section className=" flex flex-col items-center gap-4 mt-6">
      <h1 className="heading gradient-text">{data?.display_name}</h1>
      {!loading ? (
        <>
          {data?.images[0] ? (
            <img src={data?.images[0]?.url} alt="profile avatar" className="max-w-[12rem] rounded-full" />
          ) : (
            <IoPerson className="rounded-full bg-[#C9CCD1]" color="white" size="12rem" />
          )}
          <p className="text-xl text-additional dark:text-white flex items-center justify-center">
            Followers: {data?.followers?.total.toLocaleString()} <IoPerson />{" "}
          </p>
          <UserPlaylists id={id} name={data?.display_name} />
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default User;
