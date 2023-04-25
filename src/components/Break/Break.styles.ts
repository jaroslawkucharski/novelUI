import styled, { css } from 'styled-components'

interface BreakComponentProps {
	width?: string
}

export const BreakComponent = styled.hr<BreakComponentProps>`
	width: 100%;

	${({ width }) =>
		css`
			width: ${width} || 100%;
			border: 0.5px solid #ccc;
		`}
`
