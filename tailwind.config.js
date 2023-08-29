/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				mozilla: '#240108',
				chrome: '#280003'
			},
			fontFamily: {
				carter: 'Carter One, New times roman',
				meriweather: 'Merriweather, New times roman',
				lora: 'Lora, New times roman'
			}
		}
	},
	plugins: [require('@kamona/tailwindcss-perspective')]
};
