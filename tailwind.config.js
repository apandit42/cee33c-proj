module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    mode: 'all',
    content: [
      './*.html',
    ],
  },
  theme: {
    extend: {},
  },
  variants: ['responsive', 'hover', 'focus', 'group-hover', 'disabled'],
  plugins: [],
}
