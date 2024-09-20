import path from 'node:path';
import fs from 'fs-extra';
import { getPath } from '../utils/get-path';
import { getUnprefixedPackageName } from './get-package-name';

export async function locatePackage(packageName: string) {
  const packagePath = path.join(
    getPath('packages'),
    getUnprefixedPackageName(packageName),
  );

  const exists = await fs.pathExists(packagePath);
  return exists ? packagePath : null;
}
