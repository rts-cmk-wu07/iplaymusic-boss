import { NavLink } from "react-router-dom";

const FeaturedItem = ({ item }) => {
  return (
    <li
      className={`w-full aspect-3/4 rounded-lg bg-cover bg-center overflow-hidden shadow-xl shadow-additional/40 dark:shadow-additional/80`}
      style={{ backgroundImage: `url(${item?.images[0].url})` }}
    >
      <NavLink
        className="w-full h-full flex flex-col items-center justify-center"
        to={`/playlist/${item?.id}`}
      >
        <div className="flex flex-col justify-end px-8 py-12 h-3/4 mt-auto w-full text-white bg-gradient-to-t from-black/95 to-black/0">
          <h2 className="text-3xl font-bold mb-4">{item?.name}</h2>
          <p className="mb-2">{item?.owner?.display_name}</p>
          <p className="text-sm font-medium opacity-50">{item?.description}</p>
        </div>
      </NavLink>
    </li>
  );
};

export default FeaturedItem;
