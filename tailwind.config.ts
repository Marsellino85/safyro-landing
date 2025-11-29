import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#0F172A',
        'gradient-end': '#1E293B',
        'primary-blue': '#0F52BA',
        'primary-blue-hover': '#2563EB',
        'primary-blue-pressed': '#0A3D8F',
        'text-white': '#FFFFFF',
        'text-light': '#E2E8F0',
        'text-muted': '#A0AEC0',
        'text-grey': '#718096',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      fontSize: {
        logo: '96px',
        tagline: '32px',
        value: '20px',
        timeline: '24px',
      },
    },
  },
  plugins: [],
}
export default config

