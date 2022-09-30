import villager from "../assets/sounds/villager.mp3";
import villagerImg from "../assets/images/villager.png";
import H1 from "../components/subcomponents/H1";
import { AnimatePresence, motion } from "framer-motion";
import MinecraftButton from "../components/buttons/MinecraftButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MinecraftProgress from "../components/minecraft/MinecraftProgress";

const NotFound = () => {
	const navigate = useNavigate();
	const [gameHasStarted, setGameHasStarted] = useState(false);
	const [points, setPoints] = useState(0);
	const goal = 404;
	const progress = (points / goal) * 100;

	// every time a player clicks on the villager, a point will render where you clicked
	const handleClick = e => {
		const audio = new Audio(villager);
		audio.play();
		setPoints(points + 1);
	};

	return (
		<div className="p-4 relative">
			<AnimatePresence>
				{!gameHasStarted ? (
					<motion.div
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
					>
						<H1 text="404" />
						<h2 className="text-xl font-semibold mb-4 dark:text-white">
							Oops, we couldn't find this page
						</h2>
						<div className="flex flex-col gap-2">
							<MinecraftButton callback={() => navigate("/")}>
								Go back home
							</MinecraftButton>
							<MinecraftButton callback={() => setGameHasStarted(true)}>
								Let's play a game
							</MinecraftButton>
						</div>
					</motion.div>
				) : null}
			</AnimatePresence>
			{points !== 0 && (
				<div className="absolute top-0 left-0 w-full px-4">
					<MinecraftProgress progress={progress} livesLeft={goal - points} />
				</div>
			)}
			<motion.img
				initial={{ y: "100%" }}
				animate={{
					y: points ? "5%" : "0%",
					rotate: [5, -5, 5],
					scale: 1,
					transition: {
						rotate: { repeat: Infinity, ease: "easeInOut", duration: 2 },
					},
				}}
				src={villagerImg}
				alt="villager"
				whileTap={{
					scale: 0.75,
					transition: { type: "spring", stiffness: 500 },
				}}
				onClick={() => {
					if (gameHasStarted) {
						handleClick();
					}
				}}
				className="absolute"
			/>
			<audio src={villager} autoPlay />
		</div>
	);
};

export default NotFound;

// import { motion } from "framer-motion";
// import { createRef, useRef } from "react";

// const MinecraftHand = () => {
//   const handRef = useRef(null);

//   function givBoks() {
//     handRef.target.click();
//   }

//   return (
//     <motion.img
//       ref={handRef}
//       initial={{ y: 75 }}
//       whileTap={{ y: -50, rotate: -60, scale: 1.25 }}
//       className="absolute bottom-[35%] w-[200px] -right-8"
//       src="https://i.ibb.co/28TVRFG/minecraft-hand.png"
//       alt="hej"
//     ></motion.img>
//   );
// };

// export default MinecraftHand;
