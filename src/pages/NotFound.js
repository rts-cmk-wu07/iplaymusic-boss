import villager from "../assets/sounds/villager.mp3";
import villagerImg from "../assets/images/villager.png";
import H1 from "../components/subcomponents/H1";
import { AnimatePresence, motion } from "framer-motion";
import MinecraftButton from "../components/buttons/MinecraftButton";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import MinecraftProgress from "../components/minecraft/MinecraftProgress";
import { useEffect } from "react";
import Confetti from "react-confetti";

const NotFound = () => {
	const navigate = useNavigate();
	const [gameHasStarted, setGameHasStarted] = useState(false);
	const [points, setPoints] = useState(0);
	const goal = 10;
	const progress = (points / goal) * 100;
	const [pointerIsDown, setPointerIsDown] = useState(false);
	const [gameIsWon, setGameIsWon] = useState(false);

	const handRef = useRef(null);

	// every time a player clicks on the villager, a point will render where you clicked
	const handleClick = e => {
		const audio = new Audio(villager);
		audio.play();
		handRef.current.click();
		if (points < goal) {
			setPoints(points + 1);
		}
	};

	const handlePointerDown = e => {
		setPointerIsDown(true);
	};

	const handlePointerUp = e => {
		setPointerIsDown(false);
	};

	useEffect(() => {
		if (progress >= 100) {
			setGameIsWon(true);
		}
	}, [progress]);

	return (
		<div className="p-4 relative h-[calc(100vh-10rem-5rem)]">
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
				onPointerDown={() => {
					if (gameHasStarted) {
						handlePointerDown();
					}
				}}
				onPointerUp={() => {
					if (gameHasStarted) {
						handlePointerUp();
					}
				}}
				className="absolute"
			/>
			{gameHasStarted && (
				<motion.img
					src="https://i.ibb.co/28TVRFG/minecraft-hand.png"
					alt="Steve's hand"
					ref={handRef}
					animate={{
						rotate: pointerIsDown ? -45 : 0,
						y: pointerIsDown ? 0 : 10,
						scale: pointerIsDown ? 1.2 : 1,
					}}
					className="fixed bottom-[0%] w-[200px] -right-8"
				/>
			)}
			{gameIsWon && (
				<>
					<Confetti
						recycle={false}
						numberOfPieces={1000}
						tweenDuration={15000}
					/>

					<motion.div
						initial={{ y: "100%" }}
						animate={{ y: "0%", transition: { delay: 0.5 } }}
						className="fixed bottom-0 left-0 w-full bg-white dark:bg-additional pb-20 pt-4 px-4 rounded-t-md"
					>
						<H1 text="Hooray"></H1>
						<h2 className="text-xl font-semibold my-4 text-black/75 dark:text-white/75">
							You have completed the game
						</h2>
						<MinecraftButton callback={() => navigate("/")}>
							Please, take me home
						</MinecraftButton>
					</motion.div>
				</>
			)}
			<audio src={villager} autoPlay />
		</div>
	);
};

export default NotFound;
