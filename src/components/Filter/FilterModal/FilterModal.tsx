import { useTranslation } from 'react-i18next'

import {
	Box,
	Button,
	Divider,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay
} from '@chakra-ui/react'

import { useFilterLogic } from '@/hooks/useFilterLogic.ts'
import { FilterModalProps } from '@components/Filter'
import ConfirmModal from '@components/Filter/ConfirmModal/ConfirmModal.tsx'
import OptionsList from '@components/Filter/FilterModal/OptionsList.tsx'

const FilterModal = ({ initialFilters, isOpen, onClose }: FilterModalProps) => {
	const { t } = useTranslation('filter')
	const {
		isOpenConfirmModal,
		handleOnClose,
		handleOnRefuse,
		handleOnConfirm,
		onApply,
		onReset,
		onCloseFilterModal,
		selectedOptions,
		setSelectedOptions
	} = useFilterLogic(onClose)

	return (
		<Modal
			isOpen={isOpen}
			onClose={onCloseFilterModal}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{t('filter')}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					{Array.isArray(initialFilters) &&
						initialFilters.map(item => (
							<Box key={item.id}>
								<OptionsList
									selectedOptions={selectedOptions}
									setSelectedOptions={setSelectedOptions}
									filterItem={item}
								/>
								<Divider mt={4} />
							</Box>
						))}
					{isOpenConfirmModal && (
						<ConfirmModal
							isOpen={isOpenConfirmModal}
							onClose={handleOnClose}
							onRefuse={handleOnRefuse}
							onConfirm={handleOnConfirm}
						/>
					)}
				</ModalBody>

				<ModalFooter
					display="flex"
					alignItems="center"
					justifyContent="center"
					p={0}
					position="relative"
				>
					<Box
						my={5}
						w="100%"
						display="flex"
						justifyContent="center"
					>
						<Button
							onClick={onApply}
							paddingRight="70px"
							paddingLeft="70px"
							size="lg"
							colorScheme="brand"
						>
							{t('apply')}
						</Button>
					</Box>
					<Button
						onClick={onReset}
						position="absolute"
						variant="ghost"
						textDecoration="underline"
						right={0}
						border="none"
						color="primary.100"
					>
						{t('clear')}
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default FilterModal
