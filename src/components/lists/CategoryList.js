import { IoChevronDown } from "react-icons/io5";
import Collapsible from "react-collapsible";
const CategoryList = () => {
  return (
    <div className="mt-12">
      <Collapsible
        triggerClassName="bg-blue-300 flex justify-between items-center w-full"
        triggerOpenedClassName="bg-blue-300 flex justify-between items-center w-full"
        trigger={["All Categories", <IoChevronDown />]}
      >
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        <Collapsible trigger="Hey">
          <p>This is the collapsible content. It can be any element or React component you like.</p>
        </Collapsible>
      </Collapsible>
    </div>
  );
};

export default CategoryList;
