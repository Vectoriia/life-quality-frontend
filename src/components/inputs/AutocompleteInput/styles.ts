import {
  autocompleteClasses,
  formControlClasses,
  inputBaseClasses,
  paperClasses,
} from '@mui/material';

import { theme } from '@/constants';

const styles = {
  autocomplete: (disableIndicatorAnimation?: boolean) => ({
    width: '100%',
    ...(disableIndicatorAnimation && {
      [`& .${autocompleteClasses.popupIndicator}`]: {
        transform: 'none',
      },
    }),
    [`& .${formControlClasses.root} .${inputBaseClasses.root}`]: {
      padding: 0,
    },
  }),
  popper: {
    width: 'inherit',
    maxHeight: theme.spacing(160),
    minHeight: theme.spacing(28),
    boxShadow: theme.shadows[14],
    borderRadius: theme.spacing(2),
    border: `1px solid ${theme.palette.common.blue}`,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.common.white,
    [`& .${paperClasses.root}.${autocompleteClasses.paper}`]: {
      overflow: 'hidden',
      margin: 0,
      [`& .${autocompleteClasses.listbox}`]: {
        maxHeight: theme.spacing(160),
        padding: theme.spacing(4, 0),
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        [`& .${autocompleteClasses.option}`]: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexShrink: 0,
          '&.Mui-focused': {
            background: '#EEF4F9',
          },
        },
        [`& .${autocompleteClasses.option}[aria-selected='true']`]: {
          background: '#fff',
          ['&.Mui-focused']: {
            background: '#EEF4F9',
          },
        },
      },
    },
  },
  optionText: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  checkmark: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
} as const;

export default styles;
