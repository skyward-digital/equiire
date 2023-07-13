import colors from 'tailwindcss/colors';
import { fontFamily } from 'tailwindcss/defaultTheme';
import { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      // As we get further into the project we will add the colours directly into the theme, for now we'll extend
      colors: {
        black: '#26272B',
        gray: {
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D2D6DB',
          400: '#A0A0AB',
          500: '#6C737F',
          600: '#475467',
          700: '#3A4452',
          800: '#343B46',
          900: '#22272F',
        },
        brand: {
          DEFAULT: '#FF9E4E', //400
          25: '#FFF9F5',
          50: '#FFEEE0',
          100: '#FFD8B8',
          200: '#FFC799',
          300: '#FFB170',
          400: '#FF9E4E',
          500: '#FF8C0A',
          600: '#EB6A00',
          700: '#CC5302',
          800: '#A1400B',
          900: '#82370C',
          950: '#461904',
          secondary: '#898989',
        },
        semantic: {
          error: '#F04438',
        },
      },
      backgroundImage: ({ theme }) => ({
        'vc-border-gradient': `radial-gradient(at left top, ${theme(
          'colors.gray.500',
        )}, 50px, ${theme('colors.gray.800')} 50%)`,
      }),
      boxShadow: {
        xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        sm: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
      },
      fontFamily: {
        brand: ['var(--font-mazzard)', ...fontFamily.sans],
      },
      screens: {
        '2xl': '1440px',
      },
      zIndex: {
        '-10': '-10',
      },
      strokeWidth: {
        0.5: '0.5',
        1.5: '1.5',
        2.5: '2.5',
      },
      keyframes: ({ theme }) => ({
        rerender: {
          '0%': {
            ['border-color']: theme('colors.vercel.pink'),
          },
          '40%': {
            ['border-color']: theme('colors.vercel.pink'),
          },
        },
        highlight: {
          '0%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
          '40%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
        },
        loading: {
          '0%': {
            opacity: '.2',
          },
          '20%': {
            opacity: '1',
            transform: 'translateX(1px)',
          },
          to: {
            opacity: '.2',
          },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        translateXReset: {
          '100%': {
            transform: 'translateX(0)',
          },
        },
        fadeToTransparent: {
          '0%': {
            opacity: '1',
          },
          '40%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
} satisfies Config;
