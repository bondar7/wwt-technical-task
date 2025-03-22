import { ChakraProvider } from '@chakra-ui/react'

import { theme } from './theme'

export const ThemeProvider = (props: React.PropsWithChildren) => {
	return <ChakraProvider theme={theme}>{props.children}</ChakraProvider>
}
