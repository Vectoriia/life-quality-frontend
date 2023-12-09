import { Button as MuiButton, CircularProgress } from '@mui/material';
import { forwardRef } from 'react';

import styles from './styles';

import type { IButtonProps } from './types';

const Button = forwardRef<HTMLButtonElement, IButtonProps>(function RefButton(
  { isLoading = false, children, sx, disabled, startIcon, endIcon, ...props }: IButtonProps,
  ref,
): JSX.Element {
  return (
    <MuiButton
      ref={ref}
      disabled={disabled || isLoading}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={sx}
      {...props}
    >
      {isLoading ? <CircularProgress size="22px" sx={styles.progress} /> : <>{children}</>}
    </MuiButton>
  );
});
export default Button;
