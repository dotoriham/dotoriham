import { getPackagesList } from 'scripts/packages/get-packages-list';
import packageJson from '../../package.json';

export const ROLLUP_EXTERNALS = [
  'dayjs/locale/ru',
  'dayjs/plugin/customParseFormat.js',
  'dayjs/plugin/customParseFormat',
  'dayjs/plugin/utc.js',
  'dayjs/plugin/timezone.js',
  'klona/full',
  'highlight.js/lib/languages/typescript',
  'react-is',
  'react/jsx-runtime',
  ...getPackagesList().map((pkg) => pkg.packageJson.name!),
  ...Object.keys({
    ...packageJson.devDependencies,
    ...packageJson.dependencies,
  }),
];
