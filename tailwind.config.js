export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      animation: {
        'pulse-soft': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
