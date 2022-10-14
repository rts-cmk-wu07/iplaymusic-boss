import { IoPlay } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import convertDate from "../../../functions/convertDate";

const FeaturedItem = ({ item }) => {
	const navigate = useNavigate();
	return (
		<li
			className={`w-full aspect-square rounded-lg bg-cover bg-center overflow-hidden shadow-xl shadow-additional/40 dark:shadow-additional/80`}
			style={{ backgroundImage: `url(${item?.images[0]?.url})` }}
		>
			<div
				className="w-full  relative h-full flex flex-col items-center justify-center"
				onClick={() => {
					if (item?.type === "playlist") navigate(`/playlist/${item.id}`);
					else {
						navigate(`/album/${item.id}`);
					}
				}}
			>
				<div className="flex flex-col justify-end px-4 py-4 h-3/4 mt-auto w-full text-white bg-gradient-to-t from-black/50 to-black/0">
					{item?.owner?.display_name && (
						<p className="opacity-90 self-end">
							Made by: {item?.owner?.display_name}
						</p>
					)}
					<div className="flex min-w-0 text-ellipsis overflow-hidden whitespace-nowrap ">
						{item?.artists?.map((artist, index) => {
							return (
								<p
									key={index}
									className="text-lg font-semibold"
									onClick={e => {
										e.stopPropagation();
										navigate(`/artist/${artist.id}`);
									}}
								>
									{(index ? ", " : "") + artist.name}
								</p>
							);
						})}
					</div>

					{item?.release_date && (
						<p className="text-base opacity-50 mt-2">
							{convertDate(item?.release_date)}
						</p>
					)}

					{item?.album_type === "album" && (
						<>
							<p className="text-lg flex items-center absolute right-8 bottom-8">
								{item?.total_tracks ? (
									<>
										{item?.total_tracks} <IoPlay size="20" color="white" />
									</>
								) : (
									""
								)}
							</p>
						</>
					)}
					<p className="text-md gradient tracking-widest uppercase rounded-full shadow-xl py-1 px-3 flex items-center absolute top-3 left-2">
						New {item?.album_type}
					</p>
				</div>
			</div>
		</li>
	);
};

export default FeaturedItem;
