import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle(props => {
	const { colorScheme: color } = props

	return {
		p: 0,
		h: 'auto',
		border: 'none',
		lineHeight: 'normal',
		verticalAlign: 'baseline',
		color: color === 'primary' ? 'primary.100' : `${color}.200`,
		textDecoration: 'underline',
		textDecorationThickness: '2px',
		textDecorationSkipInk: 'none',
		textUnderlineOffset: '3px',
		_hover: {
			color: 'gray.300',
			textDecorationThickness: '2px',
			textUnderlineOffset: '3px'
		},
		_active: {
			color: 'gray.500',
			textDecorationThickness: '2px',
			textUnderlineOffset: '3px'
		}
	}
})

export const linkTheme = defineStyleConfig({
	baseStyle,
	defaultProps: {
		colorScheme: 'primary'
	}
})
