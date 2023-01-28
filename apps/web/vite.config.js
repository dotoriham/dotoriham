/** @type {import('vite').UserConfig} */
export default {
  optimizeDeps: {
    auto: true,
    // https://github.com/vitejs/vite/issues/1083
    exclude: ['@musinsa/snap-ui'],
  },
};
