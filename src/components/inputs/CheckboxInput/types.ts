import type { CheckboxProps, FormControlLabelProps, TypographyProps } from '@mui/material';
import type { FieldProps } from 'formik';

export interface ICheckboxInputProps<
  V = string,
  FormValues extends Record<string, unknown> = Record<string, unknown>,
> extends FieldProps<V, FormValues>,
    Omit<CheckboxProps, 'value' | 'onChange' | 'form'> {
  label: string;
  labelProps?: TypographyProps;
  formControlLabelProps?: FormControlLabelProps;
  checked?: boolean;
  onCustomChange?: () => void;
}

export type IUseCheckboxInputProps<
  FormValues extends Record<string, unknown> = Record<string, unknown>,
> = Pick<ICheckboxInputProps<FormValues>, 'field' | 'form' | 'checked' | 'onCustomChange'>;
