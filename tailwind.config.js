/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/FundoHomePortfolio.png')",
      },
      fontFamily: {
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      boxShadow: {
        button: '0px 0px 68px 7px rgba(254, 217,76, 0.3)',
      },
    },
  },
  plugins: [],
}
