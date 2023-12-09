import { useCallback } from 'react';

import type { ISignInFormData } from './types';
import type { FormikHelpers } from 'formik';
import toast from 'react-hot-toast';

const useSignInForm = () => {
  const initialValues: ISignInFormData = {
    email: '',
    password: '',
  };

  const handleSubmit = useCallback(
    async (
      values: ISignInFormData,
      { setSubmitting, setErrors }: FormikHelpers<ISignInFormData>
    ) => {
      toast('success!');
    },
    []
  );

  return {
    initialValues,
    handleSubmit,
  };
};
export default useSignInForm;
