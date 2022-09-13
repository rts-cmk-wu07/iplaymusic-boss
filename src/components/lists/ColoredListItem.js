import { NavLink } from "react-router-dom";

const ColoredListItem = ({ name, colorStart, colorEnd, link, span }) => {
  return (
    <li
      className={`bg-gradient-to-br ${colorStart} ${colorEnd} ${
        span || null
      } text-white rounded-lg font-bold list-none`}
    >
      <NavLink
        className="p-8 w-full h-full flex items-center justify-center"
        to={link}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default ColoredListItem;
