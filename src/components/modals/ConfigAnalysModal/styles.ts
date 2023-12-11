'use client';
import { dialogContentClasses, paperClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  modal: {
    minHeight: theme.spacing(185.5),
    [`& .${paperClasses.root}`]: {
      maxWidth: theme.spacing(300),
      [`& .${dialogContentClasses.root}`]: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(8),
        padding: theme.spacing(12),
        justifyContent: 'center',
        alignItems: 'start',
        width: '100%',
      },
    },
  },
  formWrapper: {
    width: '100%',
  },
};

export default styles;
