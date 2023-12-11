import { Box, Typography } from "@mui/material";

import { BaseModal, ConfigAnalysForm } from "@/components";

import styles from "./styles";

import type { IConfigAnalysModalProps } from "./types";

const CreateAnalysModal = ({
  analys,
  open,
  onClose,
}: IConfigAnalysModalProps) => {
  return (
    <BaseModal open={open} onClose={onClose} sx={styles.modal}>
      <Typography variant="h2">Створити запит на аналіз</Typography>
      <Box sx={styles.formWrapper}>
        <ConfigAnalysForm analys={analys} onClose={onClose} />
      </Box>
    </BaseModal>
  );
};
export default CreateAnalysModal;
