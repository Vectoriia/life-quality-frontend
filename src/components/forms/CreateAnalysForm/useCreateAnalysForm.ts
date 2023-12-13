import { useCallback, useMemo, useState } from 'react';

import type { ICreateAnalysisFormData, ICreateAnalysisFormProps } from './types';
import type { FormikHelpers } from 'formik';
import toast from 'react-hot-toast';
import { ISelectItem } from '@/types';
import { AnalysisType } from '@/enums';
import { analysisTypeMapping } from '@/constants';
import { usePostBloodAnalysisCreateRequestMutation } from 'core/api/baseApi';

const useCreateAnalysForm = ({ onClose, initialValues: prepopulatedValues }: ICreateAnalysisFormProps) => {
  const [requestAnalysis] = usePostBloodAnalysisCreateRequestMutation();
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
    patient: prepopulatedValues.patient,
    type: prepopulatedValues.type,
    comment: prepopulatedValues.comment,
  };

  const handleSubmit = useCallback(
    async (
      values: ICreateAnalysisFormData,
      { setSubmitting, setErrors }: FormikHelpers<ICreateAnalysisFormData>
    ) => {
      requestAnalysis({
        analysisRequest: {
          analysisType: values.type?.label,
          comment: values.comment,
          patientName: values.patient,
        }
      })
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
