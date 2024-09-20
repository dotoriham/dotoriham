import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';
import { buildPackage } from './build-package';

const { argv: _argv } = yargs(hideBin(process.argv));

async function build() {
  const argv = await _argv;

  if (argv._[0] === 'all') {
    console.log('all');
    // await buildAllPackages() // TODO 모든 패키지 빌드하는 스크립트 작성 예정
    return;
  }

  if (argv._[0]) {
    for (const item of argv._) {
      await buildPackage(`${item}`);
    }
  }
}

build();
