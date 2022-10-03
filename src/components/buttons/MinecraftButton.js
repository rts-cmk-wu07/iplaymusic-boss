import { motion } from "framer-motion";

const MinecraftButton = ({ children, callback }) => {
	return (
		<motion.button
			initial={{ scale: 0.5, opacity: 0 }}
			animate={{
				scale: 1,
				opacity: 1,
				boxShadow:
					"inset 4px 4px 0px 0px rgba(255,255,255,0.5), inset -4px -6px 0px 0px rgba(0,0,0,0.25)",
				transition: { scale: { delay: 0.25 }, opacity: { delay: 0.25 } },
			}}
			whileTap={{
				boxShadow:
					"inset 4px 4px 0px 0px rgba(0,0,0,0.25), inset -4px -6px 0px 0px rgba(255,255,255,0.5)",
			}}
			className="flex w-full border-4 p-4 border-black bg-stone-400 justify-center items-center font-bold"
			onClick={() => callback && callback()}
		>
			{children}
		</motion.button>
	);
};

export default MinecraftButton;
