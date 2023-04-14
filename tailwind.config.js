/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Aquí se modifica todo el estilo por defecto
  theme: {
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    // Aquí se extiende todo el estilo por defecto
    extend: {
      colors: {
        cyan: '#9cdbff',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
};
