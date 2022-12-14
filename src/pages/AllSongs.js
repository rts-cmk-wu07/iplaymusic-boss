import List from "../templates/List";
import Select from "react-select";
import { useState } from "react";
const AllSongs = () => {
  const [selectState, setSelectState] = useState("Top Songs");
  function handleChange(e) {
    setSelectState(e.label);
  }
  const options = [{ label: "Top Songs" }, { label: "Saved Songs" }];
  return (
    <div className="p-6">
      <h1 className="heading gradient-text">Your {selectState}</h1>
      <Select
        onChange={handleChange}
        isSearchable={false}
        options={options}
        className="my-react-select-container w-fit my-4 z-40"
        classNamePrefix="my-react-select"
        defaultValue={options.filter((option) => option.label === "Top Songs")}
      />
      {selectState === "Top Songs" && <List startUrl="https://api.spotify.com/v1/me/top/tracks?offset=0&limit=50" />}
      {selectState === "Saved Songs" && <List startUrl="https://api.spotify.com/v1/me/tracks?offset=0&limit=50" trackLocation="track" />}
    </div>
  );
};

export default AllSongs;
