import { SwipeableList, SwipeableListItem } from "react-swipeable-list";

import trailingActions from "../../templates/List/TrailingActions";
import leadingActions from "../../templates/List/LeadingActions";
import useControls from "../../hooks/useControls";

const List = ({ children, gap }) => {
  const { addToQueue } = useControls();

  return (
    <SwipeableList className={`flex w-full ${gap || "gap-2"} flex-col !h-fit`}>
      {children?.map((child, index) => {
        const leadingAction = () =>
          leadingActions({
            action: () => addToQueue(child.props.track),
            destructive: false,
            text: "Queue",
            bgColor: "#1db954",
            textColor: "white",
          });
        const trailingAction = () =>
          trailingActions({
            action: null,
            destructive: false,
            text: "DELETE",
            bgColor: "red",
            textColor: "white",
          });
        return (
          <SwipeableListItem
            leadingActions={leadingAction()}
            trailingActions={trailingAction()}
            key={index}>
            {child}
          </SwipeableListItem>
        );
      })}
    </SwipeableList>
  );
};

export default List;
