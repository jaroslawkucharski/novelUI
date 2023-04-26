import { FC, ReactEventHandler, ReactNode } from 'react'

import { ButtonComponent } from './Button.styles'

export interface CommonButtonProps {
	variant?: 'primary' | 'secondary' | 'icon'
	type?: 'button' | 'submit' | 'reset'
	onClick?: ReactEventHandler<HTMLButtonElement>
	hasFullWidth?: boolean
	isLoading?: boolean
	isDisabled?: boolean
	'data-testid'?: string
}

type IconVariantProps = {
	variant: 'icon'
	label?: ReactNode
	icon: ReactNode
}

type DefaultVariantProps = {
	variant?: 'primary' | 'secondary'
	label: ReactNode
	icon?: ReactNode
}

type ConditionalProps = DefaultVariantProps | IconVariantProps

export type ButtonProps = ConditionalProps & CommonButtonProps

export const Button: FC<ButtonProps> = ({
	label,
	icon,
	variant = 'primary',
	type = 'button',
	onClick,
	hasFullWidth = false,
	isLoading = false,
	isDisabled = false,
	'data-testid': dataTestId = 'button'
}) => (
	<ButtonComponent
		variant={variant}
		type={type}
		onClick={onClick}
		hasFullWidth={hasFullWidth}
		isLoading={isLoading}
		disabled={isDisabled}
		data-testid={dataTestId}
	>
		{isLoading ? null : icon}

		{isLoading ? null : label}
	</ButtonComponent>
)

Button.displayName = 'novelUI/Components/Button'
