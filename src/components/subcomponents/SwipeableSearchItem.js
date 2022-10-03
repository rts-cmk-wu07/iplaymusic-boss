import { SwipeableList, SwipeableListItem } from "react-swipeable-list";

import trailingActions from "../../templates/List/TrailingActions";
import leadingActions from "../../templates/List/LeadingActions";
import useControls from "../../hooks/useControls";

const SwipeableSearchItem = () => {
  return (
    <SwipeableList
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        marginTop: "1rem",
      }}></SwipeableList>
  );
};

export default SwipeableSearchItem;
