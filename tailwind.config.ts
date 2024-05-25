module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'conic-gradient(from 3deg at 45% 43%, #FF4450 10%, #000000 25%, #4D44FF 36%, #FF4450 58%, #000000 80%, #FF4450 99%, #073AFF00 100%), radial-gradient(75% 75% at 50% 50%, #FF4450 78%, #073AFFFF 100%)',
      },
      backgroundSize: {
        'custom-size': '100% 100%',
      },
      backgroundPosition: {
        'custom-position': '0px 0px, 0px 0px',
      },
    },
  },
  plugins: [],
}
