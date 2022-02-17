module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        darky: '#475569',
        lightBlue: '#C7D2FD',
        lightGreen: '#EEFCEB',
      },
      maxHeight: {
        150: '37.5rem', // 600px
      },
      minHeight: {
        '90vh': '90vh',
      },
    },
    fontFamily: {
      display: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI'],
      body: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI'],
    },
  },
  plugins: [],
}
