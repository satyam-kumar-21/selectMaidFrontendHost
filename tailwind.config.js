module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 1.5s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)', 'animation-timing-function': 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'none', 'animation-timing-function': 'cubic-bezier(0,0,0.2,1)' },
        },
      },
    },
  },
  plugins: [],
};
