import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle({
	borderColor: '#AAA'
})

export const dividerTheme = defineStyleConfig({
	baseStyle
})
