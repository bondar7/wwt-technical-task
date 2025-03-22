import { sliderAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(sliderAnatomy.keys)

const baseStyle = definePartsStyle({
	track: {
		bg: 'gray.200'
	},
	filledTrack: {
		bg: 'black',
		transition: 'all 200ms cubic-bezier(.08,.82,.17,1)'
	},
	thumb: {
		bg: 'black',
		boxSize: 6,
		transition: 'all 200ms cubic-bezier(.08,.82,.17,1)'
	},
	mark: {
		color: 'black',
		fontSize: '1.5rem',
		fontWeight: '500',
		mt: '-1.875rem',
		transform: 'translateX(-50%) translateY(-100%)',
		transition: 'all 200ms cubic-bezier(.08,.82,.17,1)'
	}
})

const reversedTrackVariant = definePartsStyle({
	track: {
		bg: 'black'
	},
	filledTrack: {
		bg: 'gray.200'
	}
})

const noTransitionVariant = definePartsStyle({
	filledTrack: {
		transition: ''
	},
	thumb: {
		transition: ''
	},
	mark: {
		transition: ''
	}
})

export const sliderTheme = defineMultiStyleConfig({
	baseStyle,
	variants: {
		reversedTrack: reversedTrackVariant,
		noTransition: noTransitionVariant
	}
})
