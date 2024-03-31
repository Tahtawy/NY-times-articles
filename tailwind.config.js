/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'text-secondary': '#363636',
      },
    },
  },
  // Add only if you want to use the @tailwindcss/forms package
  plugins: [require('@tailwindcss/forms')],
};
