/** @type {import('tailwindcss').Config} */

const FACTOR = 1.2

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2563eb',
        'gris': 'rgba(60,60,60,0)',
        'transparent': 'rgba(0,0,0,0)',
      },
      fontSize: {
        'h1': [2 / FACTOR + 'em', 1.5],
        'h2': [1.5 / FACTOR + 'em', 1.5],
        'h3': [1.17 / FACTOR + 'em', 1.5],
        'h4': [1 / FACTOR + 'em', 1.5],
        'h5': [.83 / FACTOR + 'em', 1.5],
        'h6': [.67 / FACTOR + 'em', 1.5],
        'paragraph': [1 / FACTOR + 'em', 1.5],
        'button': [1 / FACTOR + 'em', 1.5],
      },
    },
  },
  plugins: [],
}
