import { extendTheme } from '@chakra-ui/react'

import {
	borderRadius,
	colors,
	config,
	global,
	shadows,
	textStyles,
	typography
} from './base'
import {
	buttonTheme,
	checkboxTheme,
	dividerTheme,
	linkTheme,
	modalTheme,
	radioTheme,
	sliderTheme,
	switchTheme
} from './components'
import { CalendarTheme } from './themes'

export const theme = extendTheme(CalendarTheme, {
	styles: {
		global
	},
	config: config,
	components: {
		Switch: switchTheme,
		Checkbox: checkboxTheme,
		Modal: modalTheme,
		Button: buttonTheme,
		Radio: radioTheme,
		Slider: sliderTheme,
		Divider: dividerTheme,
		Link: linkTheme
	},
	colors,
	...typography,
	textStyles,
	shadows,
	radii: borderRadius
})
