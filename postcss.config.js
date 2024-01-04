require('postcss-mixins')({
  mixins: {
    light: {
      '@mixin-content': {},
    },
    dark: {
      '@mixin-content': {},
    },
  },
});

module.exports = {
  plugins: [require('postcss-mixins'), require('autoprefixer')],
};
