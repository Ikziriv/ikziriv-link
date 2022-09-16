/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ["class", ".dark-theme"],
	theme: {
		extend: {
			colors: {
				"lo-contrast": "var(--loContrast)",
				"hi-contrast": "var(--hiContrast)",
			},
		},
	},
	variants: {
		typography: ['dark'],
	},
	plugins: [require('@tailwindcss/typography')],
	presets: [require("windy-radix-palette")],
}
