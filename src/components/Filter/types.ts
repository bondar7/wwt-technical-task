import { FilterItem } from '@api/types/Filter'

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
}