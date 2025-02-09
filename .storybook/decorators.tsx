import React from 'react';
import { DotorihamThemeProvider, useColorMode } from '../packages/ui';
import '../packages/ui/src/styles/global.css';

const decorators = [
  (Story) => {
    useColorMode({
      colorMode: 'auto',
      getRootElement: () => document.documentElement,
    });
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <DotorihamThemeProvider>
          <Story />
        </DotorihamThemeProvider>
      </div>
    );
  },
];

export default decorators;
