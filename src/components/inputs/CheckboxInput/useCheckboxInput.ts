import { useCallback, useMemo } from 'react';

import type { IUseCheckboxInputProps } from './types';

function useCheckboxInput<FormValues extends Record<string, unknown> = Record<string, unknown>>({
  form: { setFieldValue, setTouched, touched },
  field: { name, value },
  checked,
  onCustomChange,
}: IUseCheckboxInputProps<FormValues>) {
  const isChecked = useMemo(
    () => (checked !== undefined ? checked : Boolean(value)),
    [checked, value],
  );

  const handleChange = useCallback(() => {
    if (!!onCustomChange) {
      onCustomChange();
    } else {
      setTouched({ ...touched, [name]: true });
      setFieldValue(name, !value);
    }
  }, [name, onCustomChange, setFieldValue, setTouched, touched, value]);

  return {
    isChecked,
    handleChange,
  };
}

export default useCheckboxInput;
