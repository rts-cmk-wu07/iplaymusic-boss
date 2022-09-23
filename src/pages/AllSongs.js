import List from "../templates/List";
import H1 from "../components/subcomponents/H1";
const AllSongs = () => {
  return (
    <div className="p-6">
      <h1 className="heading gradient-text mb-4">All Songs</h1>
      <List />
    </div>
  );
};

export default AllSongs;
