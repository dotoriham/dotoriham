import { CSSProperties } from 'react';

export interface SystemProps {
  m?: CSSProperties['margin'];
  my?: CSSProperties['margin'];
  mx?: CSSProperties['margin'];
  mt?: CSSProperties['margin'];
  mb?: CSSProperties['margin'];
  ml?: CSSProperties['margin'];
  mr?: CSSProperties['margin'];

  p?: CSSProperties['padding'];
  py?: CSSProperties['padding'];
  px?: CSSProperties['padding'];
  pt?: CSSProperties['padding'];
  pb?: CSSProperties['padding'];
  pl?: CSSProperties['padding'];
  pr?: CSSProperties['padding'];

  bg?: CSSProperties['backgroundColor'];
  c?: CSSProperties['color'];

  w?: CSSProperties['width'];
  miw?: CSSProperties['minWidth'];
  maw?: CSSProperties['maxWidth'];

  h?: CSSProperties['height'];
  mih?: CSSProperties['minHeight'];
  mah?: CSSProperties['maxHeight'];

  pos?: CSSProperties['position'];
  top?: CSSProperties['top'];
  left?: CSSProperties['left'];
  bottom?: CSSProperties['bottom'];
  right?: CSSProperties['right'];

  display?: CSSProperties['display'];
}

const systemProps: Array<keyof SystemProps> = [
  'm',
  'my',
  'mx',
  'mt',
  'mb',
  'ml',
  'mr',

  'p',
  'py',
  'px',
  'pt',
  'pb',
  'pl',
  'pr',

  'bg',
  'c',

  'w',
  'miw',
  'maw',

  'h',
  'mih',
  'mah',

  'pos',
  'top',
  'left',
  'bottom',
  'right',

  'display',
];

type SystemPropData = string | string[];

const STYlE_PROPS_DATA: Record<keyof SystemProps, SystemPropData> = {
  m: 'margin',
  mt: 'marginTop',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mr: 'marginRight',
  mx: ['marginRight', 'marginLeft'],
  my: ['marginTop', 'marginBottom'],

  p: 'padding',
  pt: 'paddingTop',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  pr: 'paddingRight',
  px: ['paddingRight', 'paddingLeft'],
  py: ['paddingTop', 'paddingBottom'],

  bg: 'background',
  c: 'color',

  w: 'width',
  miw: 'minWidth',
  maw: 'maxWidth',

  h: 'height',
  mih: 'minHeight',
  mah: 'maxHeight',

  pos: 'position',
  top: 'top',
  left: 'left',
  bottom: 'bottom',
  right: 'right',

  display: 'display',
};

const filterProps = <T extends Record<string, unknown>>(props: T) => {
  const rest = { ...props };
  const filterdSystemProps = {} as Record<keyof SystemProps, unknown>;
  systemProps.forEach((prop) => {
    if (prop in props) {
      filterdSystemProps[prop] = props[prop];
      delete rest[prop];
    }
  });
  return { filterdSystemProps, ...rest };
};

export const extractSystemStyles = <T extends Record<string, unknown>>(
  props: T,
) => {
  const { filterdSystemProps, ...rest } = filterProps(props);

  const systemStyles = Object.entries(filterdSystemProps).reduce(
    (acc, [key, value]) => {
      const styleName = STYlE_PROPS_DATA[key as keyof SystemProps];
      if (Array.isArray(styleName)) {
        styleName.forEach((name) => {
          acc[name] = value;
        });
      } else {
        acc[styleName] = value;
      }

      return acc;
    },
    {} as Record<string, unknown>,
  );

  return { systemStyles, ...rest };
};
