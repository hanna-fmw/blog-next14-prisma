import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'color-primary': '#f3f4f6',
				'hero-content-color': '#e5e5e5',
				'navbar-link-color': '#e5e5e5',
				'navbar-link-hover-color': '#f5f5f5',
				'tag-color': '#e5e5e5',
				'date-color': '#6C757D',
				'quote-color': '#D4A373',
				'horizontal-line-color': '#E5E5E5',
			},
			backgroundImage: {
				'hero-bg': "url('../public/hero-image.png')",
			},
			fontFamily: {
				roboto: ['var(--font-roboto)', 'sans-serif'],
				spartan: ['var(--font-spartan)', 'sans-serif'],
				lora: ['var(--font-lora)', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
export default config
