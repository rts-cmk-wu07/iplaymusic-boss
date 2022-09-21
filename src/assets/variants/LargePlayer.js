const containerV = {
	initial: {
		opacity: 0,
		height: '0%',
	},
	open: {
		opacity: 1,
		height: '100%',
	},
	exit: {
		opacity: 0,
		height: '0%',
	},
};

const albumArtV = {
	bg: {
		initial: {
			opacity: 0,
			scale: 0.5,
		},
		open: {
			opacity: 1,
			scale: 1,
			y: 0,
			filter: 'blur(0px)',
			transition: {
				delay: 0.5,
				ease: 'easeOut',
			},
		},
		exit: {
			opacity: 0,
			scale: 0.5,
			y: 80,
			filter: 'blur(24px)',
		},
	},
	art: {
		initial: {
			opacity: 0,
		},
		open: {
			opacity: 1,
			rotate: ['0deg', '360deg'],
			transition: {
				delay: 0.5,
				ease: 'easeOut',
				rotate: {
					duration: 10,
					repeat: Infinity,
					ease: 'linear',
				},
			},
		},
		exit: {
			opacity: 0,
		},
	},
};

const titleV = {
	name: {
		initial: {
			scale: 0.75,
			opacity: 0,
			y: 8,
			filter: 'blur(4px)',
		},
		open: {
			scale: 1,
			opacity: 1,
			y: 0,
			filter: 'blur(0px)',
			transition: {
				delay: 0.75,
				duration: 0.5,
				ease: 'easeOut',
			},
		},
		exit: {
			scale: 0.5,
			opacity: 0,
			filter: 'blur(4px)',
		},
	},
	artist: {
		initial: {
			scale: 0.75,
			opacity: 0,
			y: 4,
			filter: 'blur(4px)',
		},
		open: {
			scale: 1,
			opacity: 1,
			y: 0,
			filter: 'blur(0px)',
			transition: {
				delay: 1,
				duration: 0.5,
				ease: 'easeOut',
			},
		},
		exit: {
			scale: 0.5,
			opacity: 0,
			filter: 'blur(4px)',
		},
	},
};

const controlV = {
	skipBack: {
		initial: {
			opacity: 0,
			x: '150%',
		},
		open: {
			opacity: 1,
			x: '0%',
			transition: {
				delay: 1,
			},
		},
		exit: {
			opacity: 0,
			x: '150%',
		},
	},
	back: {
		initial: {
			opacity: 0,
			x: '150%',
		},
		open: {
			opacity: 1,
			x: '0%',
			transition: {
				delay: 0.9,
			},
		},
		exit: {
			opacity: 0,
			x: '150%',
		},
	},
	play: {
		initial: {
			opacity: 0,
			scale: 0.5,
		},
		open: {
			opacity: 1,
			scale: 1,
			transition: {
				delay: 0.5,
				type: 'spring',
				stiffness: 150,
			},
		},
		exit: {
			opacity: 0,
			scale: 0.5,
		},
	},
	next: {
		initial: {
			opacity: 0,
			x: '-150%',
		},
		open: {
			opacity: 1,
			x: '0%',
			transition: {
				delay: 0.9,
			},
		},
		exit: {
			opacity: 0,
			x: '-150%',
		},
	},
	skipNext: {
		initial: {
			opacity: 0,
			x: '-150%',
		},
		open: {
			opacity: 1,
			x: '0%',
			transition: {
				delay: 1,
			},
		},
		exit: {
			opacity: 0,
			x: '-150%',
		},
	},
};

const progressV = {
	bar: {
		initial: {
			width: '0%',
		},
		open: {
			width: '100%',
			transition: {
				delay: 0.5,
				duration: 0.5,
				ease: 'easeOut',
			},
		},
		exit: {
			width: '0%',
		},
	},
	inner: {
		initial: {
			width: '0%',
		},
		open: progressState => ({
			width: `${progressState}%`,
			transition: {
				duration: 0.5,
				ease: 'easeOut',
			},
		}),
	},
	time: {
		initial: {
			opacity: 0,
			y: 8,
			filter: 'blur(4px)',
		},
		open: {
			opacity: 1,
			y: 0,
			filter: 'blur(0px)',
			transition: {
				delay: 1.25,
				duration: 0.5,
				ease: 'easeOut',
			},
		},
		exit: {
			opacity: 0,
			y: 8,
			filter: 'blur(4px)',
		},
	},
};

const closeV = {
	initial: {
		opacity: 0,
	},
	open: {
		opacity: 1,
		filter: 'blur(0px)',
		transition: {
			delay: 0.5,
		},
	},
	exit: {
		scale: 0.5,
		opacity: 0,
		filter: 'blur(2px)',
	},
};

const imgV = {
	initial: {
		opacity: 0,
	},
	open: {
		opacity: 0.5,
		filter: 'blur(0px)',
		transition: {
			delay: 0.3,
			duration: 0.25,
		},
	},
	exit: {
		opacity: 0,
		filter: 'blur(16px)',
		transition: {
			duration: 1,
			delay: 0.5,
		},
	},
};

export { containerV, albumArtV, titleV, controlV, progressV, closeV, imgV };
