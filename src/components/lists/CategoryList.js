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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <>
      {!loading && (
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-4 flex flex-col gap-4"
        >
          {data.categories.items.map((category, index) => (
            <motion.li
              whileTap={{ scale: 0.9 }}
              variants={listItem}
              key={category.id}
              style={{ backgroundColor: colors[index] }}
              className={`rounded-lg flex justify-between items-center p-4 w-full text-white text-xl font-bold cursor-pointer`}
              onClick={() => navigate(`/category/${category.id}`)}
            >
              {category.name} <IoChevronForward />
            </motion.li>
          ))}
        </motion.ul>
      )}
      {loading && <Loader />}
    </>
  );
};

export default CategoryList;
