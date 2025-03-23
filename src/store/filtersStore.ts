import { create } from 'zustand'

import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter.ts'

export interface FilterState {
	filters: SearchRequestFilter
	setFilters: (filters: SearchRequestFilter) => void
	resetFilters: () => void
}

export const useFiltersStore = create<FilterState>(set => ({
	filters: [],
	setFilters: filters => set({ filters }),
	resetFilters: () => set({ filters: [] })
}))
