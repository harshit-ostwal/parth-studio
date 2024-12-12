/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			keyframes: {
				Anime: {
					from: { transform: "translate(-10%,30%)", },
					to: { transform: "translate(30%,-10%)" },
				},
			},
			animation: {
				Anime: 'Anime 3s linear infinite alternate',
			},
			fontFamily: {
				'Gilroy': 'var(--Gilroy)',
				'Gyahegi': 'var(--Gyahegi)',
				'SaltyFeathers': 'var(--SaltyFeathers)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {}
		},
	},
	plugins: [require("tailwindcss-animate")]
};