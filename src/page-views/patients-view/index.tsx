import { PeopleAvatar } from "@/components";
import { Button, ButtonBase, TextField, Typography } from "@mui/material";
import clsx from "clsx";
import { BsFillClipboard2PlusFill } from "react-icons/bs";

interface PatientDto {
  id: number;
  profileImageUrl?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const patients: PatientDto[] = [
  {
    id: 1,
    address: 'Львів, Львівська обл.',
    email: 'test@gmail.com',
    name: 'Гречко Марія',
    phone: '+380949601007',
  }
]

const PatientsView: React.FC = () => {
  return (
    <div className="ml-[252px]">
      <div>
          <TextField />
      </div>
      <div className="flex-1 relative mx-3 px-[66px] mt-10 h-[100vh]">
        <div className="absolute -top-5 right-0 left-0 w-full z-10 bg-white h-full" />
        {patients.map((patient) => (
          <ButtonBase 
            key={patient.id} 
            className={clsx(
              'bg-white px-6 py-4 rounded-xl drop-shadow-xl z-40 relative flex-col',
              'my-[12.5px] border-solid border border-[#D9DBE0] w-full items-start' 
            )}
            href={`/patients/${patient.id}`}
          >
            <div className="flex justify-between items-center w-full">
              <Typography variant="subtitle1" className="flex justify-between items-center gap-1">
                <Typography component="span" className="text-green">
                  &bull;
                </Typography>
                ПАЦІЄНТ
              </Typography>
              <div className="flex gap-4 items-center justify-between">
                <BsFillClipboard2PlusFill className="text-blue" />
                <Button variant="contained" disabled>Чат</Button>
              </div>
            </div>
            <div className="flex gap-3 w-full">
              <PeopleAvatar src={patient.profileImageUrl} />
              <div className="flex flex-col items-start">
                <Typography variant="h4">{patient.name}</Typography>
                <Typography variant="body1">{patient.email}</Typography>
                <Typography variant="body1">{patient.phone}</Typography>
                <Typography variant="body1">{patient.address}</Typography>
              </div>
            </div>
          </ButtonBase>
        ))}
      </div>
    </div>
  )
};

export default PatientsView;