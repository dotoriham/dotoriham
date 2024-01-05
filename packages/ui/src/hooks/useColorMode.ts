'use client';
import {
  ColorMode,
  setColorModeAttribute,
} from '../utils/color-mode-attribute';
import { useIsomorphicEffect } from './useIsomorphicEffect';

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
