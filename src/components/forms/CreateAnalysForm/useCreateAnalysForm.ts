import { useCallback, useMemo, useState } from 'react';

import type { ICreateAnalysisFormData, ICreateAnalysisFormProps } from './types';
import type { FormikHelpers } from 'formik';
import toast from 'react-hot-toast';
import { ISelectItem } from '@/types';
import { AnalysisType } from '@/enums';
import { analysisTypeMapping } from '@/constants';

const useCreateAnalysForm = ({ onClose }: ICreateAnalysisFormProps) => {
  const [isConfigOpen, setIsConfigOpen] = useState<boolean>(false);
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

  const initialValues: ICreateAnalysisFormData = {
    patient: '',
    type: null,
    comment: '',
  };

  const handleSubmit = useCallback(
    async (
      values: ICreateAnalysisFormData,
      { setSubmitting, setErrors }: FormikHelpers<ICreateAnalysisFormData>
    ) => {
      toast('success!');
    },
    []
  );

  const handleCancel = useCallback(() => onClose(), [onClose]);

  const handleConfig = useCallback(() => setIsConfigOpen(true), []);
  const handleConfigCancel = useCallback(() => setIsConfigOpen(false), []);

  return {
    isConfigOpen,
    handleConfig,
    handleConfigCancel,
    analysisTypeOptions,
    initialValues,
    handleSubmit,
    handleCancel,
  };
};
export default useCreateAnalysForm;
