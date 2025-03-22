import { create } from 'zustand'

import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter.ts'

interface FilterState {
	filters: SearchRequestFilter | null
	setFilters: (filters: SearchRequestFilter) => void
	resetFilters: () => void
}

export const useFiltersStore = create<FilterState>(set => ({
	filters: null, // Initially, no filters are applied
	setFilters: filters => set({ filters }),
	resetFilters: () => set({ filters: null })
}))
