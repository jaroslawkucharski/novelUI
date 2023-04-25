import type { Preview } from '@storybook/react'
import React from 'react'

const withThemeProvider = (Story: any) => {
	return (
		<div>			
			<Story />
		</div>
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

