import styled, { css, DefaultTheme } from 'styled-components'

import { CommonButtonProps, Variants } from './Button'

const variantStyles = ({ colors }: DefaultTheme, variant = 'primary') =>
	({
		primary: css`
			color: ${colors.main100};
			background: ${colors.secondary100};

			&:hover {
				background: ${colors.secondary80};
			}

			&:disabled,
			&[disabled] {
				color: ${colors.main50};
				background: ${colors.secondary50};
				cursor: not-allowed;
			}
		`,
		secondary: css`
			color: ${colors.secondary100};
			background: ${colors.main100};
			border: 2px solid ${colors.secondary100};

			&:hover {
				color: ${colors.main100};
				background: ${colors.secondary100};
			}

			&:disabled,
			&[disabled] {
				color: ${colors.secondary50};
				background: ${colors.main100};
				border: 2px solid ${colors.secondary50};
				cursor: not-allowed;
			}
		`,
		icon: css`
			padding: 13px;
			min-width: 42px;
			width: 42px;
			height: 42px;
			color: ${colors.main100};
			background: ${colors.secondary100};

			&:hover {
				background: ${colors.secondary80};
			}

			&:disabled,
			&[disabled] {
				color: ${colors.main50};
				background: ${colors.secondary50};
				cursor: not-allowed;
			}
		`
	}[variant])

export const ButtonComponent = styled.button<CommonButtonProps>`
	cursor: pointer;
	padding: 13px 16px;
	min-width: 160px;
	height: 42px;
	border: 0;
	border-radius: 50px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	position: relative;
	transition: background 0.4s;

	${({ theme: { font }, hasFullWidth }) =>
		css`
			width: ${hasFullWidth && '100%'};
			font-size: ${font.sizes.s16};
			font-weight: ${font.weights.regular};
		`}

	${({ theme: { colors }, isLoading, variant = 'primary' }) => {
		const isPrimaryStyle = (variant: Variants) =>
			variant === 'primary' || variant === 'icon'

		return (
			isLoading &&
			css`
				cursor: wait;
				pointer-events: none;

				&::after {
					content: '';
					top: 0;
					bottom: 0;
					margin: auto;
					left: 0;
					right: 0;
					width: 16px;
					height: 16px;
					border: 4px solid transparent;
					border-radius: 50%;
					border-top-color: ${isPrimaryStyle(variant)
						? colors.main100
						: colors.secondary100};
					position: absolute;
					animation: spinner 1s ease infinite;
				}

				@keyframes spinner {
					from {
						transform: rotate(0turn);
					}

					to {
						transform: rotate(1turn);
					}
				}
			`
		)
	}}

	${({ theme, variant }) => variantStyles(theme, variant)}
`
