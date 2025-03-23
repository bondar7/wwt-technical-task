import { create } from 'zustand'

import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter.ts'

export interface SelectedOptionsState {
	selectedOptions: SearchRequestFilter
	setSelectedOptions: (options: SearchRequestFilter) => void
	resetSelectedOptions: () => void
}

export const useSelectedOptionsStore = create<SelectedOptionsState>(set => ({
	selectedOptions: [],
	setSelectedOptions: options => set({ selectedOptions: options }),
	resetSelectedOptions: () => set({ selectedOptions: [] })
}))

