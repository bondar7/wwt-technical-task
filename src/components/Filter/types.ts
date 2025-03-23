import { FilterItem } from '@api/types/Filter'
import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter.ts'

export interface FilterModalProps {
	initialFilters: FilterItem[]
	isOpen: boolean
	onClose: () => void
}

export interface ConfirmModalProps {
	isOpen: boolean
	onClose: () => void
	onRefuse: () => void
	onConfirm: () => void
}

export interface OptionsListProps {
	filterItem: FilterItem
	selectedOptions: SearchRequestFilter
	setSelectedOptions: (options: SearchRequestFilter) => void
}