import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useQuery } from '@tanstack/react-query'

import { queryOptions } from '@api/fetchFilters'
import { FilterItem } from '@api/types/Filter'

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
		></Box>
	)
}
