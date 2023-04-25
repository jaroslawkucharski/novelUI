import { create } from '@storybook/theming'

import brandImage from '../src/assets/images/nui.svg'

export default create({
	base: 'dark',
	brandTitle: 'novelUI',
	brandUrl: './',
	brandImage,
	brandTarget: '_self'
})
