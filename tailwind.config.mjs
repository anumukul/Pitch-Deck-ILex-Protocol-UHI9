/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(168, 85, 247, 0.3)' },
        },
      },
    },
  },
  plugins: [],
};
