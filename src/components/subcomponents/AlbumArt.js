import { IoMusicalNotes } from 'react-icons/io5';
import { motion } from 'framer-motion';

const AlbumArt = ({ artwork, callback }) => {
	return (
		<>
			{artwork ? (
				<motion.img
					className="h-16 w-16 rounded-md"
					src={artwork}
					alt="album art"
					onClick={callback}
				/>
			) : (
				<motion.div
					className="h-16 w-16 flex justify-center items-center rounded-md bg-gradient-to-br from-primary to-extra-700"
					onClick={callback}
				>
					<IoMusicalNotes className="h-8 w-8 m-4 text-white opacity-50" />
				</motion.div>
			)}
		</>
	);
};

export default AlbumArt;
