import { Typography, IconButton } from '@mui/material';
import { FaUserDoctor } from 'react-icons/fa6';
import getStatusIcon from '@/utils/get-patient-status-icon';
import getAnalysisStatusIcon from '@/utils/get-analysis-status-icon';
import { FiPhoneCall } from 'react-icons/fi';
import { PatientStatus } from '@/enums';
import { PeopleAvatar } from '@/components';
import { RecommendationDto, useGetUsersPatientProfileByIdQuery, useGetUsersRecomendationByIdQuery } from 'core/api/baseApi';
import useTypedSession from '@/hooks/use-typed-session';
import dayjs from 'dayjs';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import RecommendationModal from '@/components/modals/RecommendationModal';
import { useState } from 'react';

const PatientProfileView: React.FC = () => {
  const [recommendationId, setRecommendationId] = useState<number>();
  const { data: sessionData } = useTypedSession();
  const { data: profile } = useGetUsersPatientProfileByIdQuery({
    id: sessionData.userData.id as number,
  });
  const { data: recommendationData } = useGetUsersRecomendationByIdQuery({
    id: recommendationId as number,
  }, {
    skip: !recommendationId,
  })

  if (!profile) {
    return null;
  }

  return (
    <>
      <div className="relative flex flex-col w-screen items-center">
        <div className="flex flex-col mt-[60px] bg-white rounded-lg py-4 px-6 w-[70%]">
          <Typography variant="h4" className="mb-2">
            {profile.name}
          </Typography>
          <div className="flex justify-between mb-6">
            <div className="flex flex-col gap-1 [&>*]:flex [&>*]:items-center [&>*]:gap-2 ">
              <Typography>
                <FaUserDoctor size={24} className="text-green" />
                {profile.doctorName}
              </Typography>
              <Typography>
                {profile.patientStatus !== undefined && (getStatusIcon(profile.patientStatus, 24))} Статус:{' '}
                {profile.patientStatus !== undefined && (PatientStatus[profile.patientStatus])}
              </Typography>
              <Typography>
                <FiPhoneCall size={24} />
                {profile.phoneNumber} | {profile.email}
              </Typography>
            </div>
            <div className="flex mr-6">
              <PeopleAvatar
                avatarSx={{ width: '120px', height: '120px' }}
                svgSize={120}
                src={profile.profilePicture || ''}
              />
            </div>
          </div>
          <div className="mb-6">
            <Typography variant="h5" className="mb-2">
              Історія аналізів
            </Typography>
            {profile.analysis?.map((analysis, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-solid border-0 border-b px-6 py-1 [&>*]:flex-1"
              >
                <Typography>{index + 1}.</Typography>
                <Typography>{analysis.analysisType}</Typography>
                <Typography>{dayjs(analysis.receivedAt).format("YYYY.MM.DD HH:mm")}</Typography>
                <Typography className="flex justify-between items-center flex-[0.45]">
                  {analysis.isRegular ? 'Регулярний запит' : 'Одноразовий запит'}
                  {getAnalysisStatusIcon(analysis.status, 28)}
                  <Link href={`/analysis/${analysis.id as number}`}>
                    <FaArrowRight />
                  </Link>
                </Typography>
              </div>
            ))}
          </div>
          <div>
            <Typography variant="h5">Історія рекомендацій</Typography>
            {profile.recommendations?.map((recommendation, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-solid border-0 border-b px-6 py-1 [&>*]:flex-1"
              >
                <Typography>{index + 1}.</Typography>
                <Typography>{recommendation.analysis?.analysisType}</Typography>
                <Typography>{dayjs(recommendation.receivedAt).format("YYYY.MM.DD HH:mm")}</Typography>
                <Typography>{recommendation.content}</Typography>
                <IconButton onClick={() => setRecommendationId(recommendation.id)}>
                  <FaArrowRight />
                </IconButton>
              </div>
            ))}
          </div>
        </div>
      </div>
      {!!recommendationData && <RecommendationModal
        open={!!recommendationId}
        onClose={() => setRecommendationId(undefined)}
        recommendation={recommendationData} />
      }
    </>
  );
};

export default PatientProfileView;
