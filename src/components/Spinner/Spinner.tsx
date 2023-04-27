import { FC } from 'react'

import { SpinnerComponent } from './Spinner.styles'

export interface SpinnerProps {
	color?: string
	'data-testid'?: string
}

export const Spinner: FC<SpinnerProps> = ({
	color,
	'data-testid': dataTestId = 'spinner'
}) => (
	<SpinnerComponent
		color={color}
		data-testid={dataTestId}
	/>
)

Spinner.displayName = 'novelUI/Components/Spinner'
