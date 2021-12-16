const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: ['prose', 'prose-lg'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#084f5f',
          light: '#0D7D96',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: null,
            strong: {
              color: null,
            },
            a: {
              color: null,
            },
            'blockquote p:first-of-type::before': null,
            'blockquote p:last-of-type::after': null,
          },
        },
        lg: {
          css: {
            lineHeight: theme('lineHeight.7'),
          }
        }
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
