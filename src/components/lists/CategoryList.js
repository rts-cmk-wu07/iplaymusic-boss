import { IoEllipsisHorizontal, IoChevronForward } from "react-icons/io5";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const categories = [
    {
      name: "Alternative",
      subCategories: [
        {
          name: "Lorem ipsum",
        },
        {
          name: "Lorem ipsum",
        },
        {
          name: "Lorem ipsum",
        },
      ],
    },
    {
      name: "Blues",
      subCategories: [
        {
          name: "Lorem ipsum",
        },
        {
          name: "Lorem ipsum",
        },
        {
          name: "Lorem ipsum",
        },
      ],
    },
    {
      name: "Classical",
      subCategories: [
        {
          name: "Lorem ipsum",
        },
        {
          name: "Lorem ipsum",
        },
        {
          name: "Lorem ipsum",
        },
      ],
    },
    {
      name: "Country",
      subCategories: [
        {
          name: "Lorem ipsum",
        },
        {
          name: "Lorem ipsum",
        },
        {
          name: "Lorem ipsum",
        },
      ],
    },
    {
      name: "Dance",
      subCategories: [
        {
          name: "Lorem ipsum",
        },
        {
          name: "Lorem ipsum",
        },
        {
          name: "Lorem ipsum",
        },
      ],
    },
    {
      name: "Electronic",
      subCategories: [
        {
          name: "Lorem ipsum",
        },
        {
          name: "Lorem ipsum",
        },
        {
          name: "Lorem ipsum",
        },
      ],
    },
    {
      name: "Fitness & Workout",
      subCategories: [
        {
          name: "Lorem ipsum",
        },
        {
          name: "Lorem ipsum",
        },
        {
          name: "Lorem ipsum",
        },
      ],
    },
    {
      name: "Hip-Hop/rap",
      subCategories: [
        {
          name: "Lorem ipsum",
        },
        {
          name: "Lorem ipsum",
        },
        {
          name: "Lorem ipsum",
        },
      ],
    },
    {
      name: "Industrial",
      subCategories: [
        {
          name: "Lorem ipsum",
        },
        {
          name: "Lorem ipsum",
        },
        {
          name: "Lorem ipsum",
        },
      ],
    },
  ];
  return (
    <div className="mt-4 flex flex-col gap-4">
      {categories.map((category) => (
        <Collapsible
          key={category.name}
          triggerClassName={`bg-blue-300 rounded-lg flex justify-between items-center p-4 w-full text-white text-xl font-bold`}
          triggerOpenedClassName={`bg-blue-500 rounded-lg flex justify-between p-4 items-center w-full text-white text-xl font-bold`}
          trigger={[category.name.toString(), <IoEllipsisHorizontal />]}
        >
          <ul className="my-3 text-black dark:text-white flex justify-center flex-col gap-2">
            {category.subCategories.map((subCategory, index) => (
              <li key={index} className="flex items-center">
                <Link to={`/category/${subCategory.name}`} className="flex items-center justify-between w-full">
                  <p className="text-sm">{subCategory.name}</p>
                  <IoChevronForward className="text-xl" />
                </Link>
              </li>
            ))}
          </ul>
        </Collapsible>
      ))}
    </div>
  );
};

export default CategoryList;
