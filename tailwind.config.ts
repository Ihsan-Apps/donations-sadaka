import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: 'var(--font-geist-sans)',
				mono: 'var(--font-geist-mono)',
			},
		},
	},
	plugins: [daisyui],
} as any;

export default {
	...config,
	daisyui: {
		themes: ['light', 'dark', 'cupcake', 'retro', 'cyberpunk', 'valentine', 'aqua', 'forest', 'luxury', 'synthwave'],
		darkTheme: 'dark',
	},
};
