import { theme } from '@/constants';

const styles = {
  checkmarkIcon: {
    color: theme.palette.success.main,
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  iconButton: {
    color: theme.palette.common.black,
    padding: theme.spacing(6, 6, 6, 4),
    svg: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  },
  helperText: {
    color: theme.palette.grey[600],
    fontSize: '13px',
    lineHeight: '19.5px',
  },
} as const;

export default styles;
