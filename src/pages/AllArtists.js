import ArtistList from "../components/lists/ArtistList";
import Select from "react-select";
import { useState } from "react";

const AllArtists = () => {
  const [selectState, setSelectState] = useState("Top Artists");
  function handleChange(e) {
    setSelectState(e.label);
  }
  const options = [{ label: "Top Artists" }, { label: "Following" }];
  return (
    <section className="p-6">
      <h1 className="heading gradient-text">
        {selectState === "Top Artists"
          ? "Your " + selectState
          : selectState + " Artists"}
      </h1>
      {/* Select field to show top or following artists */}
      <Select
        onChange={handleChange}
        isSearchable={false}
        options={options}
        className="my-react-select-container w-fit my-4 z-40"
        classNamePrefix="my-react-select"
        defaultValue={options.filter(
          (option) => option.label === "Top Artists"
        )}
      />
      {selectState === "Top Artists" && (
        <ArtistList
          startUrl="https://api.spotify.com/v1/me/top/artists"
          loadMoreOnIndex={18}
        />
      )}
      {selectState === "Following" && (
        <ArtistList
          startUrl="https://api.spotify.com/v1/me/following?type=artist"
          artistsLocation="artists"
          loadMoreOnIndex={18}
        />
      )}
    </section>
  );
};

export default AllArtists;
