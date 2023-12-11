import { Button, Typography } from "@mui/material";
import { MdOutlinePeopleAlt } from "react-icons/md";
import getStatusIcon from "@/utils/get-patient-status-icon";
import getAnalysisStatusIcon from "@/utils/get-analysis-status-icon";
import { FiPhoneCall } from "react-icons/fi";
import { AnalysisStatus, PatientStatus } from "@/enums";
import { PatientProfileDto } from "@/dto";
import { PeopleAvatar } from "@/components";

const data: PatientProfileDto = {
  name: "Рубан Ольга",
  doctorName: "Кажан Анна",
  email: "ruban.olga@gmail.com",
  phoneNumber: "+380949601007",
  patientStatusDescription:
    "Записи консультантів мають містити дату і час проведення консультацій, прізвище, ім’я, по батькові та спеціальність консультанта, опис патологічних змін, формулювання діагнозу, конкретних рекомендацій щодо подальшого ведення хворого. Рекомендації консультантів реалізуються лише за узгодженням з лікуючим лікарем, крім випадків, які загрожують життю хворого. Адже відповідно до закону за лікувально-­діагностичний процес відповідає лікуючий лікар, а консультант несе відповідальність лише опосередковано.",
  patientStatus: PatientStatus.Stable,
  analysis: [
    {
      analysisType: "Аналіз холестерину",
      isRegular: true,
      receivedAt: "11.09.2023 16:00",
      status: AnalysisStatus.Done,
    },
  ],
  recommendations: [
    {
      analysis: {
        analysisType: "Аналіз холестерину",
        isRegular: true,
        receivedAt: "11.09.2023 16:00",
        status: AnalysisStatus.Done,
      },
      content: 'Текст коментаря Lorem ipsum dolor sit amet, c...',
      receivedAt: '11.09.2023 16:00'
    }
  ]
};

const PatientProfileView: React.FC = () => {
  return (
    <div className="relative flex flex-col w-screen items-center">
      <div className="flex flex-col mt-[60px] bg-white rounded-lg py-4 px-6 w-[70%]">
        <Typography variant="h4" className="mb-2">
          {data.name}
        </Typography>
        <div className="flex justify-between mb-6">
          <div className="flex flex-col gap-1 [&>*]:flex [&>*]:items-center [&>*]:gap-2 ">
            <Typography>
              <MdOutlinePeopleAlt size={24} className="text-green" />
              {data.doctorName}
            </Typography>
            <Typography>
              {getStatusIcon(data.patientStatus, 24)} Статус:{" "}
              {PatientStatus[data.patientStatus]}
            </Typography>
            <Typography>
              <FiPhoneCall size={24} />
              {data.phoneNumber} | {data.email}
            </Typography>
          </div>
          <div className="flex mr-6">
            <PeopleAvatar avatarSx={{ width: '120px', height: '120px' }}  svgSize={120} src={data.profilePicture} />
          </div>
        </div>
        <div className="mb-6">
          <Typography variant="h5" className="mb-2">
            Історія аналізів
          </Typography>
          {data.analysis.map((analysis, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-solid border-0 border-b px-6 py-1 [&>*]:flex-1"
            >
              <Typography>{index + 1}.</Typography>
              <Typography>{analysis.analysisType}</Typography>
              <Typography>{analysis.receivedAt}</Typography>
              <Typography className="flex justify-between items-center flex-[0.45]">
                {analysis.isRegular ? "Регулярний запит" : "Одноразовий запит"}
                {getAnalysisStatusIcon(analysis.status, 28)}
              </Typography>
            </div>
          ))}
        </div>
        <div>
          <Typography variant="h5">Історія рекомендацій</Typography>
          {data.recommendations.map((recommendation, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-solid border-0 border-b px-6 py-1 [&>*]:flex-1"
            >
              <Typography>{index + 1}.</Typography>
              <Typography>{recommendation.analysis.analysisType}</Typography>
              <Typography>{recommendation .receivedAt}</Typography>
              <Typography>
                {recommendation.content}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PatientProfileView;