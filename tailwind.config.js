const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    white: '#fff',
    abc: '#fff',
    extend: {}
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    plugin(function ({ addBase, addComponents, addUtilities, theme, addVariant }) {
      console.log('【theme】', theme('fontSize.sm'))

      addComponents({
        '.side_menu_item': {
          position: 'relative',
          display: 'flex',
          height: theme('spacing.12'),
          alignItems: 'center',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
          color: theme('colors.gray.300')
        },
        '.side_menu_item:hover': {
          color: theme('abc')
        },

        '.btn': {
          display: 'inline-flex',
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: theme('borderRadius.full'),
          backgroundColor: theme('colors.blue.500'),
          paddingLeft: theme('spacing.3'),
          paddingRight: theme('spacing.3'),
          paddingTop: theme('spacing.1'),
          paddingBottom: theme('spacing.1'),
          fontSize: theme('fontSize.sm'),
          lineHeight: theme('spacing.5'),
          color: theme('colors.white')
        }
      })
    })
  ]
}
