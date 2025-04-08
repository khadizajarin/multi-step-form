import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', 
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Add more paths if necessary
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
