import { SwipeAction, TrailingActions } from "react-swipeable-list";
import SwipeComponent from "./SwipeComponent";

const trailingActions = props => {
	const { action, destructive, text, bgColor, textColor, icon } = props;
	return (
		action && (
			<TrailingActions>
				<SwipeAction destructive={destructive} onClick={action}>
					<SwipeComponent
						text={text}
						icon={icon}
						textColor={textColor}
						bgColor={bgColor}
						margin="0 0 0 1rem"
					/>
				</SwipeAction>
			</TrailingActions>
		)
	);
};

export default trailingActions;
