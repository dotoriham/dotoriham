import path from 'node:path';
import { execa } from 'execa';
import fs from 'fs-extra';

export async function generateDts(packagePath: string) {
  // 빌드할 때 생성되었던 이전 버전의 tsconfig.build.tsbuildinfo 파일을 삭제
  await fs.remove(path.join(packagePath, 'tsconfig.build.tsbuildinfo'));

  await execa('yarn', [
    'tsc',
    '--project',
    path.join(packagePath, 'tsconfig.build.json'),
  ]);

  // Duplicate the type definitions for ESM
  await fs.copy(
    path.join(packagePath, 'lib/index.d.ts'),
    path.join(packagePath, 'lib/index.d.mts'),
  );
}
