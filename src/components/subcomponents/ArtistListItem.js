import { IoPerson } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const ArtistListItem = ({ item }) => {
	const navigate = useNavigate();
	return (
		<li
			className="flex flex-col items-center gap-2"
			onClick={() => {
				navigate(`/artist/${item.id}`);
			}}
		>
			{item.images[0] ? (
				<div className="relative w-32 h-32">
					<img
						src={item?.images[0]?.url}
						alt="profile avatar"
						className="w-32 h-32 rounded-full absolute top-2 blur-lg opacity-25 brightness-50"
					/>
					<img
						src={item?.images[0]?.url}
						alt="profile avatar"
						className="w-32 h-32 rounded-full absolute"
					/>
				</div>
			) : (
				<IoPerson
					className="rounded-full bg-[#C9CCD1]"
					color="white"
					size="6rem"
				/>
			)}
			<p className="text-center font-semibold text-black/75 dark:text-white text-ellipsis overflow-hidden whitespace-nowrap max-w-full">
				{item.name}
			</p>
		</li>
	);
};

export default ArtistListItem;
