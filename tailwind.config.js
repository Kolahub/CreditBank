/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ["./**/*.{html,js}"],
  },
  theme: {
    extend: {
      container: {
        center: true,
        // padding: '2rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1450px'
        },
       
      },
      animation: {
        'wobble-horizontal': 'wobble-horizontal 1s ease-in-out 1',
      },
      keyframes: {
        'wobble-horizontal': {
          '0%, 100%': { transform: 'translateX(0)' },
          '15%': { transform: 'translateX(-30px) rotate(-6deg)' },
          '30%': { transform: 'translateX(15px) rotate(6deg)' },
          '45%': { transform: 'translateX(-15px) rotate(-3.6deg)' },
          '60%': { transform: 'translateX(9px) rotate(2.4deg)' },
          '75%': { transform: 'translateX(-6px) rotate(-1.2deg)' },
        },
      },

    },
  },
  plugins: [],
}
