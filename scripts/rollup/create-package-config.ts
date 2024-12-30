import path from 'node:path';
import alias, { Alias } from '@rollup/plugin-alias';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { generateScopedName } from 'hash-css-selector';
import { RollupOptions } from 'rollup';
import banner from 'rollup-plugin-banner2';
import esbuild from 'rollup-plugin-esbuild';
import postcss from 'rollup-plugin-postcss';
import { ROLLUP_EXTERNALS } from './rollup-externals';
import { getPackagesList } from 'scripts/packages/get-packages-list';
import { getPath } from 'scripts/utils/get-path';
import { ROLLUP_EXCLUDE_USE_CLIENT } from './rollup-exclude-use-client';

export function createPackageConfig(packagePath: string): RollupOptions {
  const packagesList = getPackagesList();

  const aliasEntries: Alias[] = packagesList.map((pkg) => ({
    find: new RegExp(`^${pkg.packageJson.name}`),
    replacement: path.resolve(pkg.path, 'src'),
  }));

  const plugins = [
    nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
    esbuild({
      sourceMap: false,
      tsconfig: getPath('tsconfig.json'),
    }),
    alias({ entries: aliasEntries }),
    replace({ preventAssignment: true }),
    postcss({
      extract: true,
      modules: { generateScopedName },
    }),
    banner((chunk) => {
      if (!ROLLUP_EXCLUDE_USE_CLIENT.includes(chunk.fileName)) {
        return "'use client';\n";
      }

      return undefined;
    }),
  ];

  return {
    input: path.resolve(packagePath, 'src/index.ts'),
    output: [
      {
        format: 'es',
        entryFileNames: '[name].mjs',
        dir: path.resolve(packagePath, 'esm'),
        preserveModules: false,
        sourcemap: true,
      },
      {
        format: 'cjs',
        entryFileNames: '[name].cjs',
        dir: path.resolve(packagePath, 'cjs'),
        preserveModules: false,
        sourcemap: true,
        interop: 'auto',
      },
    ],
    external: ROLLUP_EXTERNALS,
    plugins,
  };
}
