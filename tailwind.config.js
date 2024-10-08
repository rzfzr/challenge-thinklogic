/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '390px',
      'md': '834px',
      'lg': '1440px',
    },
    extend: {
      colors: {
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        brand: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
        },
        error: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        success: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        secondary: {
          'dark-blue': {
            50: '#F8FAFC',
            100: '#EEF2F6',
            200: '#E3E8EF',
            300: '#CDD6E2',
            400: '#AAB9C9',
            500: '#7890A3',
            600: '#50627B',
            700: '#32475C',
            800: '#1E2D3F',
            900: '#0F192B',
          },
        },
        base: {
          'dark-blue': '#1E3A8A',
          'gray': '#F5F5F5',
          'white': '#FFFFFF',
          'black': '#171717',
        },
        resources: {
          blog: '#153E75',
          caseStudy: '#1D4ED8',
          video: '#1E40AF',
          news: '#1E3A8A',
          webinar: '#312E81',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Barlow', 'sans-serif'],
      },
      fontSize: {
        '2xl-d': ['80px', { lineHeight: '100%', letterSpacing: '-4%' }],
        'xl-d': ['64px', { lineHeight: '100%', letterSpacing: '-4%' }],
        'lg-d': ['48px', { lineHeight: '100%', letterSpacing: '-4%' }],
        'md-d': ['40px', { lineHeight: '100%', letterSpacing: '-4%' }],
        'sm-d': ['32px', { lineHeight: '100%', letterSpacing: '-4%' }],
        'xs-d': ['24px', { lineHeight: '100%', letterSpacing: '-2%' }],

        'xl': ['20px', { lineHeight: '150%' }],
        'lg': ['18px', { lineHeight: '160%' }],
        'md': ['16px', { lineHeight: '160%' }],
        'sm': ['14px', { lineHeight: '160%' }],
        'xs': ['12px', { lineHeight: '160%' }],

        '2xl-t': ['60px', { lineHeight: '100%', letterSpacing: '-4%' }],
        'xl-t': ['48px', { lineHeight: '100%', letterSpacing: '-4%' }],
        'lg-t': ['40px', { lineHeight: '100%', letterSpacing: '-4%' }],
        'md-t': ['32px', { lineHeight: '100%', letterSpacing: '-4%' }],
        'sm-t': ['28px', { lineHeight: '100%', letterSpacing: '-4%' }],
        'xs-t': ['24px', { lineHeight: '100%', letterSpacing: '-2%' }],
      },
      fontWeight: {
        regular: '400',
        semibold: '600',
      }
    }
  },
  plugins: [],
}

