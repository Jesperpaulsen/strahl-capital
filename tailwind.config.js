/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,tsx}',
    './components/**/*.{js,jsx,tsx}',
  ],
  safelist: ['prose'],
  theme: {
    fontSize: {
      // Heading Sizes
      'heading-xs': ['1rem', '1.25rem'],
      'heading-sm': ['1.125rem', '1.375rem'],
      'heading-md': ['1.25rem', '1.5rem'],
      'heading-lg': ['1.5rem', '1.75rem'],
      'heading-xl': ['1.875rem', '2.25rem'],
      'heading-2xl': ['2.25rem', '2.5rem'],
      'heading-3xl': ['3rem', '3.25rem'],
      // Text Sizes
      '2xs': ['0.625rem', '1rem'],
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.375rem'],
      base: ['1rem', '1.625rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.875rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.375rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '5xl': ['3rem', '1.1'],
      '6xl': ['3.75rem', '1.1'],
      '7xl': ['4.5rem', '1.05'],
      '8xl': ['6rem', '1'],
    },
    extend: {
      colors: {
        // Modern teal/emerald palette
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        // Warm neutrals
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
        // Legacy colors for compatibility
        green: {
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a'
        },
        'accent-1': '#fafaf9',
        'accent-2': '#e7e5e4',
        'accent-7': '#1c1917',
        success: '#10b981',
        error: '#ef4444',
        cyan: '#06b6d4',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
        tight: '-.025em',
        wide: '.025em',
        wider: '.05em',
      },
      lineHeight: {
        tight: 1.2,
        snug: 1.375,
        relaxed: 1.625,
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.04)',
        'elevated': '0 10px 40px -10px rgba(0, 0, 0, 0.12), 0 20px 50px -15px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 30px -5px rgba(20, 184, 166, 0.3)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
