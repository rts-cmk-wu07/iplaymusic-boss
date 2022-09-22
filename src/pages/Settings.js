import useFetch from "../hooks/useFetch";
import ReactCountryFlag from "react-country-flag";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Settings = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useFetch("https://api.spotify.com/v1/me");
  console.log(data);
  return (
    <section className="p-4">
      <h1 className="heading gradient-text">User Overview</h1>
      {!loading ? (
        <article className="flex flex-col w-full gap-4 mt-4 text-additional dark:text-white">
          <div className="flex flex-col items-center">
            <img src={data?.images[0]?.url} alt="profile avatar" className="w-24 rounded-full" />

            <h2 className="text-4xl font-semibold flex gap-2 items-center">
              {data?.display_name}{" "}
              <ReactCountryFlag
                className="rounded-md"
                countryCode={data?.country}
                svg
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                }}
                title={data?.country}
              />
            </h2>
          </div>
          <p className=" bg-[#1ED760] text-sm text-white font-bold uppercase rounded-full px-3 py-1 tracking-widest w-fit">{data?.product}</p>
          <p className="text-zinc-300 text-sm">{data?.email}</p>

          <p className="text-xl">Followers: {data?.followers?.total}</p>
          <p className="text-xl">User id: {data?.id}</p>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            <IoLogOutOutline className="text-4xl text-white" />
          </button>
        </article>
      ) : (
        <p>Loading</p>
      )}
    </section>
  );
};

export default Settings;
