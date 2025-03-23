import { useCallback, useState } from 'react'

import { useSelectedOptionsStore } from '@components/Filter'
import {
	selectResetSelectedOptions,
	selectSelectedOptions,
	selectSetSelectedOptions
} from '@components/Filter/FilterModal/store'
import { selectFilters, selectSetFilters, useFiltersStore } from '@store'

export const useFilterLogic = (onClose: () => void) => {
	const setFilters = useFiltersStore(selectSetFilters)
	const storeFilters = useFiltersStore(selectFilters)

	const selectedOptions = useSelectedOptionsStore(selectSelectedOptions)
	const setSelectedOptions = useSelectedOptionsStore(selectSetSelectedOptions)
	const resetSelectedOptions = useSelectedOptionsStore(
		selectResetSelectedOptions
	)

	const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false)

	const handleOnClose = useCallback(() => setIsOpenConfirmModal(false), [])

	const handleOnRefuse = useCallback(() => {
		handleOnClose()
		onClose()
		setSelectedOptions(storeFilters)
	}, [storeFilters])

	const handleOnConfirm = useCallback(() => {
		handleOnClose()
		onClose()
		setFilters(selectedOptions)
	}, [selectedOptions])

	const onApply = useCallback(() => setIsOpenConfirmModal(true), [])

	const onReset = useCallback(() => {
		resetSelectedOptions()
	}, [])

	const onCloseFilterModal = useCallback(() => {
		setSelectedOptions(storeFilters)
		onClose()
	}, [storeFilters])

	return {
		isOpenConfirmModal,
		handleOnClose,
		handleOnRefuse,
		handleOnConfirm,
		onApply,
		onReset,
		onCloseFilterModal,
		selectedOptions,
		setSelectedOptions,
		storeFilters
	}
}
