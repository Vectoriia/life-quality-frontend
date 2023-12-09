'use client';
import {
  buttonBaseClasses,
  checkboxClasses,
  formControlLabelClasses,
} from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    [`& .${formControlLabelClasses.root}`]: {
      margin: 0,
      gap: theme.spacing(6),
    },
  },
  error: {
    [`& .${buttonBaseClasses.root}.${checkboxClasses.root}`]: {
      color: theme.palette.error.main,
    },
  },
} as const;

export default styles;
