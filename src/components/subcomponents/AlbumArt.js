import { IoMusicalNotes } from 'react-icons/io5';

const AlbumArt = ({ artwork }) => {
	return (
		<>
			{artwork ? (
				<img className="h-16 w-16 rounded-md" src={artwork} alt="album art" />
			) : (
				<div className="h-16 w-16 flex justify-center items-center rounded-md bg-gradient-to-br from-primary to-extra-700">
					<IoMusicalNotes className="h-8 w-8 m-4 text-white opacity-50" />
				</div>
			)}
		</>
	);
};

export default AlbumArt;
