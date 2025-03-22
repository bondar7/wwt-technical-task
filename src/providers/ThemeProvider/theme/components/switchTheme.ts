import { switchAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(switchAnatomy.keys)

const baseStyle = definePartsStyle({
	track: {
		borderWidth: '0.063rem', // 1px
		borderStyle: 'solid',
		borderColor: 'gray.200',
		'--switch-bg': 'white',

		_checked: {
			'--switch-bg': 'white',
			borderColor: '#121212'
		}
	},

	thumb: {
		bg: '#B9B9B9',

		_checked: {
			bg: '#333333'
		}
	}
})

export const switchTheme = defineMultiStyleConfig({
	baseStyle,
	sizes: {
		md: {
			container: {
				'--switch-track-width': '2.375rem' // 38px
			},

			track: {
				py: '0.188rem', // 3px
				px: '0.25rem' // 4px
			}
		}
	}
})
