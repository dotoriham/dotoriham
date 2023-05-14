import { css } from '@emotion/react';

import { filterProps } from './filter-props';
import { getSystemStyles } from './get-system-styles';
import { StyleSystemProps } from '../types';

export function extractSystemStyles<T extends Record<string, any>>(
	others: StyleSystemProps & T,
): {
	systemStylesProps: StyleSystemProps;
	rest: T;
	systemStyles: ReturnType<typeof css>;
} {
	const {
		m,
		mx,
		my,
		mt,
		mb,
		ml,
		mr,
		p,
		px,
		py,
		pt,
		pb,
		pl,
		pr,
		bg,
		c,
		w,
		miw,
		maw,
		h,
		mih,
		mah,
		pos,
		top,
		left,
		bottom,
		right,
		...rest
	} = others;
	const systemStylesProps = filterProps({
		bg,
		bottom,
		c,
		h,
		left,
		m,
		mah,
		maw,
		mb,
		mih,
		miw,
		ml,
		mr,
		mt,
		mx,
		my,
		p,
		pb,
		pl,
		pos,
		pr,
		pt,
		px,
		py,
		right,
		top,
		w,
	});

	const systemStyles = css`
		${getSystemStyles(systemStylesProps)}
	`;

	return { rest: rest as unknown as T, systemStyles, systemStylesProps };
}
