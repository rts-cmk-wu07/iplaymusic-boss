import { SwipeAction, TrailingActions } from "react-swipeable-list";
import SwipeComponent from "./SwipeComponent";

const trailingActions = (props) => {
  const { action, destructive, text, bgColor, textColor } = props;
  return (
    <TrailingActions>
      <SwipeAction destructive={destructive} onClick={action}>
        <SwipeComponent
          text={text}
          textColor={textColor}
          bgColor={bgColor}
          margin="0 0 0 1rem"
        />
      </SwipeAction>
    </TrailingActions>
  );
};

export default trailingActions;
