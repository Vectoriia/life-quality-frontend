'use client';
import { Autocomplete, InputAdornment, Popper, TextField } from '@mui/material';

import { combineSx } from '@/utils';

import styles from './styles';
import useAutocompleteInput from './useAutocompleteInput';

import type { IAutocompleteInputProps } from './types';
import type { PopperProps } from '@mui/material';

function AutocompleteInput<
  Option = string,
  FormValues extends Record<string, unknown> = Record<string, unknown>,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false
>({
  field,
  form,
  textFieldProps,
  options,
  multiple,
  freeSolo,
  sx,
  disableIndicatorAnimation,
  ...props
}: IAutocompleteInputProps<
  Option,
  FormValues,
  Multiple,
  DisableClearable,
  FreeSolo
>) {
  const {
    value,
    name,
    errors,
    hasError,
    inputValue,
    onInputChange,
    handleBlur,
    onChange,
  } = useAutocompleteInput({ field, form, multiple, freeSolo });

  return (
    <Autocomplete
      value={value}
      freeSolo={freeSolo}
      multiple={multiple}
      options={options}
      inputValue={inputValue}
      onInputChange={onInputChange}
      onChange={onChange}
      onBlur={handleBlur}
      sx={combineSx(styles.autocomplete(disableIndicatorAnimation), sx)}
      disablePortal
      PopperComponent={(popperProps: PopperProps) => (
        <Popper
          placement="bottom-start"
          modifiers={[
            {
              name: 'flip',
              enabled: false,
            },
            {
              name: 'offset',
              enabled: true,
              options: {
                offset: [0, 2],
              },
            },
          ]}
          {...popperProps}
          sx={styles.popper}
        />
      )}
      {...props}
      renderInput={(params) => (
        <TextField
          {...params}
          {...textFieldProps}
          InputLabelProps={{
            shrink: true,
            ...params.InputLabelProps,
            ...textFieldProps?.InputLabelProps,
          }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position="end" variant="standard">
                {params.InputProps.endAdornment}
              </InputAdornment>
            ),
            ...textFieldProps?.InputProps,
          }}
          error={hasError}
          {...(hasError && {
            helperText: Array.isArray(errors[name])
              ? 'Your value is too long'
              : errors[name]?.toString(), //TODO refactor, add error parse
          })}
        />
      )}
    />
  );
}

export default AutocompleteInput;
