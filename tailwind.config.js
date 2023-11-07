/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Oregano: ['var(--oregano)'],
        Varela: ['var(--varela)'],
        Salsa: ['var(--salsa)'],
      },
    },
  },
  plugins: [],
}
