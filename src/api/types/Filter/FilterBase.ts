import { FilterType } from '.'

export interface FilterBase {
	id: string
	name: string
	description?: string
	image?: string
	icon?: string
	type: FilterType
}
