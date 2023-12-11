import { Button, Typography } from "@mui/material";
import { MdOutlinePeopleAlt } from "react-icons/md";
import getStatusIcon from "@/utils/get-patient-status-icon";
import getAnalysisStatusIcon from "@/utils/get-analysis-status-icon";
import { FiPhoneCall } from "react-icons/fi";
import { AnalysisStatus, PatientStatus } from "@/enums";
import { PatientInfoDto } from "@/dto";

const data: PatientInfoDto = {
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
};

const PatientPageView: React.FC = () => {
  return (
    <div className="absolute flex flex-col top-[110px] mx-[200px] bg-white rounded-lg py-4 px-6">
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
        <div className="flex items-end">
          <Button variant="outlined">Створити запит на аналіз</Button>
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
        {data.analysis.map((analysis, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-solid border-0 border-b px-6 py-1"
          >
            <Typography>{index + 1}.</Typography>
            <Typography>{analysis.analysisType}</Typography>
            <Typography>{analysis.receivedAt}</Typography>
            <Typography>
              {analysis.isRegular ? "Регулярний запит" : "Одноразовий запит"}
            </Typography>
            {getAnalysisStatusIcon(analysis.status, 28)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientPageView;
