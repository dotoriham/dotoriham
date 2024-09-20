import path from 'node:path';

/**
 * path.posix.resolve(filePath)는 전달된 경로를 POSIX 표준(유닉스 스타일)으로 해석하여 절대 경로로 변환합니다.
 * posix는 경로 형식을 UNIX 기반 시스템(예: Linux, macOS)에 맞춘 것을 의미하며, Windows의 경우 path.win32를 사용할 수 있습니다.
 * resolve() 함수는 전달된 경로를 절대 경로로 변환해 반환합니다.
 */
export function getPath(filePath: string) {
  return path.posix.resolve(filePath);
}

export function getPaths(filePaths: string[]) {
  return filePaths.map(getPath);
}
