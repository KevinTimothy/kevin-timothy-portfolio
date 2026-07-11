/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        accent: {
          50:  '#eeecff',
          100: '#d9d5ff',
          200: '#b8b0ff',
          300: '#9485f5',
          400: '#7c6ef0',
          500: '#6758e8',
          600: '#5647d4',
          700: '#4537b8',
          800: '#362b90',
          900: '#241d62',
        },
        ink: {
          primary:   '#0b0b0b',
          secondary: '#52514e',
          muted:     '#898781',
        },
        border: {
          light: '#e1e0d9',
          dark:  '#2c2c2a',
        },
      },
      boxShadow: {
        card:      '0 1px 3px rgba(11,11,11,0.06), 0 4px 16px rgba(11,11,11,0.06)',
        'card-hover': '0 4px 12px rgba(11,11,11,0.10), 0 12px 32px rgba(11,11,11,0.10)',
        glow:      '0 0 48px rgba(103,88,232,0.30)',
      },
      animation: {
        'fade-up':  'fadeUp 0.6s ease both',
        'fade-in':  'fadeIn 0.5s ease both',
        float:      'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:  { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
        float:   { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
      },
    },
  },
  plugins: [],
}
