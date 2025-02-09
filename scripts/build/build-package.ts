import { getPackageName } from 'scripts/packages/get-package-name';
import { locatePackage } from 'scripts/packages/locate-package';
import { createLogger } from 'scripts/utils/create-logger';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'node:path';
import { generateDts } from './generate.dts';
import { createPackageConfig } from 'scripts/rollup/create-package-config';
import { compile } from './complie';
import { getBuildTime } from './get-build-time';

const logger = createLogger('build-package');

export async function buildPackage(inputPackageName: string) {
  const packageName = getPackageName(inputPackageName);
  const packagePath = await locatePackage(packageName);
  const formattedPackageName = chalk.cyan(packageName);

  if (packagePath == null) {
    logger.error(`Package ${formattedPackageName} does not exist`);
    process.exit(1);
  }

  logger.log('Building package:', packageName);

  try {
    const startTime = Date.now();

    logger.log(`Generating ${formattedPackageName} *.d.ts files...`);
    await generateDts(packagePath);

    const config = createPackageConfig(packagePath);

    logger.log(`Compiling ${formattedPackageName} package with rollup...`);

    await compile(config);

    if (await fs.pathExists(path.join(packagePath, 'esm/index.css'))) {
      await fs.copyFile(
        path.join(packagePath, 'esm/index.css'),
        path.join(packagePath, 'styles.css'),
      );

      await fs.remove(path.join(packagePath, 'esm/index.css'));
      await fs.remove(path.join(packagePath, 'cjs/index.css'));
    }

    logger.success(
      `Package ${formattedPackageName} has been built in ${chalk.green(
        getBuildTime(startTime),
      )}`,
    );
  } catch (err: unknown) {
    logger.error(`Failed to compile package: ${formattedPackageName}`);
    logger.error(err);
    process.exit(1);
  }
}
