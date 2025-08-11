/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-cream': 'rgb(251, 228, 214)',
        'primary-blue': '#0B2545',
        'secondary-blue': '#1D4E89',
        'off-white': '#F8F8F5',
      },
    },
  },
  plugins: [],
};
