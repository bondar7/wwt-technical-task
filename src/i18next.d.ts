import 'i18next'

import { resources } from '../public/locales'
import { I18N_DEFAULT_NS } from './constants'

declare module 'i18next' {
	interface CustomTypeOptions {
		defaultNS: typeof I18N_DEFAULT_NS
		resources: typeof resources.en

		// if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
		// set returnNull to false (and also in the i18next init options)
		// returnNull: false;
	}
}
