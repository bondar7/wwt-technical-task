import { radioAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(radioAnatomy.keys)

const baseStyle = definePartsStyle({
	control: {
		bg: 'white',
		borderWidth: '0.0625rem',
		borderColor: 'rgba(0, 0, 0, 0.27)',

		_checked: {
			bg: 'white',

			borderWidth: '0.3125rem',
			borderColor: 'black'
		},

		_disabled: {
			borderColor: 'rgba(0, 0, 0, 0.1)',
			bg: 'white'
		}
	}
})

const mdSize = definePartsStyle({
	control: {
		w: '1.1875rem',
		h: '1.1875rem'
	}
})

export const radioTheme = defineMultiStyleConfig({
	baseStyle,
	defaultProps: {
		size: 'md'
	},
	sizes: {
		md: mdSize
	}
})
