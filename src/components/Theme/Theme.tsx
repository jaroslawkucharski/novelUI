import { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../../styles/GlobalStyles'
import { darkTheme, lightTheme } from '../../styles/theme'

export interface ThemeProps {
	theme?: 'dark' | 'light'
	children: ReactNode
}

export const Theme: FC<ThemeProps> = ({ theme = 'dark', children }) => {
	const appTheme = theme === 'dark' ? darkTheme : lightTheme

	return (
		<ThemeProvider theme={appTheme}>
			<GlobalStyles />

			{children}
		</ThemeProvider>
	)
}
