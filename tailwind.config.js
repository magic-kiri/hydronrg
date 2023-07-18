/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#0093DD',
        'accent': '#00923F',
        'dark-gray': '#1F1A17',
        'medium-gray': '#605D5C',
        'gray': '#72706F',
        'light-gray': '#C2C1C1',
        'extralight-gray': '#D0CFCF',
        'white': '#FFFFFF',
        'gr-start': '#E4E5E9',
        'gr-end': '#C5C9D4',
      },
      screens: {
        'sm': '320px', //mobile
        'md': '1024px', //tablet
        'lg': '1440px', //tablet large
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
