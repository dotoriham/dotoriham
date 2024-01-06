import { getColorMode } from '../utils';
import { colorMap } from './colors';

export default {
  title: 'Colors',
};

const Light = () => {
  const colors = Object.entries(colorMap['light']);

  return (
    <>
      {colors.map(([color, value]) => (
        <div
          style={{
            marginRight: '20px',
          }}>
          <div
            style={{
              backgroundColor: value,
              height: '30px',
              width: '300px',
              color: 'green',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '8px',
            }}>
            {color}_{value}
          </div>
        </div>
      ))}
    </>
  );
};

const Dark = () => {
  const colors = Object.entries(colorMap['dark']);

  return (
    <>
      {colors.map(([color, value]) => (
        <div
          style={{
            marginRight: '20px',
          }}>
          <div
            style={{
              backgroundColor: value,
              height: '30px',
              width: '300px',
              color: 'green',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '8px',
            }}>
            {color}_{value}
          </div>
        </div>
      ))}
    </>
  );
};

const Auto = () => {
  const colors =
    getColorMode() === 'dark'
      ? Object.entries(colorMap['dark'])
      : Object.entries(colorMap['light']);

  return (
    <>
      {colors.map(([color, value]) => (
        <div
          style={{
            marginRight: '20px',
          }}>
          <div
            style={{
              backgroundColor: value,
              height: '30px',
              width: '300px',
              color: 'green',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '8px',
            }}>
            {color}_{value}
          </div>
        </div>
      ))}
    </>
  );
};

export const ColorsLight = Light.bind({});
export const ColorsDark = Dark.bind({});
export const ColorsAuto = Auto.bind({});
