import { Mounted, MountedProps } from './mounted';

export const withMounted = (
  Component: React.ComponentType,
  mountedProps?: MountedProps,
) => {
  return (props: any) => {
    return (
      <Mounted {...mountedProps}>
        <Component {...props} />
      </Mounted>
    );
  };
};
