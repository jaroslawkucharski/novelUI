import { FC, ReactEventHandler, ReactNode } from 'react'

import { colors } from '../../styles/theme'
import { Spinner } from '../Spinner'
import { ButtonComponent } from './Button.styles'

export type Variants = 'primary' | 'secondary' | 'icon'

export interface CommonButtonProps {
	variant?: Variants
	type?: 'button' | 'submit' | 'reset'
	onClick?: ReactEventHandler<HTMLButtonElement>
	width?: string
	hasFullWidth?: boolean
	borderRadius?: number
	isLoading?: boolean
	isDisabled?: boolean
	'data-testid'?: string
}

type IconVariantProps = {
	variant: 'icon'
	label?: ReactNode
	icon: ReactNode
	width?: never
	hasFullWidth?: never
}

type DefaultVariantProps = {
	variant?: 'primary' | 'secondary'
	label: ReactNode
	icon?: ReactNode
	width?: string | number
	hasFullWidth?: boolean
}

type ConditionalProps = DefaultVariantProps | IconVariantProps

export type ButtonProps = ConditionalProps & CommonButtonProps

export const Button: FC<ButtonProps> = ({
	label,
	icon,
	variant = 'primary',
	type = 'button',
	onClick,
	width = 'auto',
	hasFullWidth = false,
	borderRadius = 0,
	isLoading = false,
	isDisabled = false,
	'data-testid': dataTestId = 'button',
	...restProps
}) => (
	<ButtonComponent
		id="button"
		variant={variant}
		type={type}
		onClick={onClick}
		width={width}
		hasFullWidth={hasFullWidth}
		borderRadius={borderRadius}
		isLoading={isLoading}
		disabled={isDisabled}
		data-testid={dataTestId}
		{...restProps}
	>
		{isLoading ? (
			<Spinner
				color={variant === 'secondary' ? '' : colors.dark100}
				hoverColor={colors.dark100}
			/>
		) : (
			<>
				{icon} {label}
			</>
		)}
	</ButtonComponent>
)

Button.displayName = 'novelUI/Components/Button'
