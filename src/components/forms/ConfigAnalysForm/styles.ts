'use client';
import {
  buttonClasses,
  formControlLabelClasses,
  typographyClasses,
} from '@mui/material';

import { theme } from '@/constants';

const styles = {
  contentWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(8),
  },
  fieldsWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(8),
  },
  additionalsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    [`& .${formControlLabelClasses.root}`]: {
      marginLeft: 0,
      [`& .${typographyClasses.root}`]: {
        paddingLeft: theme.spacing(4),
        fontWeight: 500,
        lineHeight: '125%',
      },
    },
    [`& .${buttonClasses.text}`]: {
      padding: 0,
      textTransform: 'uppercase',
      color: theme.palette.text.primary,
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '140%',
    },
  }, 
  fieldContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
  },
  buttonsWrapper: {
    width: '100%',
    display: 'flex',
    gap: theme.spacing(8),
  },
  rememberMeCheckbox: {
    [`& .${formControlLabelClasses.root}`]: {
      gap: 0,
    },
  },
  helperText: {
    margin: 0,
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    color: theme.palette.error.main,
  },
} as const;

export default styles;
