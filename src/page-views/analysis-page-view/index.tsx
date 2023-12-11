import { Button, Typography } from "@mui/material";
import dayjs from "dayjs";
import getStatusIcon from "@/utils/get-analysis-status-icon";
import { MdOutlinePeopleAlt, MdOutlineCalendarMonth } from "react-icons/md";
import convertMonthName from "@/utils/convert-month-name";
import { AnalysisStatus } from "@/enums";
import { AnalysisInfoDto } from "@/dto";

const data: AnalysisInfoDto = {
  dateTime: dayjs().format(
    `DD ${convertMonthName(dayjs().format("MMMM"))} YYYY HH:mm`
  ),
  description:
    "Lorem Ipsum - це текст-'риба', що використовується в друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною 'рибою' аж з XVI сторіччя, коли невідомий друкар взяв шрифтову гранку та склав на ній підбірку зразків шрифтів. 'Риба' не тільки успішно пережила п'ять століть, але й прижилася в електронному верстуванні, залишаючись по суті незмінною. Вона популяризувалась в 60-их роках минулого сторіччя завдяки виданню зразків шрифтів Letraset, які містили уривки з Lorem Ipsum, і вдруге - нещодавно завдяки програмам комп'ютерного верстування на кшталт Aldus Pagemaker, які використовували різні версії Lorem Ipsum.",
  patientName: "Назарій Лисенко",
  status: AnalysisStatus.Pending,
  type: "Аналіз холестерину",
  files: [],
};

const AnalysisPageView: React.FC = () => {
  return (
    <div className="absolute flex flex-col top-[110px] mx-[200px] bg-white rounded-lg py-4 px-6">
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
            {getStatusIcon(data.status, 24)} Статус:{" "}
            {AnalysisStatus[data.status]}
          </Typography>
        </div>
        <div className="flex items-end">
          <Button variant="outlined" className="">
            Написати рекомендацію
          </Button>
        </div>
      </div>
      <div className="mb-6">
        <Typography variant="h5" className="mb-2">
          Детальний опис
        </Typography>
        <Typography>{data.description}</Typography>
      </div>
      <div>
        <Typography variant="h5">Прикріплені файли</Typography>
        <Typography></Typography>
      </div>
    </div>
  );
};

export default AnalysisPageView;
