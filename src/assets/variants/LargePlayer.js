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
};

const titleV = {
	name: {
		initial: {},
		open: {},
		exit: {},
	},
	artist: {
		initial: {},
		open: {},
		exit: {},
	},
};

const controlV = {
	back: {
		initial: {},
		open: {},
		exit: {},
	},
	play: {
		initial: {},
		open: {},
		exit: {},
	},
	next: {
		initial: {},
		open: {},
		exit: {},
	},
};

const progressV = {
	initial: {},
	open: {},
	exit: {},
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
