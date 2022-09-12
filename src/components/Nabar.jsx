import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="z-40 flex fixed sm:static sm:block bottom-0 w-screen select-none sm:w-[260px] sm:min-h-screen sm:max-h-full bg-primary-theme">
      <div className="wrapper h-full w-10/12 sm:w-4/5 mx-auto py-4 sm:py-8">
        <ul className="flex justify-between sm:gap-12 sm:flex-col sm:h-full">
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "text-primary-color gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
                : "text-primary-text gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
            }
            to="/"
          ></NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "text-primary-color gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
                : "text-primary-text gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
            }
            to="/customers"
          ></NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "text-primary-color gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
                : "text-primary-text gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
            }
            to="/products"
          ></NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "text-primary-color gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
                : "text-primary-text gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
            }
            to="/product/add"
          ></NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
