/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Outfit'", 'system-ui', 'sans-serif'],
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
      transitionTimingFunction: {
        // The single easing that makes motion read as designed rather than default-150ms.
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        900: '900ms',
      },
      maxWidth: {
        // Single source of truth for the page container width.
        site: '1400px',
      },
      boxShadow: {
        // Derived from brand-900 / brand-950 so elevation stays in-palette.
        'brand-sm': '0 2px 8px -2px rgba(26, 59, 54, 0.08)',
        'brand-md': '0 12px 28px -8px rgba(26, 59, 54, 0.14)',
        'brand-lg': '0 24px 60px -16px rgba(15, 34, 31, 0.28)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out both',
        'fade-in': 'fadeIn 0.5s ease-out both',
        'slide-down': 'slideDown 0.4s ease-out both',
        'scale-in': 'scaleIn 0.3s ease-out both',
        marquee: 'marquee 44s linear infinite',
        'marquee-slow': 'marquee 70s linear infinite',
        'float-soft': 'floatSoft 7s ease-in-out infinite',
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
        // Revamp additions. `marquee` translates -50% because the track is
        // rendered twice (original + aria-hidden clone) for a seamless loop.
        marquee: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
        sweepRight: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        floatSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
    // No plugins: the site styles long-form copy with the hand-rolled
  // .prose-editorial class in src/styles/global.css, never `prose`.
  plugins: [],
};
