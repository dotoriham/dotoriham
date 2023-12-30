import { useIsomorphicEffect } from './useIsomorphicEffect';

export type ColorMode = 'light' | 'dark' | 'auto';

function setColorModeAttribute(
  colorMode: ColorMode,
  getRootElement: () => HTMLElement | undefined,
) {
  const computedColorMode =
    colorMode !== 'auto'
      ? colorMode
      : window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  getRootElement()?.setAttribute(
    'data-dotoriham-color-scheme',
    computedColorMode,
  );
}

interface ColorModeOptions {
  colorMode?: ColorMode;
  getRootElement: () => HTMLElement | undefined;
}
export const useColorMode = ({
  colorMode = 'auto',
  getRootElement,
}: ColorModeOptions) => {
  useIsomorphicEffect(() => {
    setColorModeAttribute(colorMode, getRootElement);
  }, []);
};
