// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'butter-gradient': 'linear-gradient(180deg, #FEC140 0%, #FFDE59 100%)',
        'butter-button': 'radial-gradient(51.82% 51.82% at 50% 50%, #FF8D28 0%, #FFDE59 100%);',
      },
      boxShadow: {
        'butter': '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
