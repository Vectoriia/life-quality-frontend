import { Box, Typography } from '@mui/material';

import { BaseModal, CreateAnalysForm } from '@/components';

import styles from './styles';

import type { ICreateAnalysModalProps } from './types';

const CreateAnalysModal = ({ open, onClose, patient }: ICreateAnalysModalProps) => {
  return (
    <BaseModal open={open} onClose={onClose} sx={styles.modal}>
      <Typography variant="h2">Створити запит на аналіз</Typography>
      <Box sx={styles.formWrapper}>
        <CreateAnalysForm 
          onClose={onClose} 
          initialValues={{
            patient: patient,
            type: null,
          }} 
        />
      </Box>
    </BaseModal>
  );
};
export default CreateAnalysModal;
