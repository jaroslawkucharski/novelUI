import { FC } from 'react'

import { SpinnerComponent, SpinnerComponentWrapper } from './Spinner.styles'

export interface SpinnerProps {
	id?: string
	color?: string
	hoverColor?: string
	'data-testid'?: string
}

export const Spinner: FC<SpinnerProps> = ({
	id = 'spinner',
	color,
	hoverColor,
	'data-testid': dataTestId = 'spinner'
}) => (
	<SpinnerComponentWrapper hoverColor={hoverColor}>
		<SpinnerComponent
			id={id}
			color={color}
			data-testid={dataTestId}
		/>
	</SpinnerComponentWrapper>
)

Spinner.displayName = 'novelUI/Components/Spinner'
