import { useCallback, useMemo } from 'react'

import { Box, Checkbox, Flex, Grid, Text } from '@chakra-ui/react'

import { OptionsListProps, handleCheckboxChange } from '@components/Filter'

const OptionsList = ({
	filterItem,
	selectedOptions,
	setSelectedOptions
}: OptionsListProps) => {
	const selectedFilter = useMemo(
		() => selectedOptions.find(filter => filter.id === filterItem.id),
		[selectedOptions, filterItem.id]
	)

	const handleOnChange = useCallback(
		(optionId: string) => {
			handleCheckboxChange(
				optionId,
				filterItem.id,
				selectedOptions,
				setSelectedOptions
			)
		},
		[selectedOptions, setSelectedOptions, filterItem.id]
	)

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
				templateColumns={{
					base: '1fr',
					sm: 'repeat(2, 1fr)',
					md: 'repeat(3, 1fr)'
				}}
				gap={4}
			>
				{filterItem.options.map(option => (
					<Flex
						key={option.id}
						align="center"
						p={2}
						borderRadius="md"
						transition="all 0.2s"
						_hover={{ bg: 'gray.100' }}
						gap={2}
					>
						<Checkbox
							size="lg"
							isChecked={
								selectedFilter?.optionsIds.includes(option.id) ?? false
							}
							onChange={() => handleOnChange(option.id)}
							colorScheme="blue"
							mr={2}
						/>
						<Text fontSize="sm">{option.name}</Text>
					</Flex>
				))}
			</Grid>
		</Box>
	)
}

export default OptionsList
