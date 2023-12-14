'use client'
import { PeopleAvatar } from "@/components";
import { Button, ButtonBase, TextField, Typography } from "@mui/material";
import clsx from "clsx";
import { useGetUsersPatientsQuery } from "core/api/baseApi";
import { useState } from "react";
import { BsFillClipboard2PlusFill } from "react-icons/bs";

const PatientsView: React.FC = () => {
  const [search, setSearch] = useState('');
  const { data: patients } = useGetUsersPatientsQuery({
    filterByName: search,
  });

  return (
    <div className="md:ml-[252px] !pt-3">
      <div className="mx-3">
          <TextField autoComplete="off" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="flex-1 relative md:mx-3 md:px-[66px] px-[10px] mt-10 h-[100vh]">
        <div className="absolute -top-5 right-0 left-0 w-full z-10 bg-white h-full" />
        {patients?.map((patient) => (
          <ButtonBase 
            key={patient.id} 
            className={clsx(
              '!bg-white !px-6 !py-4 !rounded-xl !drop-shadow-xl !z-40 !relative !flex-col',
              '!my-[12.5px] !border-solid !border !border-[#D9DBE0] !w-full !items-start' 
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
              <PeopleAvatar src={patient.profilePicture || ''} />
              <div className="flex flex-col items-start">
                <Typography variant="h4">{patient.name}</Typography>
                <Typography variant="body1">{patient.email}</Typography>
                <Typography variant="body1">{patient.phoneNumber}</Typography>
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