import { render, waitFor } from '../../utils/test-utils'
import { Button } from './Button'

describe('components/Button', () => {
	it('it should render', async () => {
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

	it('should have secondary variant', async () => {
		const { getByTestId } = render(
			<Button
				label="Button"
				variant="secondary"
			/>
		)

		await waitFor(() => {
			expect(getByTestId('button')).toBeInTheDocument()
		})
	})

	it('it should load ', async () => {
		const { getByTestId } = render(
			<Button
				label="Button"
				isLoading
			/>
		)

		await waitFor(() => {
			expect(getByTestId('button')).toBeInTheDocument()
		})
	})

	it('it should load and have secondary variant', async () => {
		const { getByTestId } = render(
			<Button
				label="Button"
				variant="secondary"
				isLoading
			/>
		)

		await waitFor(() => {
			expect(getByTestId('button')).toBeInTheDocument()
		})
	})
})
