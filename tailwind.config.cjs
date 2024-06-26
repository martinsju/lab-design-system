/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		fontSize: {
			xs: 14,
			sm: 16,
			md: 18,
			lg: 20,
			xl: 24,
			'2xl': 32
		},
		colors: {
			transparent: 'transparent',
			white: '#ffffff',
			black: '#000000',

			gray: {
				900: '#121214',
				800: '#202024',
				400: '#7c7c8a',
				200: '#e1e1e6',
				100: '#c4c4cc'
			},
			cyan: {
				500: '#81d8f7',
				300: '#9be1fb'
			}
		},
		extend: {
			fontFamily: {
				sans: 'Inter, sans-serif'
			}
		}
	},
	plugins: []
}
