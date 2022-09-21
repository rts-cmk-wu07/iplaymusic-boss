import { motion } from 'framer-motion';
const spinTransition = {
	repeat: Infinity,
	ease: 'linear',
	duration: 5,
};

const LoaderModal = () => {
	return (
		<div className="z-40 w-screen h-screen fixed inset-0 bg-white dark:bg-secondary gap-14 flex flex-col items-center justify-center ">
			<motion.svg
				animate={{
					rotate: 360,
					scale: [0.9, 1.2, 0.9, 1.2, 0.9],
					type: 'spring',
				}}
				transition={spinTransition}
				id="music-logo-solid"
				width="200"
				height="215.963"
				viewBox="0 0 200 215.963"
			>
				<defs>
					<linearGradient
						id="linear-gradient"
						x1="0.5"
						x2="0.5"
						y2="1"
						gradientUnits="objectBoundingBox"
					>
						<stop offset="0" stopColor="#ee0979" />
						<stop offset="1" stopColor="#ff6a00" />
					</linearGradient>
					<linearGradient
						className="hidden dark:block"
						id="linear-gradient-2"
						x1="0.5"
						y1="0"
						x2="0.5"
						y2="1"
						href="#linear-gradient"
					/>
				</defs>
				<circle
					className="block dark:hidden"
					id="Ellipse_16"
					data-name="Ellipse 16"
					cx="12.8"
					cy="12.8"
					r="12.8"
					transform="translate(0 25.763)"
					fill="url(#linear-gradient)"
				/>
				<path
					className="block dark:hidden"
					id="Path_650"
					data-name="Path 650"
					d="M62.9,52.9l41.5,24a12.579,12.579,0,0,1,0,21.8l-41.5,24a12.536,12.536,0,0,1-18.8-10.9v-48A12.5,12.5,0,0,1,62.9,52.9Z"
					transform="translate(7.646 12.498)"
					fill="url(#linear-gradient)"
				/>
				<path
					className="block dark:hidden"
					id="Path_651"
					data-name="Path 651"
					d="M29.215,82.985A14.505,14.505,0,0,0,14.913,68.2,14.6,14.6,0,0,0,.5,82.985V179.09c0,15.016,5.922,27.145,16.2,33.267A28.763,28.763,0,0,0,31.785,216.4c6.7,0,13.855-2.079,20.894-6.238L183.07,132.308a36.473,36.473,0,0,0,.112-62.145L70.668,2.473A13.994,13.994,0,0,0,51.115,7.787,15,15,0,0,0,56.254,28L128.992,71.78a36.207,36.207,0,0,1,14.749,29.455,35.751,35.751,0,0,1-13.184,28.185L77.707,160.955a33.644,33.644,0,0,1-31.4-1.733c-10.726-6.353-16.872-17.673-17.095-30.379Z"
					transform="translate(-0.5 -0.437)"
					fill="url(#linear-gradient)"
				/>
				<g
					className=" hidden dark:block"
					id="Group_391"
					data-name="Group 391"
					transform="translate(0 28.7)"
				>
					<path
						className=" hidden dark:block"
						id="Path_321"
						data-name="Path 321"
						d="M14.3,33.7A9.3,9.3,0,1,1,5,43a9.347,9.347,0,0,1,9.3-9.3m0-5A14.3,14.3,0,1,0,28.6,43,14.3,14.3,0,0,0,14.3,28.7Z"
						transform="translate(0 -28.7)"
						fill="url(#linear-gradient)"
					/>
				</g>
				<g
					className=" hidden dark:block"
					id="Group_392"
					data-name="Group 392"
					transform="translate(48.6 56.6)"
				>
					<path
						className=" hidden dark:block"
						id="Path_322"
						data-name="Path 322"
						d="M62.7,61.6h0a8.923,8.923,0,0,1,4.5,1.2l46.4,26.8a8.986,8.986,0,0,1,4.5,7.8,8.868,8.868,0,0,1-4.5,7.8L67.2,132a8.923,8.923,0,0,1-4.5,1.2,9.12,9.12,0,0,1-9.1-9.1V70.7a9.183,9.183,0,0,1,9.1-9.1m0-5A14.143,14.143,0,0,0,48.6,70.7v53.5a14.046,14.046,0,0,0,21.1,12.2l46.4-26.8a14,14,0,0,0,0-24.3L69.7,58.5a13.66,13.66,0,0,0-7-1.9Z"
						transform="translate(-48.6 -56.6)"
						fill="url(#linear-gradient-2)"
					/>
				</g>
				<g
					className=" hidden dark:block"
					id="Group_393"
					data-name="Group 393"
					transform="translate(0)"
				>
					<path
						className=" hidden dark:block"
						id="Path_323"
						data-name="Path 323"
						d="M63,5a8.781,8.781,0,0,1,4.7,1.3L180.2,71.8a29.837,29.837,0,0,1-.1,51.6L49.7,198.6c-6.1,3.5-12.5,5.4-18.3,5.4a24.434,24.434,0,0,1-12.6-3.3C10,195.7,5,185.5,5,172.8v-93a9.3,9.3,0,0,1,18.6,0v44.5h0a39.085,39.085,0,0,0,19.6,33.6,40.178,40.178,0,0,0,19.9,5.4,40.8,40.8,0,0,0,16.1-3.4l.2-.1.2-.1,52.8-30.5.3-.2.3-.2a39.94,39.94,0,0,0-1.8-63.9l-.2-.1-.2-.1L58.3,22.4A9.336,9.336,0,0,1,63,5m0-5a14.31,14.31,0,0,0-7.2,26.7L128.5,69a34.889,34.889,0,0,1,14.7,28.6A34.408,34.408,0,0,1,130,124.9L77.2,155.4a34.693,34.693,0,0,1-14.1,3,35.251,35.251,0,0,1-17.4-4.7,34.03,34.03,0,0,1-17.1-29.4V79.8A14.3,14.3,0,1,0,0,79.8v93c0,14.5,5.9,26.3,16.2,32.2a30.432,30.432,0,0,0,15.1,4,41.028,41.028,0,0,0,20.8-6.1l130.5-75.3a34.785,34.785,0,0,0,.1-60.2L70.2,1.9A14.374,14.374,0,0,0,63,0Z"
						fill="url(#linear-gradient)"
					/>
				</g>
			</motion.svg>

			<motion.h2
				animate={{ scale: [0.9, 1.2, 0.9, 1.2, 0.9], type: 'spring' }}
				transition={{ duration: 5, loop: Infinity }}
				className="heading dark:text-white text-black "
			>
				iPlayMusic
			</motion.h2>
		</div>
	);
};

export default LoaderModal;
