import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1200px',
      },
      colors: {
        primary: '#1b303a',
        secondary: '#2c4a5c',
      },
    },
  },
  plugins: [],
}
export default config