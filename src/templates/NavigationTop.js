import { useNavigate, useLocation } from "react-router-dom";
import { IoChevronBackOutline, IoSearch } from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Search from "../components/Search";

const NavigationTop = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  // only use first location pathname
  const path = `/${location.pathname.split("/")[1]}`;

  const paths = {
    "/": "Home",
    "/login": "Log In",
    "/events": "Events Feed",
    "/albumdetails": "Album Details",
    "/albums": "All Albums",
    "/album": "Album",
    "/artists": "All Artists",
    "/playlists": "All Playlists",
    "/playlist": "Playlist",
    "/songs": "All Songs",
    "/featured": "Featured",
    "/search": "Search",
    "/trends": "Latest Trends",
    "/settings": "Settings",
    "/categories": "All Categories",
    "/category": "Category",
    "/following": "Following",
    "/artist": "Artist",
    "/user": "User",
  };

  const pathsWithoutBack = ["/login", "/", "/events", "/trends", "/settings"];
  const pathsWithOnlyWhiteText = ["/playlists", "/album"];
  const pathsWithoutSearchBackground = ["/album", "/playlists"];

  const currentPath = paths[path] || "404";
  return (
    <div
      onClick={() => setSearchOpen(false)}
      className={
        pathsWithOnlyWhiteText.includes(path)
          ? "h-16 w-screen fixed grid grid-cols-4 items-center bg-transparent text-white z-20"
          : "h-16 w-screen fixed grid grid-cols-4 items-center bg-white dark:bg-secondary text-black dark:text-white shadow-xl shadow-additional/5 dark:shadow-additional/50 z-20"
      }>
      {pathsWithoutBack.includes(location.pathname) ? (
        <div aria-hidden="true" focusable="false"></div>
      ) : (
        <button
          className="p-2 ml-2 w-fit h-fit rounded-full z-10"
          onClick={() => navigate(-1)}>
          <IoChevronBackOutline className="h-6 w-6 stroke-3" />
        </button>
      )}
      <h1 className="text-lg col-span-2 mx-auto uppercase tracking-wider">
        {currentPath}
      </h1>
      <>
        <IoSearch
          onClick={(e) => {
            e.stopPropagation();
            setSearchOpen((searchState) => !searchState);
          }}
          id="search-icon"
          className="text-2xl mr-4 ml-auto w-fit h-fit rounded-full"
        />
        <AnimatePresence>
          {searchOpen && (
            <Search
              setSearchOpen={setSearchOpen}
              transparent={
                pathsWithoutSearchBackground.includes(path) ? true : false
              }
            />
          )}
        </AnimatePresence>
      </>
    </div>
  );
};

export default NavigationTop;
