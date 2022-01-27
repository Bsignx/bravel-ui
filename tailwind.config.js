// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: ({ colors }) => ({
      'gray-900': '#111827',
      'gray-50': '#F9FAFB',
      'fuchsia-500': '#D946EF',
      'orange-500': '#F97316',
      'green-500': '#22C55E',
      'rose-500': '#F43F5E',
      'gray-700': '#374151',
      'gray-500': '#6B7280',
      ...colors,
    }),
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [],
}
