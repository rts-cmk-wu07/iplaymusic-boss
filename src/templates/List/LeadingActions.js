import { LeadingActions, SwipeAction } from "react-swipeable-list";
import SwipeComponent from "./SwipeComponent";

const leadingActions = (props) => {
  const { action, destructive, text, bgColor, textColor } = props;
  return (
    <LeadingActions>
      <SwipeAction onClick={action} destructive={destructive}>
        <SwipeComponent
          text={text}
          textColor={textColor}
          bgColor={bgColor}
          margin="0 1rem 0 0"
        />
      </SwipeAction>
    </LeadingActions>
  );
};

export default leadingActions;
