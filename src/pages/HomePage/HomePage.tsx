import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Button, Flex, Text, useDisclosure } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { queryOptions } from '@api/fetchFilters'
import { FilterItem } from '@api/types/Filter'

import { FilterModal, useSelectedOptionsStore } from '@components/Filter'
import { selectSetSelectedOptions } from '@components/Filter/FilterModal/store'
import { selectFilters, useFiltersStore } from '@store'

export const HomePage = () => {
	const selectedFilters = useFiltersStore(selectFilters)
	const setSelectedOptions = useSelectedOptionsStore(selectSetSelectedOptions)
	const {
		isOpen: isFiltersOpen,
		onOpen: onFiltersOpen,
		onClose: onFiltersClose
	} = useDisclosure()
	const { t } = useTranslation('filter')

	const { data: initialFilters = [] } = useQuery<FilterItem[], Error>(
		queryOptions
	)

	const selectedFiltersJSON = useMemo(
		() => JSON.stringify(selectedFilters, null, 2),
		[selectedFilters]
	)

	const handleOnFiltersOpen = useCallback(() => {
		onFiltersOpen()
		setSelectedOptions(selectedFilters)
	}, [onFiltersOpen, setSelectedOptions, selectedFilters])

	return (
		<Flex
			p={8}
			flexDirection="column"
			alignItems="center"
		>
			<Button
				mt="3"
				paddingRight="70px"
				paddingLeft="70px"
				size="lg"
				variant="solid"
				colorScheme="brand"
				px="6"
				py="4"
				borderRadius="md"
				boxShadow="md"
				_hover={{ transform: 'scale(1.05)' }}
				_active={{ transform: 'scale(0.95)' }}
				fontSize="large"
				onClick={handleOnFiltersOpen}
			>
				{t('filter')}
			</Button>
			<Box mt={4}>
				{selectedFilters.length > 0 ? (
					<Box textStyle="headline-5">
						<pre>{selectedFiltersJSON}</pre>
					</Box>
				) : (
					<Text textStyle="headline-5">{t('noSelected')}</Text>
				)}
			</Box>
			<FilterModal
				initialFilters={initialFilters}
				isOpen={isFiltersOpen}
				onClose={onFiltersClose}
			/>
		</Flex>
	)
}
