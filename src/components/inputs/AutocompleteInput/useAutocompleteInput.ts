import { useState, useCallback, useEffect } from 'react';

import type { IUseAutocompleteInputProps } from './types';
import type { AutocompleteValue } from '@mui/material';

const useAutocompleteInput = <
  Option = string,
  FormValues extends Record<string, unknown> = Record<string, unknown>,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
>({
  field: { name, value, onBlur },
  form: { errors, touched, setFieldValue, setFieldTouched },
  multiple = false,
  freeSolo = false,
}: IUseAutocompleteInputProps<Option, FormValues, Multiple, DisableClearable, FreeSolo>) => {
  const hasError = Boolean(touched[name] && errors[name]);
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (_: unknown, newValue: string) => {
    setInputValue(newValue);
  };

  const onChange = useCallback(
    (_: unknown, newValue: AutocompleteValue<Option, Multiple, DisableClearable, FreeSolo>) => {
      if (multiple && freeSolo && Array.isArray(value)) {
        if (value.some((val) => val === inputValue.trim())) {
          setInputValue(inputValue);
          return;
        }
      }
      setFieldValue(name, newValue);
      onBlur({ target: { name, value: newValue } });
    },
    [name, onBlur, setFieldValue, freeSolo, inputValue, multiple, value],
  );

  const handleBlur = () => {
    setFieldTouched(name, true);
    if (inputValue === '') {
      return;
    }

    if (freeSolo && !Array.isArray(value)) {
      setFieldValue(name, inputValue);
      return;
    }

    if (multiple && freeSolo && Array.isArray(value)) {
      if (value.some((val) => val === inputValue.trim())) {
        return;
      }
      setFieldValue(name, [...value, inputValue]);
      setInputValue('');
      return;
    }
  };

  useEffect(() => {
    if (!multiple && !freeSolo && inputValue === '') {
      return;
    }
    onBlur({ target: { name, value } });
  }, [name, onBlur, value, touched, multiple, freeSolo, inputValue]);

  return {
    value,
    name,
    errors,
    hasError,
    inputValue,
    onInputChange,
    handleBlur,
    onChange,
  };
};

export default useAutocompleteInput;
