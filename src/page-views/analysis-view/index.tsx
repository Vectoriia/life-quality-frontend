import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import dayjs from "dayjs";
import { IoMdCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import { BiSolidHourglass } from "react-icons/bi";
import getStatusIcon from "@/utils/get-analysis-status-icon";

export enum AnalysisStatus {
    Done,
    Pending,
    Failed,
}

interface AnalysisDto {
    id: number;
    type?: string;
    patientName: string;
    receivedAt: string;
    status: AnalysisStatus;
}

const analysis: AnalysisDto[] = [
    {
        id: 1,
        patientName: 'Гречко Марія',
        receivedAt: dayjs().format("DD.MM.YYYY HH:mm"),
        type: 'Цукор',
        status: AnalysisStatus.Done,
    },
    {
        id: 2,
        patientName: 'Гречко Марія',
        receivedAt: dayjs().format("DD.MM.YYYY HH:mm"),
        type: 'Цукор',
        status: AnalysisStatus.Failed,
    }
    ,    {
        id: 3,
        patientName: 'Гречко Марія',
        receivedAt: dayjs().format("DD.MM.YYYY HH:mm"),
        type: 'Цукор',
        status: AnalysisStatus.Pending,
    }
]

const AnalysisView: React.FC = () => {

    return (
        <div className="relative ml-[252px] mx-3 ml-[] mt-10 min-h-[calc(100vh-200px)]">
        <TableContainer className="bg-white">
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell className="bg-background" />
                    <TableCell className="bg-background">Тип аналізу</TableCell>
                    <TableCell className="bg-background">Пацієнт</TableCell>
                    <TableCell className="bg-background">Дата та час отримання</TableCell>
                    <TableCell align="center" className="bg-background">Статус</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {analysis?.map((analysis, index) => (
                    <TableRow
                        key={analysis.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell>{index + 1}.</TableCell>
                        <TableCell className="bg-background">{analysis.type}</TableCell>
                        <TableCell component="th" scope="row">
                            {analysis.patientName}
                        </TableCell>
                        <TableCell>{analysis.receivedAt}</TableCell>
                        <TableCell align="center">{getStatusIcon(analysis.status)}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
};

export default AnalysisView;