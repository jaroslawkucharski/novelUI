export const colors = {
	dark100: 'rgba(9, 9, 9, 1)',
	dark80: 'rgba(9, 9, 9, 0.8)',
	dark50: 'rgba(9, 9, 9, 0.5)',
	dark20: 'rgba(9, 9, 9, 0.2)',
	light100: 'rgba(221, 221, 221, 1)',
	light80: 'rgba(221, 221, 221, 0.8)',
	light50: 'rgba(221, 221, 221, 0.5)',
	light20: 'rgba(221, 221, 221, 0.2)'
}

export const font = {
	weights: {
		regular: 400,
		medium: 500,
		bold: 600
	},

	sizes: {
		s12: '12px',
		s16: '16px',
		s18: '18px',
		s28: '28px',
		s64: '64px',
		s128: '128px'
	},

	lineHeight: {
		l24: '24px',
		l44: '44px',
		l28: '28px'
	},

	letterSpacing: {
		ls1: 'normal',
		ls01: '0.1em',
		ls002: '0.02em'
	}
}

export const lightTheme = {
	colors: {
		main100: colors.light100,
		main80: colors.light80,
		main50: colors.light50,
		main20: colors.light20,
		secondary100: colors.dark100,
		secondary80: colors.dark80,
		secondary50: colors.dark50,
		secondary20: colors.dark20
	},
	font
}

export const darkTheme = {
	colors: {
		main100: colors.dark100,
		main80: colors.dark80,
		main50: colors.dark50,
		main20: colors.dark20,
		secondary100: colors.light100,
		secondary80: colors.light80,
		secondary50: colors.light50,
		secondary20: colors.light20
	},
	font
}
