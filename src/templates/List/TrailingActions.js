import { SwipeAction, TrailingActions } from "react-swipeable-list";

const trailingActions = () => (
  <TrailingActions>
    <SwipeAction
      destructive={true}
      onClick={() => console.info("swipe action triggered")}
    >
      <div className="bg-red-500 text-center">DELETE</div>
    </SwipeAction>
  </TrailingActions>
);

export default trailingActions;
