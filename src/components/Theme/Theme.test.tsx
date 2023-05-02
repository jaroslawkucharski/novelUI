import { render, waitFor } from '../../utils/test-utils'
import { Theme } from './Theme'

describe('components/Theme', () => {
	it('should be dark', async () => {
		const { getByText } = render(<Theme>Children</Theme>)

		await waitFor(() => {
			expect(getByText('Children')).toBeInTheDocument()
		})
	})

	it('should be light', async () => {
		const { getByText } = render(<Theme theme="light">Children</Theme>)

		await waitFor(() => {
			expect(getByText('Children')).toBeInTheDocument()
		})
	})
})
