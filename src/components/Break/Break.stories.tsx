import type { Meta, StoryObj } from '@storybook/react'

import { Break } from './Break'

const meta: Meta<typeof Break> = {
	title: 'Components/Break',
	component: Break
}

export default meta
type Story = StoryObj<typeof Break>

export const Default: Story = {
	args: {
		width: '100%',
		'data-testid': 'break'
	}
}
