/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		extend: {
			colors: {
				primary: '#FF1168',
				secondary: '#341931',
				additional: '#111625',
				gradientColors: {
					left: '#EE0979',
					right: '#FF6A00',
				},
			},

			fontFamily: {
				sans: ['Poppins, sans-serif', ...defaultTheme.fontFamily.sans],
			},
			gridTemplateColumns: {
				'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr));',
				'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
			},
			gridTemplateRows: {
				'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
				'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
			},
			strokeWidth: {
				3: '3px',
			},
		},
	},
	darkMode: 'class',
	plugins: [
		function ({ addVariant }) {
			addVariant('child', '& > *');
			addVariant('child-hover', '& > *:hover');
		},
	],
};
