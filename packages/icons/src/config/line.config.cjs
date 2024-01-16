// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultConfig = require('./default.config.cjs');

module.exports = {
  ...defaultConfig,
  outDir: './src/components/line',
  svgoConfig: {
    /**
     * @see https://github.com/svg/svgo
     */
    plugins: [
      {
        active: true,
        name: 'convertColors',
        params: {
          currentColor: true,
        },
      },
      {
        active: true,
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [
            {
              fill: 'currentColor',
            },
            {
              xmlns: 'http://www.w3.org/2000/svg',
            },
          ],
        },
      },
    ],
  },
};
