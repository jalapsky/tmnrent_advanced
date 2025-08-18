import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0D0B12',
        'primary': '#7F56D9',
        'accent': '#A78BFA',
        'card': '#1A1622',
        'text-primary': '#F9FAFB',
        'text-secondary': '#A0AEC0',
        'border': '#2D3748',
      },
    },
  },
  plugins: [],
}
export default config
