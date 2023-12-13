import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/page-views/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#EEF4F9',
        green: '#63A033',
        blue: '#356AC3',
        red: '#E60012',
        yellow: '#FCF75E',
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
export default config;
