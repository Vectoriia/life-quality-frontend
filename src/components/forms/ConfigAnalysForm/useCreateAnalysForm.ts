import { useCallback, useMemo } from 'react';

import type { IConfigAnalysisFormData, IConfigAnalysisFormProps } from './types';
import type { FormikHelpers } from 'formik';
import toast from 'react-hot-toast';
import { ISelectItem } from '@/types';
import { usePostBloodAnalysisCreateScheduleOfRequestMutation } from 'core/api/baseApi';
import dayjs from 'dayjs';
import { intervalTypeMapping } from '@/constants/interval-type';
import { IntervalType } from '@/enums/interval';

const useCreateAnalysForm = ({ onClose, analys }: IConfigAnalysisFormProps) => {
  const [requestSchedule] = usePostBloodAnalysisCreateScheduleOfRequestMutation();
  const intervalTypeOptions: ISelectItem<IntervalType>[] = useMemo(
    () => [
      {
        label: intervalTypeMapping[IntervalType.Minutes],
        value: IntervalType.Minutes,
      },
      {
        label: intervalTypeMapping[IntervalType.Hourly],
        value: IntervalType.Hourly,
      },
      {
        label: intervalTypeMapping[IntervalType.Daily],
        value: IntervalType.Daily,
      },
      {
        label: intervalTypeMapping[IntervalType.Weekly],
        value: IntervalType.Weekly,
      },
      {
        label: intervalTypeMapping[IntervalType.Monthly],
        value: IntervalType.Monthly,
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
      requestSchedule({
        scheduledAnalysisRequest: {
          analysisType: analys.type,
          patientName: analys.patient,
          comment: analys.comment,
          endDate: dayjs(values.endDate).format(),
          startDate: dayjs(values.startDate).format(),
          interval: intervalTypeOptions.find((item) => item.label === values.regularity?.label)?.value,
        }
      })
      toast('success!');
    },
    []
  );

  const handleCancel = useCallback(() => onClose(), [onClose]);

  return {
    intervalTypeOptions,
    initialValues,
    handleSubmit,
    handleCancel,
  };
};
export default useCreateAnalysForm;
