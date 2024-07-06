import { CSSProperties } from 'react';

export type PopoverWidth = 'target' | CSSProperties['width'];

type FloatingPlacement = 'end' | 'start';
type FloatingSide = 'top' | 'right' | 'bottom' | 'left';

export type PopoverPosition =
  | FloatingSide
  | `${FloatingPlacement}-${FloatingSide}`;
