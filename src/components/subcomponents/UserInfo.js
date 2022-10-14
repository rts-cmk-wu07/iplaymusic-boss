import ReactCountryFlag from "react-country-flag";
import { IoPerson } from "react-icons/io5";

const UserInfo = ({ data }) => {
  return (
    <>
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
            size="12rem"
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
    </>
  );
};

export default UserInfo;
