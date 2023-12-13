import { useCallback } from 'react';

import type { ICreateRecommendationFormData, ICreateRecommendationFormProps } from './types';
import type { FormikHelpers } from 'formik';
import toast from 'react-hot-toast';
import { usePostUsersRecomendationMutation } from 'core/api/baseApi';

const useCreateRecommendationForm = ({ onClose, initialValues: prepopulatedValues }: ICreateRecommendationFormProps) => {
  const [createRecommendation] = usePostUsersRecomendationMutation();
  const initialValues: ICreateRecommendationFormData = {
    recommendation: '',
  };

  const handleSubmit = useCallback(
    async (
      values: ICreateRecommendationFormData,
      { setSubmitting, setErrors }: FormikHelpers<ICreateRecommendationFormData>
    ) => {
      createRecommendation({
        recomendationRequest: {
          message: values.recommendation,
          analysisId: prepopulatedValues.analysisId,
          receiverName: prepopulatedValues.receiverName,
        }
      })
      toast('success!');
    },
    []
  );

  const handleCancel = useCallback(() => onClose(), [onClose]);

  return {
    initialValues,
    handleSubmit,
    handleCancel,
  };
};
export default useCreateRecommendationForm;
