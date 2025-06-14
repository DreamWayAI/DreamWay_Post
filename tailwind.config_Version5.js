/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dw-bg': '#0A1029',
        'dw-panel': '#101C3A',
        'dw-accent': '#13F4FF',
        'dw-glow': '#23BFFF',
        'dw-purple': '#5C63F6',
        'dw-pink': '#F953FF',
        'dw-text': '#FFFFFF',
      },
      boxShadow: {
        'dw-neon': '0 0 16px #13F4FF, 0 0 32px #23BFFF',
      },
    },
  },
  plugins: [],
}