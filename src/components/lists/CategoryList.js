import { IoEllipsisHorizontal, IoChevronForward, IoChevronDown } from "react-icons/io5";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const styles = {
  categoryList: css`
    .Collapsible__trigger {
      &.is-closed svg {
        transform: rotate(360deg);
        transition: 0.2s ease;
      }
      &.is-open svg {
        transform: rotate(180deg);
        transition: 0.2s ease;
      }
    }
  `,
};

const CategoryList = () => {
  const categories = [
    {
      color: "bg-categories-100",
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
      color: "bg-categories-200",
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
      color: "bg-categories-300",
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
      color: "bg-categories-400",
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
      color: "bg-categories-500",
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
      color: "bg-categories-600",
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
      color: "bg-categories-700",
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
      color: "bg-categories-800",
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
      color: "bg-categories-900",
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
    <div css={styles.categoryList} className="mt-4 flex flex-col gap-4">
      {categories.map((category, index) => (
        <Collapsible
          contentInnerClassName="my-3 text-black dark:text-white flex justify-center flex-col gap-2"
          transitionTime="200"
          key={category.name}
          triggerClassName={`${category.color} rounded-lg flex justify-between items-center p-4 w-full text-white text-xl font-bold`}
          triggerOpenedClassName={`${category.color} rounded-lg flex justify-between p-4 items-center w-full text-white text-xl font-bold`}
          trigger={[category.name.toString(), <IoChevronDown />]}
          contentContainerTagName="ul"
        >
          {category.subCategories.map((subCategory, index) => (
            <li key={index} className="flex items-center px-2">
              <Link to={`/category/${subCategory.name}`} className="flex items-center justify-between w-full">
                <p className="text-sm">{subCategory.name}</p>
                <IoChevronForward className="text-xl" />
              </Link>
            </li>
          ))}
        </Collapsible>
      ))}
    </div>
  );
};

export default CategoryList;
