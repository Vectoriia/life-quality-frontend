import { Typography } from '@mui/material';

import { BaseModal } from '@/components';

import styles from './styles';

import type { IRecommendationModalProps } from './types';
import { FaUserDoctor } from 'react-icons/fa6';

import { format } from 'date-fns';

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
          {format(recommendation.createDate, 'dd.MM.yyyy HH:mm')}
        </Typography>
        <div className="flex flex-col gap-1 items-start">
          <Typography variant="h5">Детальний опис:</Typography>
          <Typography>{recommendation.details}</Typography>
        </div>
      </div>
    </BaseModal>
  );
};
export default RecommendationModal;
