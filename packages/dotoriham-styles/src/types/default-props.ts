import { CSSProperties } from 'react';

import { StyleSystemProps } from './style-system';

export type As = string | React.ComponentType<any>;

export interface DefaultProps extends StyleSystemProps {
  className?: string;
  style?: CSSProperties;
  as?: As;
}
