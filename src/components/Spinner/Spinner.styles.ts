import styled, { css } from 'styled-components'

import { SpinnerProps } from './Spinner'

export const SpinnerComponent = styled.span<SpinnerProps>`
	${({ theme: { colors }, color }) =>
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
				border-top-color: ${color || colors.secondary100};
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
		`}
`
