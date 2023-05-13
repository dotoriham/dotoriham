import { createContext, ReactNode, useContext } from 'react';

import { ThemeProvider } from '@emotion/react';

import { Theme, theme } from './theme';

export interface DotorihamThemeProviderProps {
	children: ReactNode;
}

export const DotorihamThemeProvider = ({
	children,
}: DotorihamThemeProviderProps) => {
	return (
		<ThemeProvider theme={theme}>
			<DotorihamThemeContext.Provider value={{ theme }}>
				{children}
			</DotorihamThemeContext.Provider>
		</ThemeProvider>
	);
};

export type ThemeContextProps = {
	theme: Theme;
};

const DotorihamThemeContext = createContext<ThemeContextProps>({
	theme,
});

export function useDotorihamTheme() {
	const value = useContext(DotorihamThemeContext);
	if (!value) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return value;
}
