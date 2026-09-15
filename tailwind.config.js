/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'DM Serif Display'", 'Georgia', 'serif'],
        body: ["'DM Sans'", "'Helvetica Neue'", 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0faf8',
          100: '#d9f2ee',
          200: '#b3e5dd',
          300: '#8dd8cd',
          400: '#67cbbd',
          500: '#64C2B6',
          600: '#4a9e93',
          700: '#3a7d74',
          800: '#2a5c55',
          900: '#1a3b36',
          950: '#0f221f',
        },
        accent: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#E4108B',
          600: '#c20e78',
          700: '#9e0c62',
          800: '#7a094c',
          900: '#560736',
          950: '#320420',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out both',
        'fade-in': 'fadeIn 0.5s ease-out both',
        'slide-down': 'slideDown 0.4s ease-out both',
        'scale-in': 'scaleIn 0.3s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
