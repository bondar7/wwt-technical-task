import { UseQueryOptions } from '@tanstack/react-query'

import { ResponseType } from '@api/fetchFilters/types.ts'
import { FilterItem } from '@api/types/Filter'

export const fetchFilters = async (): Promise<FilterItem[]> => {
	const response = await fetch('/src/temp/filterData.json')
	if (!response.ok) {
		throw new Error('Failed to fetch filter data')
	}
	const obj: ResponseType = await response.json()
	return obj.filterItems
}
// This will work during development, but in a production build, static assets should be served correctly by a web server

export const queryOptions: UseQueryOptions<FilterItem[], Error> = {
	queryKey: ['filters'],
	queryFn: fetchFilters
}
