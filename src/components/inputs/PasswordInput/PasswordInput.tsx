import { InputAdornment, IconButton, TextField } from '@mui/material';

import { IoIosCheckmarkCircle } from 'react-icons/io';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';

import styles from './styles';
import usePasswordInput from './usePasswordInput';

import type { IPasswordInputProps } from './types';

function PasswordInput<
  V = string,
  FormValues extends Record<string, unknown> = Record<string, unknown>
>({
  field,
  form: { touched, errors },
  helperText,
  showCheckmark = true,
  ...props
}: IPasswordInputProps<V, FormValues>) {
  const hasError = Boolean(touched?.[field.name] && errors?.[field.name]);
  const isValidated = Boolean(touched?.[field.name] && !errors?.[field.name]);
  const hasHelperText = Boolean(helperText ?? hasError ?? null);

  const { handleShowPassword, isPasswordShown } = usePasswordInput();

  return (
    <TextField
      {...field}
      {...props}
      InputLabelProps={{ shrink: true, ...props.InputLabelProps }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" variant="standard">
            {isValidated && showCheckmark && (
              <IoIosCheckmarkCircle style={styles.checkmarkIcon} />
            )}
            <IconButton
              sx={styles.iconButton}
              disableRipple
              disableTouchRipple
              disableFocusRipple
              onClick={handleShowPassword}
              aria-label="Toggle password visibility"
            >
              {isPasswordShown ? <FiEyeOff /> : <FiEye />}
            </IconButton>
          </InputAdornment>
        ),
        ...props.InputProps,
      }}
      type={isPasswordShown ? 'text' : 'password'}
      error={hasError}
      FormHelperTextProps={{
        sx: styles.helperText,
      }}
      {...(hasHelperText
        ? {
            helperText: hasError ? errors[field.name]?.toString() : helperText,
          }
        : {})}
    />
  );
}

export default PasswordInput;
