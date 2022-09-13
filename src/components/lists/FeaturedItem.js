import { NavLink } from 'react-router-dom';

const FeaturedItem = ({ title, link, category, date, image }) => {
	return (
		<li
			className={`w-full aspect-3/4 rounded-lg bg-cover bg-center overflow-hidden shadow-xl shadow-additional/40 dark:shadow-additional/80`}
			style={{ backgroundImage: `url(${image})` }}
		>
			<NavLink
				className="w-full h-full flex flex-col items-center justify-center"
				to={link}
			>
				<div className="flex flex-col justify-end px-8 py-12 h-3/4 mt-auto text-white bg-gradient-to-t from-black/95 to-black/0">
					<h2 className="text-3xl font-bold mb-4">{title}</h2>
					<p className="mb-2">{category}</p>
					<p className="text-sm font-medium opacity-50">{date}</p>
				</div>
			</NavLink>
		</li>
	);
};

export default FeaturedItem;
