import { FilterType } from '@api/types/Filter'
import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter.ts'

export const handleCheckboxChange = (
	optionId: string,
	filterItemId: string,
	selectedOptions: SearchRequestFilter,
	setSelectedOptions: (options: SearchRequestFilter) => void
) => {
	const existingFilterIndex: number = selectedOptions.findIndex(
		item => item.id === filterItemId
	)

	if (existingFilterIndex !== -1) {
		const optionsIds: string[] = selectedOptions[existingFilterIndex].optionsIds
		const isSelected: boolean = optionsIds.includes(optionId)

		const updatedOptionsIds: string[] = isSelected
			? optionsIds.filter((id: string) => id !== optionId)
			: [...optionsIds, optionId]

		const updatedFilterItem = {
			...selectedOptions[existingFilterIndex],
			optionsIds: updatedOptionsIds
		}

		setSelectedOptions([
			...selectedOptions.slice(0, existingFilterIndex),
			updatedFilterItem,
			...selectedOptions.slice(existingFilterIndex + 1)
		])
	} else {
		setSelectedOptions([
			...selectedOptions,
			{ id: filterItemId, type: FilterType.OPTION, optionsIds: [optionId] }
		])
	}
}
