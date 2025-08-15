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
        'background': '#111827', // gray-900
        'primary': '#DC2626',    // red-600
        'accent': '#F87171',     // red-400
        'text-primary': '#F3F4F6',    // gray-100
        'text-secondary': '#9CA3AF', // gray-400
      },
    },
  },
  plugins: [],
}
export default config
