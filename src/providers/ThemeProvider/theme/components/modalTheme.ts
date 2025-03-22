import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
	overlay: {
		backdropFilter: 'blur(12.5px)'
	},

	dialogContainer: {
		padding: '5rem'
	},

	dialog: {
		borderRadius: 'md',
		margin: 0,
		px: '2.5rem'
	},

	closeButton: {
		top: '1.1875rem',
		right: '1.4375rem'
	},

	header: {
		fontSize: '2.5rem',
		fontWeight: 'medium',
		textAlign: 'center',
		pb: 5,
		borderBottom: '1px solid #AAAAAA'
	},

	body: {
		px: 0
	}
})

const sizes = {
	md: {
		dialog: {
			maxW: '47.9375rem'
		}
	},
	lg: {
		dialog: {
			maxW: '54.875rem'
		}
	},
	xl: {
		dialog: {
			maxW: '100%'
		}
	}
}

export const modalTheme = defineMultiStyleConfig({
	baseStyle,
	sizes,
	defaultProps: {
		size: 'md'
	}
})
