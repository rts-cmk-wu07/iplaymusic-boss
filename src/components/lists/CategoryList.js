import { IoChevronForward } from "react-icons/io5";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "../subcomponents/Loader";
const CategoryList = () => {
  const colors = [
    "#00A1CB",
    "#D70060",
    "#F18D05",
    "#F2BC06",
    "#5EB11C",
    "#3A7634",
    "#0ABEBE",
    "#00A1CB",
    "#115793",
    "#00A1CB",
    "#D70060",
    "#F18D05",
    "#F2BC06",
    "#5EB11C",
    "#3A7634",
    "#0ABEBE",
    "#00A1CB",
    "#115793",
    "#00A1CB",
    "#D70060",
    "#F18D05",
    "#F2BC06",
  ];
  const navigate = useNavigate();
  const { data, loading } = useFetch(
    "https://api.spotify.com/v1/browse/categories?limit=22&offset=2"
  );
  return (
    <ul className="mt-4 flex flex-col gap-4">
      {!loading ? (
        data.categories.items.map((category, index) => (
          <motion.li
            whileTap={{ scale: 0.9 }}
            key={category.id}
            style={{ backgroundColor: colors[index] }}
            className={`rounded-lg flex justify-between items-center p-4 w-full text-white text-xl font-bold cursor-pointer`}
            onClick={() => navigate(`/category/${category.id}`)}
          >
            {category.name}{" "}
            <motion.span>
              <IoChevronForward />
            </motion.span>
          </motion.li>
        ))
      ) : (
        <Loader />
      )}
    </ul>
  );
};

export default CategoryList;
