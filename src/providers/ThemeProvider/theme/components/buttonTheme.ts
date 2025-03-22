import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle({
	_disabled: {
		opacity: 1
	}
})

const variantSolid = defineStyle(props => {
	const { colorScheme: color } = props
	const common = defineStyle({
		border: 'none'
	})

	if (color === 'brand') {
		return {
			...common,
			bg: 'brand.200',
			color: 'white',
			_hover: {
				bg: 'brand.100',
				_disabled: {
					bg: 'gray.100'
				}
			},
			_active: {
				bg: 'brand.300',
				_disabled: {
					bg: 'gray.100'
				}
			},
			_disabled: {
				bg: 'gray.100',
				color: 'gray.300'
			},
			_loading: {
				_disabled: {
					bg: 'brand.200',
					color: 'white'
				}
			}
		}
	}

	return {
		...common,
		bg: `${color}.200`,
		_hover: {
			bg: `${color}.100`,
			_disabled: {
				bg: 'gray.100'
			}
		},
		_active: {
			bg: `${color}.300`,
			_disabled: {
				bg: 'gray.100'
			}
		},
		_disabled: {
			bg: 'gray.100',
			color: 'gray.300'
		},
		_loading: {
			_disabled: {
				bg: `${color}.200`,
				color: 'white'
			}
		}
	}
})

const variantOutline = defineStyle(props => {
	const { colorScheme: color } = props

	const common = defineStyle({
		bg: 'white',
		borderStyle: 'solid',
		border: '',
		_hover: {
			_disabled: {
				bg: 'gray.100',
				color: 'gray.300',
				borderColor: 'gray.200',
				shadow: 'none'
			}
		},
		_active: {
			bg: `${color}.200`,
			color: 'white',
			borderColor: `${color}.100`,
			shadow: 'none',
			_disabled: {
				bg: 'gray.100',
				color: 'gray.300',
				borderColor: 'gray.200'
			},
			_loading: {
				_disabled: {
					borderColor: `${color}.200`
				}
			}
		},
		_disabled: {
			bg: 'gray.100',
			color: 'gray.300'
		},
		_loading: {
			_disabled: {
				bg: 'white',
				color: `${color}.200`
			}
		}
	})

	if (color === 'gray') {
		return {
			...common,
			color: 'gray.500',
			borderColor: 'gray.200',
			_hover: {
				...common._hover,
				bg: 'gray.100',
				color: 'gray.500',
				shadow: 'gray-glow'
			},
			_active: {
				...common._active,
				bg: 'white',
				color: 'brand.300',
				borderColor: 'currentColor',
				_disabled: {
					bg: 'gray.100',
					color: 'gray.300',
					borderColor: 'gray.200'
				},
				_loading: {
					_disabled: {
						borderColor: 'currentColor'
					}
				}
			},
			_loading: {
				_disabled: {
					color: 'gray.400',
					borderColor: 'currentColor'
				}
			}
		}
	}

	return {
		...common,
		color: `${color}.200`,
		borderColor: 'currentColor',
		_hover: {
			...common._hover,
			bg: 'white',
			color: `${color}.300`,
			shadow: 'glow'
		},
		_active: {
			...common._active,
			bg: `${color}.200`,
			color: 'white',
			borderColor: `${color}.100`,
			shadow: 'none'
		},
		_disabled: {
			bg: 'gray.100',
			color: 'gray.300',
			borderColor: 'gray.200'
		},
		_loading: {
			_disabled: {
				bg: 'white',
				color: `${color}.200`,
				borderColor: 'currentColor'
			}
		}
	}
})

const variantIconAlt = defineStyle(props => {
	const { colorScheme: color } = props
	const common = defineStyle({
		border: 'none'
	})

	if (color === 'gray') {
		return {
			...common,
			bg: 'white',
			color: 'gray.500',
			_hover: {
				bg: 'gray.100',
				_disabled: {
					bg: 'gray.200'
				}
			},
			_active: {
				bg: 'gray.500',
				color: 'white',
				_disabled: {
					color: 'gray.400',
					bg: 'gray.200'
				}
			},
			_disabled: {
				bg: 'gray.200',
				color: 'gray.400'
			},
			_loading: {
				_disabled: {
					bg: 'white',
					color: 'gray.500'
				}
			}
		}
	}

	return {
		...common,
		bg: `${color}.200`,
		color: 'white',
		_hover: {
			bg: `${color}.100`,
			shadow: 'glow',
			_disabled: {
				bg: 'gray.100',
				shadow: 'none'
			}
		},
		_active: {
			bg: `${color}.300`,
			_disabled: {
				bg: 'gray.100',
				shadow: 'none'
			}
		},
		_disabled: {
			bg: 'gray.100',
			color: 'gray.300'
		},
		_loading: {
			_disabled: {
				bg: `${color}.200`,
				color: 'white'
			}
		}
	}
})

const variantIcon = defineStyle(props => {
	const { colorScheme: color } = props
	const common = defineStyle({
		border: 'none'
	})

	if (color === 'gray') {
		return {
			...common,
			color: 'gray.500',
			_hover: {
				color: 'brand.200',
				_disabled: {
					color: 'gray.300'
				}
			},
			_active: {
				color: 'brand.300',
				_disabled: {
					color: 'gray.300'
				}
			},
			_disabled: {
				color: 'gray.300'
			},
			_loading: {
				_disabled: {
					color: 'gray.300'
				}
			}
		}
	}

	return {
		...common,
		color: `${color}.200`,
		_hover: {
			color: `${color}.100`,
			_disabled: {
				color: 'gray.300'
			}
		},
		_active: {
			color: `${color}.300`,
			_disabled: {
				color: 'gray.300'
			}
		},
		_disabled: {
			color: 'gray.300'
		},
		_loading: {
			_disabled: {
				color: 'gray.300'
			}
		}
	}
})

const variantTab = defineStyle({
	bg: 'white',
	color: 'gray.500',
	flexDir: 'column',
	border: '0.0625rem solid',
	borderColor: 'gray.200',
	gap: '0.25rem', // 4px
	_hover: {
		bg: 'gray.100',
		borderColor: 'transparent',
		_disabled: {
			bg: 'gray.200'
		}
	},
	_active: {
		bg: 'gray.500',
		color: 'white',
		borderColor: 'transparent',
		_disabled: {
			bg: 'gray.200',
			color: 'gray.400'
		}
	},
	_disabled: {
		bg: 'gray.200',
		color: 'gray.400'
	}
})

const linkVariant = defineStyle(props => {
	const { colorScheme: color } = props

	return {
		p: 0,
		h: 'auto',
		border: 'none',
		lineHeight: 'normal',
		verticalAlign: 'baseline',
		color: color === 'primary' ? 'primary.100' : `${color}.200`,
		textDecoration: 'underline',
		textDecorationThickness: '0.125rem',
		textDecorationSkipInk: 'none',
		textUnderlineOffset: '0.1875rem',
		_hover: {
			color: 'gray.300',
			textDecorationThickness: '0.125rem',
			textUnderlineOffset: '0.1875rem'
		},
		_active: {
			color: 'gray.500',
			textDecorationThickness: '0.125rem',
			textUnderlineOffset: '0.1875rem'
		}
	}
})

const variants = {
	solid: variantSolid,
	outline: variantOutline,
	icon: variantIcon,
	'icon-alt': variantIconAlt,
	tab: variantTab,
	link: linkVariant
}

const sizes = {
	sm: defineStyle({
		h: '2.5rem', // 40px
		px: '1.5rem', // 24px
		borderWidth: '0.0625rem'
	}),
	md: defineStyle({
		h: '3rem', // 48px
		px: '1.5rem', // 24px
		borderWidth: '0.125rem'
	}),
	lg: defineStyle({
		fontSize: 'md',
		h: '4rem', // 64px
		px: '2rem', // 32px
		borderWidth: '0.125rem'
	}),
	icon: defineStyle({
		w: '4rem', // 64px
		h: '4rem' // 64px
	}),
	'icon-medium': defineStyle({
		w: '3rem', // 48px
		h: '3rem', // 48px
		borderRadius: 'sm'
	}),
	'icon-small': defineStyle({
		w: '2.5rem', // 40px
		h: '2.5rem', // 40px
		borderRadius: '0.5rem'
	}),
	tab: defineStyle({
		h: '6rem', // 96px
		w: '7.5rem', // 120px
		borderRadius: 'md',
		fontWeight: 'normal'
	}),
	'tab-small': defineStyle({
		h: '3rem', // 48px
		px: '1.5rem', // 24px
		borderRadius: 'sm',
		fontWeight: 'medium'
	})
}

export const buttonTheme = defineStyleConfig({
	baseStyle,
	variants,
	sizes
})
