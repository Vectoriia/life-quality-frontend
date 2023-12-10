'use client';
import { theme } from '@/constants';

const style = {
  option: {
    color: theme.palette.text.primary,
    display: 'flex',
    width: '100%',
    padding: theme.spacing(4, 6),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
  },
  optionContent: {
    display: 'flex',
    gap: theme.spacing(4),
    alignItems: 'center',
    width: '100%',
  },
  optionText: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
};

export default style;
