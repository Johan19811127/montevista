/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        pulseDropShadow: {
          '0%, 100%': {
            transform: 'scale(1)',
            filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.6))',
          },
          '50%': {
            transform: 'scale(1.1)',
            filter: 'drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.4))',
          },
        },
      },
      animation: {
        'pulse-drop-shadow': 'pulseDropShadow 2s ease-in-out infinite',
      },
    },
  },

};