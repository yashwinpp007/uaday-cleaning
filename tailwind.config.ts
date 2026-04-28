import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#5da832',
        'brand-green-dark': '#3a7a10',
        'brand-green-light': '#f0f7e6',
        'brand-yellow': '#ffd700',
        'brand-yellow-dark': '#c9a800',
        'dark-text': '#111827',
        'body-text': '#374151',
        'light-border': '#e2e8f0',
        'off-white': '#f9fafb',
      },
      fontFamily: {
        heading: ['var(--font-raleway)', 'sans-serif'],
        body: ['var(--font-plus-jakarta)', 'sans-serif'],
        sans: ['var(--font-plus-jakarta)', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      boxShadow: {
        '3d-green': '0 8px 0 0 #3a7a10',
        '3d-yellow': '0 8px 0 0 #c9a800',
        card: '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 25px 50px rgba(0,0,0,0.12)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s ease-in-out infinite',
        'scroll-left': 'scroll-left 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        'pulse-ring': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.7' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
