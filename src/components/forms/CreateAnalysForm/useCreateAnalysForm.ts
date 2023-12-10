import { useCallback, useMemo } from 'react';

import type { ICreateAnalysFormData, ICreateAnalysFormProps } from './types';
import type { FormikHelpers } from 'formik';
import toast from 'react-hot-toast';
import { ISelectItem } from '@/types';
import { AnalysisType } from '@/enums';
import { analysisTypeMapping } from '@/constants';

const useCreateAnalysForm = ({ onClose }: ICreateAnalysFormProps) => {
  const analysisTypeOptions: ISelectItem<number>[] = useMemo(
    () => [
      {
        label: analysisTypeMapping[AnalysisType.General],
        value: AnalysisType.General,
      },
      {
        label: analysisTypeMapping[AnalysisType.Cholesterol],
        value: AnalysisType.Cholesterol,
      },
      {
        label: analysisTypeMapping[AnalysisType.Sugar],
        value: AnalysisType.Sugar,
      },
    ],
    []
  );

  const initialValues: ICreateAnalysFormData = {
    patient: '',
    analysType: null,
    comment: '',
  };

  const handleSubmit = useCallback(
    async (
      values: ICreateAnalysFormData,
      { setSubmitting, setErrors }: FormikHelpers<ICreateAnalysFormData>
    ) => {
      toast('success!');
    },
    []
  );

  const handleCancel = useCallback(() => onClose(), [onClose]);

  return {
    analysisTypeOptions,
    initialValues,
    handleSubmit,
    handleCancel,
  };
};
export default useCreateAnalysForm;
