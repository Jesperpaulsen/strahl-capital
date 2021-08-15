module.exports = {
  purge: {
    // enabled: true,
    content: [
      './pages/**/*.{js,jsx,tsx}',
      './pages/**/[*].{js,jsx,tsx}',
      './components/**/*.{js,jsx,tsx}',
      './components/**/**/*.{js,jsx,tsx}'
    ],
    options: {
      safelist: ['prose']
    }
  },
  theme: {
    fontSize: {
      // Heading Sizes
      'heading-xs': ['1rem', '1.125rem'],
      'heading-sm': ['1.125rem', '1.175rem'],
      'heading-md': ['1.25rem', '1.5rem'],
      'heading-lg': ['1.5rem', '1.5rem'],
      'heading-xl': ['1.875rem', '1.875rem'],
      'heading-2xl': ['2.25rem', '2.25rem'],
      'heading-3xl': ['3rem', '3rem'],
      // Text Sizes
      '2xs': ['0.6rem', '1rem'],
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.375rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem']
    },
    extend: {
      colors: {
        green: {
          100: '#ECFDF5',
          200: '#D1FAE5',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#004550',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B'
        },
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  }
}
