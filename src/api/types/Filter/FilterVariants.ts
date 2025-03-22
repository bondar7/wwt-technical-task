import { FilterBase, FilterChooseOption, FilterType } from '.'

export interface FilterChoose extends FilterBase {
	type: FilterType.OPTION
	allowAll?: boolean
	options: FilterChooseOption[]
}
