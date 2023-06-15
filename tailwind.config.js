/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      landWhite: '#FFFFFF',
      landGray: '#090909',
      landBlue: '#0E9AFF',
      landGray2: '#ADADAD',
      landGold: '#F4D171',
      landBlack: '#000000',
    },
    
  },
  plugins: [require("daisyui")],
}
