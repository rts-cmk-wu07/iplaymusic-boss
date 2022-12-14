import querystring from "querystring";
import { AnimatePresence, motion } from "framer-motion";
import { BsSpotify } from "react-icons/bs";
import LoginPulseFigure from "../components/figures/LoginPulseFigure";
import SplashScreen from "../templates/SplashScreen";
import { useState } from "react";
import { useEffect } from "react";

export default function Login() {
	// get client id from environment variable
	const clientId = process.env.REACT_APP_CLIENT_ID;
	var queryParameters = querystring.stringify({
		response_type: "code",
		client_id: clientId,
		scope:
			"user-read-private user-read-email user-library-read user-library-modify user-top-read user-follow-read user-read-recently-played user-read-currently-playing user-read-playback-state user-modify-playback-state user-read-playback-position ",
		redirect_uri:
			!process.env.NODE_ENV || process.env.NODE_ENV === "development"
				? "http://127.0.0.1:8888/callback"
				: "https://iplaymusik.netlify.app/callback",
		state: "324y732467234763284678324htr",
	});
	const hasSeenSplashLS = JSON.parse(localStorage.getItem("hasSeenSplash"));
	const [hasSeenSplash, setHasSeenSplash] = useState(
		hasSeenSplashLS === null ? false : hasSeenSplashLS
	);

	useEffect(() => {
		localStorage.setItem("hasSeenSplash", hasSeenSplash);
	}, [hasSeenSplash]);

	return (
		<>
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 0.5,
					}}
					className="w-full overflow-hidden h-screen gradient flex flex-col items-center"
				>
					<motion.div
						animate={{
							scale: [1.1, 1.2, 1.1],
							rotate: [0, -30, 0],
							y: [0, -25, 0],
							x: [0, -50, 0],
						}}
						transition={{
							duration: 10,
							repeat: Infinity,
						}}
						className="relative scale-110 -top-32 -left-4 h-[400px]"
					>
						<LoginPulseFigure />
					</motion.div>

					<div className="flex flex-col gap-8 z-40">
						<h2 className="heading text-white  text-center">iPlayMusic</h2>
						<a
							className="rounded-full border-2 border-white p-4 flex items-center justify-between gap-2 text-white text-xl"
							href={`https://accounts.spotify.com/authorize?${queryParameters}`}
						>
							Log in with spotify <BsSpotify color="#1ED760" size="26" />
						</a>
					</div>
				</motion.div>
			</AnimatePresence>
			<AnimatePresence>
				{!hasSeenSplash && <SplashScreen setSplash={setHasSeenSplash} />}
			</AnimatePresence>
		</>
	);
}
