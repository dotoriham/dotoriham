export type ColorMode = 'light' | 'dark' | 'auto';

export function getColorScheme(colorMode: ColorMode = 'auto') {
  return colorMode !== 'auto'
    ? colorMode
    : window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function setColorModeAttribute(
  colorMode: ColorMode,
  getRootElement: () => HTMLElement | undefined,
) {
  const computedColorMode = getColorScheme(colorMode);
  getRootElement()?.setAttribute(
    'data-dotoriham-color-scheme',
    computedColorMode,
  );
}
