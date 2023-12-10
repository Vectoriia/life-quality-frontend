import type { DialogProps } from '@mui/material';
import type { ReactNode } from 'react';

export interface IBaseModalProps extends DialogProps {
  children: ReactNode;
  onClose: () => void;
}
