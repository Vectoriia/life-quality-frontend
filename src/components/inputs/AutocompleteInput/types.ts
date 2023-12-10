import type { AutocompleteProps, AutocompleteValue, TextFieldProps } from '@mui/material';
import type { FieldProps } from 'formik';

export interface IAutocompleteInputProps<
  Option = string,
  FormValues extends Record<string, unknown> = Record<string, unknown>,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
> extends FieldProps<
      AutocompleteValue<Option, Multiple, true | DisableClearable, FreeSolo>,
      FormValues
    >,
    Omit<
      AutocompleteProps<Option, Multiple, DisableClearable, FreeSolo>,
      | 'name'
      | 'value'
      | 'onChange'
      | 'onBlur'
      | 'onInputChange'
      | 'inputValue'
      | 'onOpen'
      | 'onClose'
      | 'options'
    > {
  options: Option[];
  textFieldProps?: TextFieldProps;
  disableIndicatorAnimation?: boolean;
}

export type IUseAutocompleteInputProps<
  Option = string,
  FormValues extends Record<string, unknown> = Record<string, unknown>,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
> = Pick<
  IAutocompleteInputProps<Option, FormValues, Multiple, DisableClearable, FreeSolo>,
  'form' | 'field' | 'multiple' | 'freeSolo'
>;
