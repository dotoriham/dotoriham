import { CSSProperties } from 'react';

import { StyleSystemProps } from './style-system';

export interface DefaultProps extends StyleSystemProps {
	className?: string;
	style?: CSSProperties;
}
