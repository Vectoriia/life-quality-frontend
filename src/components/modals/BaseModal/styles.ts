'use client';
import { dialogContentClasses, paperClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  dialog: {
    width: '100%',
    height: '100%',
    padding: 0,
    [`& .${dialogContentClasses.root}`]: {
      overflow: 'initial',
      boxSizing: 'border-box',
    },
    [`& .${paperClasses.root}`]: {
      width: '100%',
      margin: 0,
    },
  },
  closeIconButton: {
    position: 'absolute',
    padding: 0,
    top: theme.spacing(12),
    right: theme.spacing(12),
    width: theme.spacing(12),
    height: theme.spacing(12),
    color: theme.palette.common.black,
  },
} as const;

export default styles;
