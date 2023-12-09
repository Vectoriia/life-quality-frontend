'use client';
import { typographyClasses } from '@mui/material';

import { headerHeight, theme } from '@/constants';

const styles = {
  contentWrapper: {
    width: '100%',
    height: `calc(100vh - ${theme.spacing(headerHeight)})`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(8),
    marginTop: theme.spacing(headerHeight),
  },
  backRectangle: {
    maxWidth: '720px',
    width: '100%',
    flexShrink: 1,
    height: '568px',
    background: theme.palette.common.white,
    borderRadius: '48px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(8),
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(4.5),
    [`& .${typographyClasses.root}`]: {
      color: theme.palette.text.primary,
    },
  },
  formWrapper: {
    width: theme.spacing(160),
  },
} as const;

export default styles;
