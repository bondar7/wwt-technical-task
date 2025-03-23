import { SelectedOptionsState } from '@components/Filter/FilterModal/store'

export const selectSelectedOptions = (state: SelectedOptionsState) =>
	state.selectedOptions
export const selectSetSelectedOptions = (state: SelectedOptionsState) =>
	state.setSelectedOptions
export const selectResetSelectedOptions = (state: SelectedOptionsState) =>
	state.resetSelectedOptions
