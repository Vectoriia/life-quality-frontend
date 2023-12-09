import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';

import { combineSx } from '@/utils';

import styles from './styles';
import useCheckboxInput from './useCheckboxInput';

import type { ICheckboxInputProps } from './types';

function CheckboxInput<FormValues extends Record<string, unknown> = Record<string, unknown>>({
  field,
  form,
  label,
  labelProps,
  formControlLabelProps,
  sx,
  checked,
  onCustomChange,
  ...checkboxProps
}: ICheckboxInputProps<FormValues>) {
  const { isChecked, handleChange } = useCheckboxInput({ field, form, checked, onCustomChange });

  return (
    <Box sx={combineSx(styles.root, sx)}>
      <FormControlLabel
        control={
          <Checkbox disableRipple disableTouchRipple disableFocusRipple {...checkboxProps} />
        }
        onChange={handleChange}
        value={field.value}
        checked={isChecked}
        sx={combineSx(
          sx,
          !!form.errors?.[field.name] && !!form.touched?.[field.name] && styles.error,
        )}
        label={<Typography {...labelProps}>{label}</Typography>}
        {...formControlLabelProps}
      />
    </Box>
  );
}

export default CheckboxInput;
