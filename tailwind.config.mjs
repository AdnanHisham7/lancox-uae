/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#fbfaf7',
          subtle: '#f5f3ed',
          dark: '#edeae0',
        },
        surface: {
          DEFAULT: '#ffffff',
          elevated: '#ffffff',
          warm: '#f9f8f4',
        },
        ink: {
          DEFAULT: '#12161c',
          secondary: '#3f4753',
          muted: '#6b7280',
          subtle: '#9ca3af',
        },
        bronze: {
          50: '#fdfbf5',
          100: '#f9f3e3',
          200: '#f1e4c0',
          300: '#e5cd94',
          400: '#d4af61',
          500: '#b58424', // signature brand accent
          600: '#9b6c1a',
          700: '#7a5116',
          800: '#644217',
          900: '#553717',
        },
        industrial: {
          navy: '#0f172a',
          slate: '#334155',
          steel: '#64748b',
          border: '#e5e2da',
          divider: '#edebe4',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 1px 3px rgba(18, 22, 28, 0.04), 0 1px 2px rgba(18, 22, 28, 0.02)',
        'soft-md': '0 4px 12px rgba(18, 22, 28, 0.06), 0 1px 3px rgba(18, 22, 28, 0.04)',
        'soft-lg': '0 12px 28px rgba(18, 22, 28, 0.08), 0 4px 10px rgba(18, 22, 28, 0.03)',
        'soft-xl': '0 20px 40px rgba(18, 22, 28, 0.09), 0 6px 16px rgba(18, 22, 28, 0.04)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
