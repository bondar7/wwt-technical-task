import { Box, Checkbox, Grid, Text } from '@chakra-ui/react'

import { OptionsListProps } from '@components/Filter'

const OptionsList = ({ filterItem }: OptionsListProps) => {
	return (
		<Box p={4}>
			<Text
				fontSize="lg"
				fontWeight="bold"
				mb={4}
			>
				{filterItem.name}
			</Text>
			<Grid
				templateColumns="repeat(3, 1fr)"
				gap={4}
			>
				{filterItem.options.map(option => (
					<Checkbox key={option.id}>
						<Text fontSize="sm">{option.name}</Text>
					</Checkbox>
				))}
			</Grid>
		</Box>
	)
}

export default OptionsList
