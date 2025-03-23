// eslint-disable-next-line no-restricted-syntax
import { FilterState } from '@/store'

export const selectFilters = (state: FilterState) => state.filters
export const selectSetFilters = (state: FilterState) => state.setFilters
export const selectResetFilters = (state: FilterState) => state.resetFilters
