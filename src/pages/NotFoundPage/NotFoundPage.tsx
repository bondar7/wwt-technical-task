import { useTranslation } from 'react-i18next'
import { useRouteError } from 'react-router-dom'

import { Box } from '@chakra-ui/react'

export const NotFoundPage = () => {
	const { t } = useTranslation('not-found')
	const error = useRouteError() as Error

	return (
		<Box>
			{t('text')}

			{error.name}
			{error.message}
		</Box>
	)
}
