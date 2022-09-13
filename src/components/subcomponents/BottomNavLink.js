import { NavLink } from "react-router-dom";
import Icon from "./Icon";

const BottomNavLink = ({ icon, href }) => {
  return (
    <li>
      <NavLink
        className={(navData) =>
          navData.isActive
            ? "gradient text-white dark:text-black p-3 rounded-full gap-4 cursor-pointer flex"
            : "gradient-fill p-3 rounded-full gap-4 cursor-pointer flex"
        }
        to={href}
      >
        <Icon iconName={icon} size="24px" />
      </NavLink>
    </li>
  );
};

export default BottomNavLink;
