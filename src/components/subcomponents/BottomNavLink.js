import { NavLink } from 'react-router-dom';
import Icon from './Icon';
import { AnimatePresence, motion } from 'framer-motion';

const BottomNavLink = ({ icon, href, location }) => {
	return (
		<li className="relative w-12 h-12 rounded-full">
			<AnimatePresence>
				{location === href ? (
					<motion.div
						layoutId="bottom-nav-active"
						transition={{
							type: 'spring',
							stiffness: 500,
							damping: 30,
							scaleX: [1, 1.5, 1],
						}}
					>
						<div className="absolute top-0 left-0 w-12 h-12 rounded-full gradient"></div>
					</motion.div>
				) : null}
			</AnimatePresence>
			<NavLink
				className={navData =>
					navData.isActive
						? 'text-white dark:text-black p-3 rounded-full gap-4 cursor-pointer flex absolute w-12 h-12 top-0 left-0'
						: 'gradient-fill p-3 rounded-full gap-4 cursor-pointer flex absolute w-12 h-12 top-0 left-0'
				}
				to={href}
			>
				<Icon iconName={icon} size="24px" />
			</NavLink>
		</li>
	);
};

export default BottomNavLink;
