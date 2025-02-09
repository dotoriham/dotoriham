import path from 'node:path';
import fs from 'fs-extra';
import type { PackageJson } from 'type-fest';
import { getPath } from '../utils/get-path';

export interface Package {
  path: string;
  packageJsonPath: string;
  packageJson: PackageJson;
}

export function getPackagesList() {
  const basePath = getPath('packages');
  const namespacesPaths = fs.readdirSync(basePath);
  const srcPaths: string[] = [];

  for (const namespacePath of namespacesPaths) {
    if (fs.lstatSync(path.join(basePath, namespacePath)).isDirectory()) {
      const packages = fs.readdirSync(path.join(basePath, namespacePath));

      for (const packageName of packages) {
        if (packageName === 'package.json') {
          srcPaths.push(path.join(namespacePath, packageName));
        }
      }
    }
  }

  const packages: Package[] = [];

  for (const srcPath of srcPaths) {
    const packageJsonPath = path.join(basePath, srcPath);

    if (fs.pathExistsSync(packageJsonPath)) {
      packages.push({
        path: path.join(basePath, srcPath),
        packageJsonPath,
        packageJson: fs.readJSONSync(packageJsonPath),
      });
    }
  }

  return packages;
}
