import { SwipeableList, SwipeableListItem } from "react-swipeable-list";

import trailingActions from "../../templates/List/TrailingActions";
import leadingActions from "../../templates/List/LeadingActions";
import useControls from "../../hooks/useControls";
import { useContext } from "react";
import ActionContext from "../../contexts/ActionContext";
import { BiListPlus } from "react-icons/bi";
import { MdPersonOutline } from "react-icons/md";

const List = ({ children, gap, showAlbum }) => {
	const { addToQueue } = useControls();
	const { items, open, album } = useContext(ActionContext);

	const handleSwipeRight = track => {
		open.setActionMenuOpen(true);
		items.setActionMenuItems(track?.artists);
		if (showAlbum) {
			album.setActionAlbum(track?.album);
		}
	};

	return (
		<SwipeableList className={`flex w-full ${gap || "gap-2"} flex-col !h-fit`}>
			{children?.map((child, index) => {
				const leadingAction = () =>
					leadingActions({
						action: () => addToQueue(child.props.track),
						destructive: false,
						icon: <BiListPlus size={24} />,
						bgColor: "#1db954",
						textColor: "white",
					});
				const trailingAction = () =>
					trailingActions({
						action: () => handleSwipeRight(child.props.track),
						destructive: false,
						icon: <MdPersonOutline size={24} />,
						bgColor: "#FF1168",
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
