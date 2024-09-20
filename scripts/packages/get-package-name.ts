const PREFIX = '@dotoriham/';

export function getPackageName(inputPackageName: string) {
  if (inputPackageName.startsWith('@')) {
    return inputPackageName;
  }

  return `${PREFIX}${inputPackageName}`;
}

// package name에서 prefix를 제거하고 반환합니다.
export function getUnprefixedPackageName(packageName: string) {
  return packageName.replace(PREFIX, '');
}
