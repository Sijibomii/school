module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'school-grey': '#243c5a',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url('../image/img.jpg') top left / cover, no-repeat",
      }
    },
  },
  plugins: [],
}
