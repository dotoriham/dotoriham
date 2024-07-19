export const colorMap = {
  dark: {
    black: '#ffffff',
    dark0: '#9b9b9b',
    dark1: '#8a8a8a',
    dark2: '#545454',
    dark3: '#464646',
    dark4: '#2a2a2a',
    dark5: '#232323',
    dark6: '#161616',
    dark7: '#0c0c0c',
    dark8: '#070707',
    dark9: '#000000',
    gray0: '#d1d2d3',
    gray1: '#bac0c4',
    gray2: '#a1a7ac',
    gray3: '#959b9f',
    gray4: '#81878b',
    gray5: '#7c8387',
    gray6: '#596066',
    gray7: '#2f3437',
    gray8: '#1b1f21',
    gray9: '#070a0b',
    green0: '#b6d7b6',
    green1: '#a1c4a1',
    green2: '#8aad8a',
    green3: '#729672',
    green4: '#5c854c',
    green5: '#49803b',
    green6: '#3c6b31',
    green7: '#357525',
    green8: '#2b6c1b',
    green9: '#256217',
    lime0: '#a9bfa9',
    lime1: '#99ad99',
    lime2: '#88a188',
    lime3: '#779076',
    lime4: '#667a65',
    lime5: '#556b53',
    lime6: '#465440',
    lime7: '#3a4a31',
    lime8: '#2f3b20',
    lime9: '#293319',
    red0: '#d2b3b3',
    red1: '#c19d9d',
    red2: '#9e7d7d',
    red3: '#8a6363',
    red4: '#784b4b',
    red5: '#653535',
    red6: '#582626',
    red7: '#4a1919',
    red8: '#3d0d0d',
    red9: '#320505',
    white: '#000000',
  },
  light: {
    black: '#000000',
    dark0: '#c9c9c9',
    dark1: '#b8b8b8',
    dark2: '#828282',
    dark3: '#696969',
    dark4: '#424242',
    dark5: '#3b3b3b',
    dark6: '#2e2e2e',
    dark7: '#242424',
    dark8: '#1f1f1f',
    dark9: '#141414',
    gray0: '#f8f9fa',
    gray1: '#f1f3f5',
    gray2: '#e9ecef',
    gray3: '#dee2e6',
    gray4: '#ced4da',
    gray5: '#adb5bd',
    gray6: '#868e96',
    gray7: '#495057',
    gray8: '#343a40',
    gray9: '#212529',
    green0: '#ebfbee',
    green1: '#d3f9d8',
    green2: '#b2f2bb',
    green3: '#8ce99a',
    green4: '#69db7c',
    green5: '#51cf66',
    green6: '#40c057',
    green7: '#37b24d',
    green8: '#2f9e44',
    green9: '#2b8a3e',
    lime0: '#f4fce3',
    lime1: '#e9fac8',
    lime2: '#d8f5a2',
    lime3: '#c0eb75',
    lime4: '#a9e34b',
    lime5: '#94d82d',
    lime6: '#82c91e',
    lime7: '#74b816',
    lime8: '#66a80f',
    lime9: '#5c940d',
    red0: '#fff5f5',
    red1: '#ffe3e3',
    red2: '#ffc9c9',
    red3: '#ffa8a8',
    red4: '#ff8787',
    red5: '#ff6b6b',
    red6: '#fa5252',
    red7: '#f03e3e',
    red8: '#e03131',
    red9: '#c92a2a',
    white: '#ffffff',
  },
};

export type DotorihamColors = 'dark' | 'gray' | 'green' | 'lime' | 'red';
export type DotorihamColorKeys = keyof (typeof colorMap)['light'];

export const getAdaptiveColorVariable = (
  colorKey: DotorihamColorKeys | (string & {}),
) => {
  if (colorKey in colorMap.light) {
    return `var(--dotoriham-adaptive-color-${colorKey})`;
  }

  return colorKey;
};

const makeColorObject = () => {
  const colorObject = {} as Record<DotorihamColorKeys, string>;
  const colorArray = Object.keys(colorMap.light) as DotorihamColorKeys[];
  colorArray.forEach((colorKey) => {
    if (colorKey in colorObject) {
      return;
    }

    colorObject[colorKey] = getAdaptiveColorVariable(colorKey);
  });

  return colorObject;
};

/**
 * variable color
 * ex) var(--dotoriham-color-black), var(--dotoriham-color-white)
 */
export const colors = makeColorObject();

/**
 * fixed color
 * ex) #000000, #ffffff
 */
export const fixedColor = colorMap.light;
