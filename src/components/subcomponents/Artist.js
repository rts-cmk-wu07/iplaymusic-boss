import { IoPerson } from "react-icons/io5";
const Artist = ({ item }) => {
  return (
    <li className="flex flex-col items-center">
      {item.images[0] ? (
        <img
          src={item?.images[0]?.url}
          alt="profile avatar"
          className="w-24 h-24 rounded-full"
        />
      ) : (
        <IoPerson
          className="rounded-full bg-[#C9CCD1]"
          color="white"
          size="6rem"
        />
      )}
      <p className="text-center text-xl text-black dark:text-white text-ellipsis overflow-hidden whitespace-nowrap max-w-full">
        {item.name}
      </p>
    </li>
  );
};

export default Artist;
