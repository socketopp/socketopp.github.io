/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				mozilla: '#270D2A',
				chrome: '#2C0B2D'
			},
			fontFamily: {
				carter: 'Carter One, New times roman'
			}
		}
	},
	plugins: [require('@kamona/tailwindcss-perspective')]
};
