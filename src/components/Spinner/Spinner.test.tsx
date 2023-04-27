import { render, waitFor } from '../../utils/test-utils'
import { Spinner } from './Spinner'

describe('components/Spinner', () => {
	it('should render', async () => {
		const { getByTestId } = render(<Spinner />)

		await waitFor(() => {
			expect(getByTestId('spinner')).toBeInTheDocument()
		})
	})
})
