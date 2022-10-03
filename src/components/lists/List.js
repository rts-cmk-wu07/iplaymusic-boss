import { SwipeableList, SwipeableListItem } from "react-swipeable-list";

import trailingActions from "../../templates/List/TrailingActions";
import leadingActions from "../../templates/List/LeadingActions";
import useControls from "../../hooks/useControls";

const List = ({ children, gap }) => {
	const { addToQueue } = useControls();
	console.log(children);

	return (
		<SwipeableList className={`flex w-full ${gap || "gap-2"} flex-col`}>
			{children?.map((child, index) => {
				console.log(child);
				const leadingAction = () =>
					leadingActions({
						action: () => addToQueue(child.props.track),
						destructive: false,
						text: "Queue",
						bgColor: "#93c572",
						textColor: "black",
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
						key={index}
					>
						{child}
					</SwipeableListItem>
				);
			})}
		</SwipeableList>
	);
};

export default List;
