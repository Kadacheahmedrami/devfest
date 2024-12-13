import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      boxShadow: {
        'custom-glow': '0px 4px 16px 3px rgba(37, 27, 228, 0.20)',
      },
  		colors: {
  			blue: {
  				'1': 'var(--blue-1)',
  				'2': 'var(--blue-2)',
  				'3': 'var(--blue-3)',
  				'4': 'var(--blue-4)',
  				'5': 'var(--blue-5)',
  				'6': 'var(--blue-6)',
  				'7': 'var(--blue-7)',
  				'8': 'var(--blue-8)',
  				'9': 'var(--blue-9)',
  				'10': 'var(--blue-10)'
  			},
  			light: {
  				'1': 'var(--light-1)',
  				'2': 'var(--light-2)',
  				'3': 'var(--light-3)'
  			},
  			gray: {
  				'1': 'var(--gray-1)',
  				'2': 'var(--gray-2)',
  				'3': 'var(--gray-3)',
  				'4': 'var(--gray-4)',
  				'5': 'var(--gray-5)'
  			},
  			dark: {
  				'1': 'var(--dark-1)',
  				'2': 'var(--dark-2)',
  				'3': 'var(--dark-3)',
  				'4': 'var(--dark-4)'
  			},
  			white: 'var(--white)',
  			lightgray: 'var(--light-gray-1)',
  			offwhite: 'var(--off-white)',
  			black: 'var(--black)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
