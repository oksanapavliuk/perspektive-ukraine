/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				black: '#000000',
				yellow: '#fec608',
				blue: '#099cc8',
				darkblue: "#081f2d"
			},
		},
    	container: {
    	  padding: {
    	    DEFAULT: '1rem',
    	    sm: '2rem',
    	    lg: '4rem',
    	    xl: '5rem',
    	    '2xl': '6rem',
    	  },
    	},
	},
	plugins: [],
}
