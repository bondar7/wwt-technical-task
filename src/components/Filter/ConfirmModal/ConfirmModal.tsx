import { useTranslation } from 'react-i18next'

import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay
} from '@chakra-ui/react'

import { ConfirmModalProps } from '@components/Filter'

const ConfirmModal = ({
	isOpen,
	onClose,
	onRefuse,
	onConfirm
}: ConfirmModalProps) => {
	const { t } = useTranslation('filter')

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader borderBottom="none">{t('confirmModalTitle')}</ModalHeader>
				<ModalCloseButton />
				<ModalBody></ModalBody>

				<ModalFooter
					display="flex"
					justifyContent="center"
					alignItems="center"
					gap="32px"
					p={6}
				>
					<Button
						variant="outline"
						borderColor="black"
						color="black"
						_hover={{
							bg: 'transparent',
							borderColor: 'gray.400'
						}}
						onClick={onRefuse}
						w={{ base: '80%', sm: 'auto' }}
						h={{ base: '48px', sm: '64px' }}
					>
						{t('useOldFilter')}
					</Button>

					<Button
						colorScheme="brand"
						onClick={onConfirm}
						w={{ base: '80%', sm: 'auto' }}
						h={{ base: '48px', sm: '64px' }}
					>
						{t('useNewFilter')}
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default ConfirmModal
