import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'

import { resources } from '../public/locales'
import { I18N_DEFAULT_LANGUAGE, I18N_DEFAULT_NS } from './constants'

i18n.use(initReactI18next).init({
	resources: resources,
	debug: true,
	// Remove on connect language detector
	lng: I18N_DEFAULT_LANGUAGE,
	interpolation: {
		escapeValue: false
	},
	defaultNS: I18N_DEFAULT_NS
})
