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
          DEFAULT: '#FF8622', //500
          25: '#FFF9F5',
          50: '#FFEEE0',
          100: '#FFD8B8',
          200: '#FFC799',
          300: '#FFB170',
          400: '#FF9E4E',
          500: '#FF8622',
          600: '#EB6A00',
          700: '#CC5302',
          800: '#A1400B',
          900: '#82370C',
          950: '#461904',
          secondary: '#898989', // This doesn't match the other patterns
        },
        error: {
          DEFAULT: '#F04438', //500
          25: '#FFFBFA',
          50: '#FEF3F2',
          100: '#FEE4E2',
          200: '#FECDCA',
          300: '#FDA29B',
          400: '#F17A56',
          500: '#F04438',
          600: '#D92D20',
          700: '#B42318',
          800: '#912018',
          900: '#7A271A',
          950: '#55160C',
        },
        warning: {
          DEFAULT: '#F79009', //500
          25: '#FFFCF5',
          50: '#FFFAEB',
          100: '#FEF0C7',
          200: '#FEDF89',
          300: '#FEC84B',
          400: '#FDB022',
          500: '#F79009',
          600: '#DC6803',
          700: '#B54708',
          800: '#93370D',
          900: '#7A2E0E',
          950: '#4E1D09',
        },
        success: {
          DEFAULT: '#17B26A', //500
          25: '#F6FEF9',
          50: '#ECFDF3',
          100: '#DCFAE6',
          200: '#ABEFC6',
          300: '#75E0A7',
          400: '#47CD89',
          500: '#17B26A',
          600: '#079455',
          700: '#067647',
          800: '#085D3A',
          900: '#074D31',
          950: '#053321',
        },
      },
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
      // keyframes: ({ theme }) => ({
      //   loading: {
      //     '0%': {
      //       opacity: '.2',
      //     },
      //     '20%': {
      //       opacity: '1',
      //       transform: 'translateX(1px)',
      //     },
      //     to: {
      //       opacity: '.2',
      //     },
      //   },
      //   shimmer: {
      //     '100%': {
      //       transform: 'translateX(100%)',
      //     },
      //   },
      //   translateXReset: {
      //     '100%': {
      //       transform: 'translateX(0)',
      //     },
      //   },
      //   fadeToTransparent: {
      //     '0%': {
      //       opacity: '1',
      //     },
      //     '40%': {
      //       opacity: '1',
      //     },
      //     '100%': {
      //       opacity: '0',
      //     },
      //   },
      // }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
} satisfies Config;
