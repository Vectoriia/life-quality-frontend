import { Dialog, DialogContent, IconButton } from '@mui/material';

import { combineSx } from '@/utils';
import { RxCross1 } from 'react-icons/rx';
import styles from './styles';

import type { IBaseModalProps } from './types';

const BaseModal = ({ children, onClose, sx, ...props }: IBaseModalProps) => {
  return (
    <Dialog onClose={onClose} sx={combineSx(styles.dialog, sx)} {...props}>
      <DialogContent>{children}</DialogContent>
      <IconButton
        disableRipple
        disableFocusRipple
        onClick={onClose}
        sx={styles.closeIconButton}
      >
        <RxCross1 />
      </IconButton>
    </Dialog>
  );
};

export default BaseModal;
