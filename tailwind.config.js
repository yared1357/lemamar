/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        jaguar: {
          // Light backgrounds
          white: '#ffffff',
          cream: '#f7f7f9',
          mist: '#eef0f3',
          // Light surfaces
          card: '#ffffff',
          'card-hover': '#fafafb',
          // Text on light
          ink: '#1a1a22',
          slate: '#4a4a55',
          ash: '#7a7a85',
          // Borders on light
          line: '#e4e4ea',
          // Brand accents
          red: '#E31B23',
          'red-dark': '#b8141a',
          'red-light': '#ff3535',
          gold: '#D4AF37',
          'gold-dark': '#a88628',
          'gold-light': '#e6c659',
          // Dark tokens (hero overlays, footer)
          dark: '#1a1a22',
          'dark-soft': '#26262f',
          'dark-mid': '#32323d',
        },
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      screens: {
        xs: '420px',
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-up': 'fade-up 0.6s ease-out',
        'slide-up': 'slide-up 0.4s ease-out',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '80%, 100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
