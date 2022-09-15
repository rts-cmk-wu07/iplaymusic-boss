import { motion } from 'framer-motion';
import { IoPlayCircle, IoPlayForward } from 'react-icons/io5';
import AlbumArt from '../components/subcomponents/AlbumArt';

const Player = ({ isPlaying, isOpen, song }) => {
	return (
		<motion.section className="fixed gradient bottom-20 rounded-lg left-2 right-2 p-1 shadow-lg shadow-[#FF6A00]/50">
			<div className="flex items-center gap-2">
				<AlbumArt />
				<div className="min-w-0">
					<h2 className="text-white font-bold w-full whitespace-nowrap overflow-hidden text-ellipsis">
						{song?.name || 'Never gonna let you down'}
					</h2>
					<p className="text-sm text-white opacity-75 whitespace-nowrap overflow-hidden text-ellipsis">
						{song?.artist || 'Rick Astley'}
					</p>
				</div>
				<div className="flex gap-1 text-white items-center ml-auto mr-2">
					<button className="rounded-full p-1">
						<IoPlayCircle className="w-12 h-12" />
					</button>
					<button className="rounded-full p-1">
						<IoPlayForward className="w-6 h-6" />
					</button>
				</div>
			</div>
		</motion.section>
	);
};

export default Player;
