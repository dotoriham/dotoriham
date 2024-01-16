// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultConfig = require('./default.config.cjs');

module.exports = {
  ...defaultConfig,
  outDir: './src/components/graphic',
  svgProps: { role: 'img' },
  svgoConfig: {
    /**
     * @see https://github.com/svg/svgo
     */
    plugins: [],
  },
};
