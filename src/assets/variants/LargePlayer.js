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
	initial: {},
	open: {},
	exit: {},
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

export { containerV, albumArtV, titleV, controlV, progressV, closeV };
