import { useCallback, useMemo } from 'react';

import type { IConfigAnalysisFormData, IConfigAnalysisFormProps } from './types';
import type { FormikHelpers } from 'formik';
import toast from 'react-hot-toast';
import { ISelectItem } from '@/types';

const useCreateAnalysForm = ({ onClose }: IConfigAnalysisFormProps) => {
  const regularityOptions: ISelectItem<string>[] = useMemo(
    () => [
      {
        label: 'Регулярний запит',
        value: 'true',
      },
      {
        label: 'Одноразовий запит',
        value: 'false',
      },
    ],
    []
  );

  const initialValues: IConfigAnalysisFormData = {
    regularity: null,
    startDate: new Date(),
    endDate: null,
  };

  const handleSubmit = useCallback(
    async (
      values: IConfigAnalysisFormData,
      { setSubmitting, setErrors }: FormikHelpers<IConfigAnalysisFormData>
    ) => {
      toast('success!');
    },
    []
  );

  const handleCancel = useCallback(() => onClose(), [onClose]);

  return {
    regularityOptions,
    initialValues,
    handleSubmit,
    handleCancel,
  };
};
export default useCreateAnalysForm;
