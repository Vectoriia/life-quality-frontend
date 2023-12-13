import { Box, Typography } from '@mui/material';

import { BaseModal, CreateRecommendationForm } from '@/components';

import styles from './styles';

import type { ICreateRecommendationModalProps } from './types';

const CreateRecommendationModal = ({ open, onClose, initialValues }: ICreateRecommendationModalProps) => {
  return (
    <BaseModal open={open} onClose={onClose} sx={styles.modal}>
      <Typography variant="h2">Надіслати рекомендацію</Typography>
      <Box sx={styles.formWrapper}>
        <CreateRecommendationForm initialValues={initialValues} onClose={onClose} />
      </Box>
    </BaseModal>
  );
};
export default CreateRecommendationModal;
