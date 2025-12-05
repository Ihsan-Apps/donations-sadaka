'use client';

import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';
import QueryProvider from './QueryProvider';

// List of all DaisyUI themes you want to support
export const THEMES = ['light', 'dark', 'cupcake', 'retro', 'cyberpunk', 'valentine', 'aqua', 'forest', 'luxury', 'synthwave'];

export default function Providers({ children }: PropsWithChildren) {
	// Map themes for next-themes
	const themeMapping = THEMES.reduce((acc, theme) => {
		acc[theme] = theme;
		return acc;
	}, {} as Record<string, string>);

	return (
		<ThemeProvider attribute='class' defaultTheme='light' enableSystem={false} value={themeMapping} disableTransitionOnChange>
			<QueryProvider>{children}</QueryProvider>
		</ThemeProvider>
	);
}
