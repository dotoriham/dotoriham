import React from 'react';
import { DotorihamThemeProvider } from '../packages/dotoriham-styles';

const decorators = [
	(Story) => (
		<div style={{ height: '100%', width: '100%' }}>
			<DotorihamThemeProvider>
				<Story />
			</DotorihamThemeProvider>
		</div>
	),
];

export default decorators;
