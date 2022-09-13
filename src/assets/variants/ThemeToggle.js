const container = {
	light: {
		scale: 1,
	},
	dark: {
		scale: 1,
	},
	auto: {
		scale: 1,
	},
};

const sun = {
	circle: {
		light: {
			opacity: 1,
			scale: 1,
			filter: 'blur(0px)',
		},
		dark: {
			opacity: 0,
			scale: 0.5,
			filter: 'blur(2px)',
		},
		auto: {
			opacity: 0,
			scale: 0.5,
			filter: 'blur(2px)',
		},
	},
	rays: {
		light: i => ({
			opacity: 1,
			rotate: `${(360 / 8) * i}deg`,
			x: 14,
			width: 6,
			filter: 'blur(0px)',
			transition: {
				delay: i * 0.01,
			},
		}),
		dark: i => ({
			opacity: 0,
			x: 0,
			width: 4,
			rotate: `${(360 / 8) * i}deg`,
			filter: 'blur(2px)',
			transition: {
				duration: 0.2,
				delay: i * 0.01,
			},
		}),
		auto: i => ({
			x: 12,
			opacity: 0.75,
			width: 4,
			rotate: `${(360 / 8) * i}deg`,
			filter: 'blur(0px)',
			transition: {
				duration: 0.25,
				delay: i * 0.1,
			},
		}),
	},
};

const moon = {
	light: {
		opacity: 0,
		scale: 0.5,
		filter: 'blur(2px)',
		rotate: '90deg',
	},
	dark: {
		opacity: 1,
		scale: 1,
		filter: 'blur(0px)',
		rotate: '0deg',
	},
	auto: {
		opacity: 1,
		scale: 0.75,
		filter: 'blur(0px)',
		rotate: '0deg',
	},
};

export { container, sun, moon };
