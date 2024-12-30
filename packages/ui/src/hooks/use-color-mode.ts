'use client';

import { useIsomorphicEffect } from './use-isomorphic-effect';
import {
  ColorMode,
  setColorModeAttribute,
} from '../utils/color-mode-attribute';

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
