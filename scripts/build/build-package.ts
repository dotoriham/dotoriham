import { createLogger } from 'scripts/utils/create-logger';

const logger = createLogger('build-package');

export async function buildPackage(_packageName: string) {
  logger.log('building package:', _packageName);
}
