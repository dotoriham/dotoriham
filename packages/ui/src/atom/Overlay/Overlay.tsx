import React from 'react';

import styled, { css } from 'styled-components';

import { createPolymorphicComponent } from '../../utils';

export interface OverlayProps {
	/** opacity */
	opacity?: React.CSSProperties['opacity'];

	/** background-color */
	color?: React.CSSProperties['backgroundColor'];

	/** z-index */
	zIndex?: React.CSSProperties['zIndex'];

	/** visibie */
	visible?: boolean;
}

const defaultProps: Partial<OverlayProps> = {
	color: 'black',
	opacity: 0.4,
	visible: false,
	zIndex: 1000,
} as const;

const _Overlay = styled.div<OverlayProps>`
	transition: opacity 0.3s ease-in-out;
	opacity: 0;
	display: block;

	${({
		opacity = defaultProps.opacity,
		color = defaultProps.color,
		zIndex = defaultProps.zIndex,
		visible = defaultProps.visible,
	}) =>
		visible &&
		css`
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			opacity: ${opacity};
			background-color: ${color};
			z-index: ${zIndex};
		`}
`;

export const Overlay = createPolymorphicComponent<'div', OverlayProps>(
	_Overlay,
);
