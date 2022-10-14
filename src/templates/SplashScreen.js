import { motion } from "framer-motion";
import ThemeToggle from "../components/buttons/ThemeToggle";
import LoginPulseFigure from "../components/figures/LoginPulseFigure";
import Breadcrumbs from "../components/splash/Breadcrumbs";
import { useState } from "react";
import Screen1 from "../components/splash/Screen1";
import Screen2 from "../components/splash/Screen2";
import Screen3 from "../components/splash/Screen3";

const SplashScreen = ({ setSplash }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const steps = [() => <Screen1 />, () => <Screen2 />, () => <Screen3 />];
	return (
		<motion.div
			className="fixed w-screen h-screen top-0 left-0 bg-gradient-to-b from-gradientColors-left to-gradientColors-right z-50 p-8 flex flex-col justify-end items-center gap-8"
			initial={{ y: "50%", opacity: 0 }}
			animate={{
				y: 0,
				opacity: 1,
				transition: { duration: 0.75, delay: 0.1, ease: "easeOut" },
			}}
			exit={{
				opacity: 0,
				transition: { duration: 0.25, ease: "easeOut" },
			}}
		>
			<motion.div
				className="absolute -top-32 left-1/2 -translate-x-1/2 pointer-events-none"
				initial={{ scale: 1.1, rotate: 0, y: 0, x: 0, opacity: 0 }}
				animate={{
					scale: [1.1, 1.2, 1.1],
					rotate: [0, -30, 0],
					y: [0, -25, 0],
					x: ["-50%", "-50%", "-50%"],
					opacity: 1,
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					opacity: { delay: 1, duration: 0.5 },
				}}
			>
				<LoginPulseFigure />
			</motion.div>
			<div className="text-center mb-4 text-white">{steps[currentIndex]()}</div>
			<Breadcrumbs currentIndex={currentIndex} setIndex={setCurrentIndex} />
			<button
				className="uppercase tracking-widest text-lg text-white p-2 px-4 w-fit"
				onClick={() => setSplash(true)}
			>
				{currentIndex === 2 ? "Get Started" : "Skip"}
			</button>
			<div className="hidden">
				<ThemeToggle />
			</div>
		</motion.div>
	);
};

export default SplashScreen;
