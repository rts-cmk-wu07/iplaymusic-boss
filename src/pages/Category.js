import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CategoryPlaylists from "../components/subcomponents/CategoryPlaylists";
const Category = () => {
  const { id } = useParams();
  const { data: categoryData, loading: categoryLoading } = useFetch(
    `https://api.spotify.com/v1/browse/categories/${id}`
  );
  return (
    <section className="p-6">
      {!categoryLoading && (
        <h1 className="gradient-text heading">
          {categoryData?.name} Playlists
        </h1>
      )}
      <CategoryPlaylists />
    </section>
  );
};

export default Category;
