import { AnimatePresence, motion } from 'framer-motion';
import NavBgContext from '../contexts/NavBgContext';
import { useContext } from 'react';

const NavBg = () => {
	const { navBgOpen } = useContext(NavBgContext);
	return (
		<AnimatePresence>
			{navBgOpen && (
				<motion.div
					initial={{ opacity: 0, y: '-100%' }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: '-100%' }}
					className={`fixed h-16 w-screen shadow-xl shadow-additional/5 dark:shadow-additional/50 z-10 bg-secondary top-0`}
				></motion.div>
			)}
		</AnimatePresence>
	);
};

export default NavBg;
