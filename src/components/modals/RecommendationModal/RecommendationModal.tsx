import { Typography } from '@mui/material';

import { BaseModal } from '@/components';

import styles from './styles';

import type { IRecommendationModalProps } from './types';
import { FaUserDoctor } from 'react-icons/fa6';

import { format } from 'date-fns';
import dayjs from 'dayjs';

const RecommendationModal = ({
  recommendation,
  open,
  onClose,
}: IRecommendationModalProps) => {
  return (
    <BaseModal open={open} onClose={onClose} sx={styles.modal}>
      <Typography variant="h2">Деталі рекомендації</Typography>
      <div className="flex flex-col gap-1 [&>*]:flex  [&>*]:gap-2 ">
        <Typography>
          <FaUserDoctor size={24} className="text-green" />
          {recommendation.doctorName}
        </Typography>
        <Typography>
          Дата та час отримання:{' '}
          {dayjs(recommendation.receivedAt).format('DD.MM.YYYY HH:mm')}
        </Typography>
        <div className="flex flex-col gap-1 items-start">
          <Typography variant="h5">Детальний опис:</Typography>
          <Typography>{recommendation.message}</Typography>
        </div>
      </div>
    </BaseModal>
  );
};
export default RecommendationModal;
