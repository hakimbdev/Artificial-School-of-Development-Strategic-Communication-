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
        'asdsc-navy': '#0F1B2E',
        'asdsc-charcoal': '#1A1A1A',
        'asdsc-gold': '#D4AF37',
        'asdsc-emerald': '#2D7D6F',
        'asdsc-off-white': '#F8F8F6',
        'asdsc-gray': '#E8E8E8',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'sf-pro': ['SF Pro Display', 'sans-serif'],
        'plex-serif': ['IBM Plex Serif', 'serif'],
        'source-sans': ['Source Sans 3', 'sans-serif'],
      },
      lineHeight: {
        'reading': '1.6',
        'reading-lg': '1.8',
      },
      animation: {
        'scroll-in': 'scrollIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        scrollIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
