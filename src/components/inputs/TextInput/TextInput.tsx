import { TextField } from '@mui/material';

import type { ITextInputProps } from './types';

function TextInput<
  V = string,
  FormValues extends Record<string, unknown> = Record<string, unknown>,
>({
  field,
  form: { touched, errors },
  variant = 'outlined',
  helperText,
  ...props
}: ITextInputProps<V, FormValues>) {
  const hasError = Boolean(touched?.[field.name] && errors?.[field.name]);
  const hasHelperText = Boolean(helperText ?? hasError ?? null);

  return (
    <TextField
      {...field}
      {...props}
      variant={variant}
      error={hasError}
      InputLabelProps={{ shrink: true, ...props.InputLabelProps }}
      {...(hasHelperText
        ? {
            helperText: hasError ? errors?.[field.name]?.toString() : helperText,
          }
        : {})}
    />
  );
}

export default TextInput;
