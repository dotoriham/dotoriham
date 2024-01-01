export const isServer = typeof window === 'undefined';

export function getIsMobile(mobileBreakpoint: number) {
  if (isServer === true) {
    return null;
  }

  return window.innerWidth < mobileBreakpoint;
}
