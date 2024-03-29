'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import dayjs from 'dayjs';
import getStatusIcon from '@/utils/get-analysis-status-icon';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import { CreateAnalysModal } from '@/components';
import { useRouter, useSearchParams } from 'next/navigation';
import { SmallAnalysisDto, useGetBloodAnalysisByDoctorByDoctorIdQuery } from 'core/api/baseApi';
import useTypedSession from '@/hooks/use-typed-session';
import { useMemo } from 'react';
import useAppSelector from '@/hooks/use-app-selector';

// const analysis: AnalysisDto[] = [
//   {
//     id: 1,
//     patientName: 'Гречко Марія',
//     receivedAt: dayjs().format('DD.MM.YYYY HH:mm'),
//     type: 'Цукор',
//     status: AnalysisStatus.Done,
//   },
//   {
//     id: 2,
//     patientName: 'Гречко Марія',
//     receivedAt: dayjs().format('DD.MM.YYYY HH:mm'),
//     type: 'Цукор',
//     status: AnalysisStatus.Failed,
//   },
//   {
//     id: 3,
//     patientName: 'Гречко Марія',
//     receivedAt: dayjs().format('DD.MM.YYYY HH:mm'),
//     type: 'Цукор',
//     status: AnalysisStatus.Pending,
//   },
// ];

const AnalysisView: React.FC = () => {
  const searchParams = useSearchParams();
  const open = searchParams.has('requestAnalysis');
  const router = useRouter();
  const { data: sessionData } = useTypedSession();
  const { isChol, isGen, isRegular, isSingle, isSug } = useAppSelector((store) => store.ui)

  const { data: analysis } = useGetBloodAnalysisByDoctorByDoctorIdQuery({
    doctorId: sessionData.userData.id as number,
  });

  const analysisToRender = useMemo(() => {
    if (!analysis) return [];

    let result: SmallAnalysisDto[] = [...analysis];

    if (isChol) {
      result = result.filter((i) => i.analysisType === 'Холестерин');
    }

    if (isRegular) {
      result = result.filter((i) => i.isRegular);
    }

    return result;
  }, [isChol, isRegular, analysis]);
  
  return (
    <>
    <div className="relative md:ml-[252px] mx-3  mt-10 min-h-[calc(100vh-200px)]">
      <TableContainer className="bg-white">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="bg-background" />
              <TableCell className="bg-background">Тип аналізу</TableCell>
              <TableCell className="bg-background">Пацієнт</TableCell>
              <TableCell className="bg-background">
                Дата та час отримання
              </TableCell>
              <TableCell align="center" className="bg-background">
                Статус
              </TableCell>
              <TableCell align="center" className="bg-background">
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {analysisToRender.map((analysis, index) => (
              <TableRow
                key={analysis.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{index + 1}.</TableCell>
                <TableCell className="bg-background">{analysis.analysisType}</TableCell>
                <TableCell component="th" scope="row">
                  {analysis.patientName}
                </TableCell>
                <TableCell>{dayjs(analysis.receivedAt).format("YYYY.MM.DD HH:mm")}</TableCell>
                <TableCell align="center">
                  {getStatusIcon(analysis.status)}
                </TableCell>
                <TableCell align="center">
                  <Link href={`/analysis/${analysis.id as number}`}>
                    <FaArrowRight />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    <CreateAnalysModal open={!!open} onClose={() => router.replace('/analysis')} />
    </>
  );
};

export default AnalysisView;
