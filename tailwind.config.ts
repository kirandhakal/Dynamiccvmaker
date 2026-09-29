import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,jsx,ts,tsx,mdx}', './components/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: { extend: {} },
  plugins: [],
};

export default config;
