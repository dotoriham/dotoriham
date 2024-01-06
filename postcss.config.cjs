module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {},
    'autoprefixer': {},
    'postcss-nesting': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
  },
  //   require('postcss-import'),
  //   require('postcss-mixins'),
  //   require('autoprefixer'),
  // ],
};
