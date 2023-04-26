import type { Preview } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../src/styles/GlobalStyles'
import { darkTheme, lightTheme } from '../src/styles/theme'

const withThemeProvider = (Story: any, context) => {
	const theme = context.parameters.theme || context.globals.theme
	const storyTheme = theme === 'dark' ? darkTheme : lightTheme

	return (
		<ThemeProvider theme={storyTheme}>
			<GlobalStyles />

			<Story />
		</ThemeProvider>
	)
}

const preview: Preview = {
	globalTypes: {
		theme: {
			name: 'THEME',
			description: 'Change theme',
			defaultValue: 'dark',
			toolbar: {
				icon: 'circlehollow',
				items: [
					{ value: 'dark', icon: 'circle', title: 'Dark' },
					{ value: 'light', icon: 'circlehollow', title: 'Light' }
				],
				showName: true
			}
		}
	},
	decorators: [withThemeProvider]
}

export default preview
