/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'off-white': 'hsl(0, 0%, 98%);',
			'medium-gray': 'hsl(0, 0%, 41%);',
			'almost-black': 'hsl(0, 0%, 8%);',
		},
		extend: {
			fontFamily: {
				epilogue: ["Epilogue", "sans-serif"],
			},
		},
	},
	plugins: [],
}
