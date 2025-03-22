import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Button } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { queryOptions } from '@api/fetchFilters'
import { FilterItem } from '@api/types/Filter'

import { FilterModal } from '@components/Filter'

export const App = () => {
	const [initialFilters, setInitialFilters] = useState<FilterItem[]>([])
	const [isOpenFilterModal, setIsOpenFilterModal] = useState<boolean>(false)

	const handleOnOpen = useCallback(() => {
		setIsOpenFilterModal(true)
	}, [])

	const handleOnClose = useCallback(() => {
		setIsOpenFilterModal(false)
	}, [])

	const { t } = useTranslation('filter')

	const { data } = useQuery<FilterItem[], Error>(queryOptions)

	useEffect(() => {
		if (Array.isArray(data)) {
			setInitialFilters(data)
		}
	}, [data])

	return (
		<Box
			maxW="90rem"
			mx="auto"
			minH="100dvh"
			display="flex"
			justifyContent="center"
		>
			<Button
				mt="3"
				colorScheme="blue"
				variant="solid"
				size="lg"
				px="6"
				py="4"
				borderRadius="md"
				boxShadow="md"
				_hover={{ bg: 'blue.600', transform: 'scale(1.05)' }}
				_active={{ bg: 'blue.700', transform: 'scale(0.95)' }}
				onClick={handleOnOpen}
			>
				{t('filter')}
			</Button>
			<FilterModal
				initialFilters={initialFilters}
				isOpen={isOpenFilterModal}
				onClose={handleOnClose}
			/>
		</Box>
	)
}
