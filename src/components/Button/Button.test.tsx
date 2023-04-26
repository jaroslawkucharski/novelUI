import { render, waitFor } from '../../utils/test-utils'
import { Button } from './Button'

describe('components/Button', () => {
	it('should be variant primary', async () => {
		const { getByTestId } = render(<Button label="Button" />)

		await waitFor(() => {
			expect(getByTestId('button')).toBeInTheDocument()
		})
	})

	it('should have full width', async () => {
		const { getByTestId } = render(
			<Button
				label="Button"
				hasFullWidth
			/>
		)

		await waitFor(() => {
			expect(getByTestId('button')).toBeInTheDocument()
		})
	})
})
