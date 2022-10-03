import { LeadingActions, SwipeAction } from "react-swipeable-list";

const leadingActions = () => (
  <LeadingActions>
    <SwipeAction onClick={() => console.info("swipe action triggered")}>
      <div className="bg-green-500 text-center">ARCHIVE</div>
    </SwipeAction>
  </LeadingActions>
);

export default leadingActions;
