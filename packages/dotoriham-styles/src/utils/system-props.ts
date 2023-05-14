import { SystemValueType } from './value-getters';

export type StyleProperty = string | string[];

export interface SystemPropData {
  type: SystemValueType;
  property: StyleProperty;
}

export const SYSTEM_PROPS: Record<string, SystemPropData> = {
  bg: { property: 'background', type: 'color' },
  bottom: { property: 'bottom', type: 'default' },
  c: { property: 'color', type: 'color' },
  h: { property: 'height', type: 'spacing' },
  left: { property: 'left', type: 'default' },

  m: { property: 'margin', type: 'spacing' },
  mah: { property: 'maxHeight', type: 'spacing' },
  maw: { property: 'maxWidth', type: 'spacing' },
  mb: { property: 'marginBottom', type: 'spacing' },
  mih: { property: 'minHeight', type: 'spacing' },
  miw: { property: 'minWidth', type: 'spacing' },
  ml: { property: 'marginLeft', type: 'spacing' },

  mr: { property: 'marginRight', type: 'spacing' },
  mt: { property: 'marginTop', type: 'spacing' },

  mx: { property: ['marginRight', 'marginLeft'], type: 'spacing' },

  my: { property: ['marginTop', 'marginBottom'], type: 'spacing' },

  p: { property: 'padding', type: 'spacing' },

  pb: { property: 'paddingBottom', type: 'spacing' },

  pl: { property: 'paddingLeft', type: 'spacing' },

  pos: { property: 'position', type: 'default' },

  pr: { property: 'paddingRight', type: 'spacing' },

  pt: { property: 'paddingTop', type: 'spacing' },

  px: { property: ['paddingRight', 'paddingLeft'], type: 'spacing' },

  py: { property: ['paddingTop', 'paddingBottom'], type: 'spacing' },

  right: { property: 'right', type: 'default' },

  top: { property: 'top', type: 'default' },

  w: { property: 'width', type: 'spacing' },
};
export const TRANSIENT_PROPS = [
  ...Object.keys(SYSTEM_PROPS),
  'overflow',
  'direction',
  'style',
];
