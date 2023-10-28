/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing: {
				200: '200px',
				300: '300px',
				400: '400px',
				500: '500px',
				600: '600px',
			}
		}
	},
	plugins: [],
	safelist: 'text-white'
}
