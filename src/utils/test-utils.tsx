import '@testing-library/jest-dom/extend-expect'

import {
	queries,
	render as rtlRender,
	RenderOptions,
	screen,
	waitFor
} from '@testing-library/react'
import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../styles/GlobalStyles'
import { darkTheme } from '../styles/theme'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyles />

			{children}
		</ThemeProvider>
	)
}

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>
) => rtlRender(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { queries, customRender as render, screen, waitFor }
