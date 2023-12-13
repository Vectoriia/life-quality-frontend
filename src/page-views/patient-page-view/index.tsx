'use client'
import { Button, Typography } from '@mui/material';

import { FaUserDoctor } from 'react-icons/fa6';
import getStatusIcon from '@/utils/get-patient-status-icon';
import getAnalysisStatusIcon from '@/utils/get-analysis-status-icon';
import { FiPhoneCall } from 'react-icons/fi';
import { useGetUsersPatientByIdQuery } from 'core/api/baseApi';
import { PatientStatus } from '@/enums';
import { CreateAnalysModal } from '@/components';
import { useState } from 'react';
import dayjs from 'dayjs';
interface Props {
  patientId: number;
}

const PatientPageView: React.FC<Props> = ({
  patientId,
}) => {
  const { data } = useGetUsersPatientByIdQuery({
    id: patientId,
  });

  const [open, setOpen] = useState(false);

  if (!data) {
    return null;
  }

  return (
    <>
    <div className="relative flex flex-col w-screen items-center">
      <div className="flex flex-col mt-[60px] bg-white rounded-lg py-4 px-6 w-[70%]">
      <Typography variant="h4" className="mb-2">
        {data.name}
      </Typography>
      <div className="flex justify-between mb-6">
        <div className="flex flex-col gap-1 [&>*]:flex [&>*]:items-center [&>*]:gap-2 ">
          <Typography>
            <FaUserDoctor size={24} className="text-green" />
            {data.doctorName}
          </Typography>
          <Typography>
            {data.patientStatus !== undefined && (getStatusIcon(data.patientStatus, 24))} Статус:{' '}
            {data.patientStatus !== undefined && PatientStatus[data.patientStatus]}
          </Typography>
          <Typography>
            <FiPhoneCall size={24} />
            {data.phoneNumber} | {data.email}
          </Typography>
        </div>
        <div className="flex items-end">
          <Button variant="outlined" onClick={() => setOpen(true)}>Створити запит на аналіз</Button>
        </div>
      </div>
      <div className="mb-6">
        <Typography variant="h5" className="mb-2">
          Короткий опис стану пацієнта
        </Typography>
        <Typography>{data.patientStatusDescription}</Typography>
      </div>
      <div>
        <Typography variant="h5">Історія аналізів</Typography>
        {data.analysis?.map((analysis, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-solid border-0 border-b px-6 py-1"
          >
            <Typography>{index + 1}.</Typography>
            <Typography>{analysis.analysisType}</Typography>
            <Typography>{dayjs(analysis.receivedAt).format("YYYY.MM.DD HH:mm")}</Typography>
            <Typography>
              {analysis.isRegular ? 'Регулярний запит' : 'Одноразовий запит'}
            </Typography>
            {getAnalysisStatusIcon(analysis.status, 28)}
          </div>
        ))}
      </div>
    </div>
    </div>
    <CreateAnalysModal 
      open={open} 
      onClose={() => setOpen(false)} 
      patient={data.name ?? ''} 
    />
    </>
  );
};

export default PatientPageView;
