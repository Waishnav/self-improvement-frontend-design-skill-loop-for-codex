/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 18px 50px -24px rgba(0,0,0,0.65)',
      },
      animation: {
        float: 'float 9s ease-in-out infinite',
        drift: 'drift 14s linear infinite',
        pulseSlow: 'pulseSlow 7s ease-in-out infinite',
        revealUp: 'revealUp 900ms ease-out both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        drift: {
          '0%': { transform: 'translateX(-7%)' },
          '50%': { transform: 'translateX(7%)' },
          '100%': { transform: 'translateX(-7%)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
