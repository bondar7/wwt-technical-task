import { extendTheme } from '@chakra-ui/react'
import { CalendarDefaultTheme } from '@uselessdev/datepicker'

export const CalendarTheme = extendTheme(CalendarDefaultTheme, {
	components: {
		Calendar: {
			parts: ['calendar', 'months'],

			baseStyle: {
				calendar: {
					borderColor: 'transparent',
					rounded: 'none',
					shadow: 'none'
				},
				months: {
					padding: 0,
					paddingTop: '1rem',
					gap: '4.375rem'
				}
			}
		},

		CalendarMonth: {
			parts: ['month', 'name', 'week', 'weekday', 'days'],
			baseStyle: {
				name: {
					fontFamily: 'body',
					fontSize: '1.25rem',
					fontWeight: 500
				},
				week: {
					columnGap: '0.375rem'
				},
				weekday: {
					paddingTop: '1.75rem',
					color: 'rgba(3, 3, 3, 0.77)',
					fontWeight: 500
				},
				days: {
					marginLeft: '-0.5rem',
					paddingTop: '1.5rem',
					rowGap: '0.75rem'
				}
			}
		},
		CalendarControl: {
			parts: ['button'],

			baseStyle: {
				button: {
					h: 6,
					px: 2,
					rounded: 'none',
					fontSize: 'sm',
					color: 'white',
					bgColor: 'pink.400',

					_hover: {
						bgColor: 'pink.200'
					},

					_focus: {
						outline: 'none'
					}
				}
			}
		}
	}
})
