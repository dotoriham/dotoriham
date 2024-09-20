import chalk from 'chalk';
import { execa } from 'execa';
import { createLogger } from 'scripts/utils/create-logger';

const logger = createLogger('publish-package');

interface PublishPackage {
  packagePath: string;
  name: string;
  tag: string;
}

export async function publishPackage({
  packagePath,
  name,
  tag,
}: PublishPackage) {
  try {
    await execa('npm', ['publish', '--access', 'public', '--tag', tag], {
      cwd: packagePath,
    });
    logger.success(`Package ${chalk.cyan(name)} has been published`);
  } catch (error: unknown) {
    logger.error(`Failed to publish package ${chalk.red(name)}`);
    if (error instanceof Error) {
      process.stdout.write(chalk.red`${error.message}\n`);
    }
    process.exit(1);
  }
}
