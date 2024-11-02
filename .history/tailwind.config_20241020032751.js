/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example primary color
        secondary: '#F59E0B', // Example secondary color
        accent: '#10B981', // Example accent color
        dark: '#111827', // Dark mode color
        light: '#F3F4F6', // Light mode color
        dblue: '#002366',
      },
      keyframes: {
        elegant: {
          '0%': { transform: 'scale(0.5) rotate(0deg)', opacity: '0' },
          '50%': { transform: 'scale(1.05) rotate(180deg)', opacity: '0.5' },
          '100%': { transform: 'scale(1) rotate(360deg)', opacity: '1' },
        },
      },
      animation: {
        elegant: 'elegant 3s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      screens: {
        'lrg': '900px',
        '2xl': '1440px',
        '3xl': '1600px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 2px 4px rgba(0, 0, 0, 0.6)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [

  ],
}