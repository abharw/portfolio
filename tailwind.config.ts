import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'star-movement-bottom': {
            '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
            '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
          },
          'star-movement-top': {
            '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
            '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
          },
              shine: {
                  '0%': { 'background-position': '100%' },
                  '100%': { 'background-position': '-100%' },
                },
              },
      animation: {
        shine: 'shine 5s linear infinite',
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate',
      },
    },
  },
  plugins: [],
} satisfies Config;
