import { LeadingActions, SwipeAction } from "react-swipeable-list";
import SwipeComponent from "./SwipeComponent";

const leadingActions = props => {
	const { action, destructive, text, bgColor, textColor, icon } = props;
	return (
		action && (
			<LeadingActions>
				<SwipeAction onClick={action} destructive={destructive}>
					<SwipeComponent
						text={text}
						icon={icon}
						textColor={textColor}
						bgColor={bgColor}
						margin="0 1rem 0 0"
					/>
				</SwipeAction>
			</LeadingActions>
		)
	);
};

export default leadingActions;
