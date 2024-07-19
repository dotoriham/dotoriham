import { colorMap } from './colors';
import { getColorMode } from '../utils';

export default {
  title: 'Colors',
};

const Light = () => {
  const colors = Object.entries(colorMap['light']);

  return (
    <>
      {colors.map(([color, value], index) => (
        <div
          key={index}
          style={{
            marginRight: '20px',
          }}>
          <div
            style={{
              alignItems: 'center',
              backgroundColor: value,
              color: 'green',
              display: 'flex',
              height: '30px',
              justifyContent: 'center',
              marginBottom: '8px',
              width: '300px',
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
      {colors.map(([color, value], index) => (
        <div
          key={index}
          style={{
            marginRight: '20px',
          }}>
          <div
            style={{
              alignItems: 'center',
              backgroundColor: value,
              color: 'green',
              display: 'flex',
              height: '30px',
              justifyContent: 'center',
              marginBottom: '8px',
              width: '300px',
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
      {colors.map(([color, value], index) => (
        <div
          key={index}
          style={{
            marginRight: '20px',
          }}>
          <div
            style={{
              alignItems: 'center',
              backgroundColor: value,
              color: 'green',
              display: 'flex',
              height: '30px',
              justifyContent: 'center',
              marginBottom: '8px',
              width: '300px',
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
