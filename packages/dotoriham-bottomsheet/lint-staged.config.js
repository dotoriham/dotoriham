module.exports = {
  '*.{js,jsx,ts,tsx}': ['yarn prettier:fix', 'yarn eslint:fix'],
  '*.{ts,tsx}': () => 'yarn type-check',
};
