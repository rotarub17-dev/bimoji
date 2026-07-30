/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#FFFBF7",
          100: "#FBF3EC",
          200: "#F5E6D8",
          300: "#EFD4B8",
        },
        blush: {
          50: "#FFF5F7",
          100: "#FFE4EC",
          200: "#FFC9DC",
          300: "#FFA6C5",
          400: "#FF7FAA",
          500: "#F45F8E",
          600: "#D94A78",
        },
        rose: {
          50: "#FBF0EE",
          100: "#F4D9D3",
          200: "#E9B3A7",
          300: "#D98C7C",
          400: "#C76B58",
          500: "#B05542",
          600: "#8F4232",
        },
        gold: {
          50: "#FBF6EE",
          100: "#F5E6CC",
          200: "#E8C99A",
          300: "#D4A86A",
          400: "#C0904A",
          500: "#A67832",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Poppins"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'pop': 'pop 0.4s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pop: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
