// tailwind.config.js
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-parisienne)", "serif"],
        serif: ["var(--font-karla)", "sans-serif"],
      },
      colors: {
        'brand-black': 'var(--color-brand-black)',
        'brand-white': 'var(--color-brand-white)',
      },
    },
  },
  plugins: [],
};
