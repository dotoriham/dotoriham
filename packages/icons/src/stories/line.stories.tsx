import * as LineIcons from '../components/line';

export default {
  title: 'Line',
};

const Template = () => {
  const icons = Object.keys(LineIcons);
  const iconModules = LineIcons as Record<string, any>;

  return (
    <div
      style={{
        display: 'grid',
        gap: 10,
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        maxWidth: 1024,
      }}>
      {icons.map((compName) => {
        const Icon = iconModules[compName];
        return (
          <div
            key={compName}
            style={{
              border: '#eaeaea 1px solid',
              cursor: 'pointer',
              display: 'inline-block',
              textAlign: 'center',
            }}>
            <Icon fontSize={40} />
            <div>{compName}</div>
          </div>
        );
      })}
    </div>
  );
};

export const Line = Template.bind({});
