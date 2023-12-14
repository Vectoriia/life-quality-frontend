'use client'
import { Button, Typography } from '@mui/material';
import dayjs from 'dayjs';
import getStatusIcon from '@/utils/get-analysis-status-icon';
import { MdOutlinePeopleAlt, MdOutlineCalendarMonth } from 'react-icons/md';
import convertMonthName from '@/utils/convert-month-name';
import { AnalysisStatus } from '@/enums';
import { AnalysisInfoDto } from '@/dto';
import { CreateRecommendationModal } from '@/components';
import { useState } from 'react';
import { useGetBloodAnalysisByIdQuery } from 'core/api/baseApi';
import Image from 'next/image';
import analysis from '@/public/images/analysis.png';
import useTypedSession from '@/hooks/use-typed-session';

interface Props {
  analysisId: number;
}

const AnalysisPageView: React.FC<Props> = ({
  analysisId,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const { data: sessionData } = useTypedSession();

  const { data } = useGetBloodAnalysisByIdQuery({
    id: analysisId,
  });

  if (!data) {
    return null;
  }

  return (
    <>
    <div className="relative flex flex-col w-screen items-center">
      <div className="flex flex-col mt-[60px] bg-white rounded-lg py-4 px-6 w-[70%]">
        <Typography variant="h4" className="mb-2">
          Тип аналізу: {data.type}
        </Typography>
        <div className="flex justify-between mb-6">
          <div className="flex flex-col gap-1 [&>*]:flex [&>*]:items-center [&>*]:gap-2 ">
            <Typography>
              <MdOutlinePeopleAlt size={24} className="text-green" />
              {data.patientName}
            </Typography>
            <Typography>
              <MdOutlineCalendarMonth size={24} />
              {data.dateTime}
            </Typography>
            <Typography>
              {data.status !== undefined && getStatusIcon(data.status, 24)} Статус:{' '}
              {data.status !== undefined && AnalysisStatus[data.status]}
            </Typography>
          </div>
          {(sessionData.userData.role as number) == 0 && (<div className="flex items-end">
            <Button variant="outlined" className="" onClick={() => setOpenModal(true)}>
              Написати рекомендацію
            </Button>
          </div>
          )}
        </div>
        <div className="mb-6">
          <Typography variant="h5" className="mb-2">
            Детальний опис
          </Typography>
          <Typography>Загальний аналіз крові (ЗАК) - це лабораторний тест, який визначає різноманітні показники крові для оцінки стану здоров&apos;я пацієнта. Цей вид аналізу включає в себе оцінку кількості та якості формених елементів крові, таких як еритроцити, лейкоцити та тромбоцити, а також інших показників, що можуть вказувати на різноманітні патологічні стани.</Typography>
        </div>
        <div>
          <Typography variant="h5">Прикріплені файли</Typography>
          <div>
            <Image src={analysis} className="object-fit w-full" alt='data' />
          </div>
        </div>
      </div>
      </div>
      <CreateRecommendationModal
        initialValues={{
          analysisId: analysisId,
          receiverName: data.patientName as string,
          recommendation: ''
        }} 
        open={openModal}
        onClose={() => setOpenModal(false)} 
      />
    </>
  );
};

export default AnalysisPageView;
