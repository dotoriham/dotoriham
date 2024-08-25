module.exports = {
  helpers: {
    relative: (from, to) => path.relative(from, to),
    src: () => `${__dirname}/src`,
  },
  templates: `${__dirname}/_templates`,
};
