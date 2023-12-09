"use client"

import {
  AppBar as MuiAppBar, Typography
} from '@mui/material';
import clsx from 'clsx';
import { useMemo } from 'react';
import { RiAccountCircleLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiChat4Line } from "react-icons/ri";

interface Props {
}

const AppBar: React.FC<Props> = ({ }) => {
  const content = useMemo(() => {
    return (
      <div className="flex justify-between w-full">
        <Typography variant="h3" className="text-white">Якість життя</Typography>
        <div className="flex gap-4 items-center">
            <RiChat4Line size={24} className="shrink-0"/>
            <IoMdNotificationsOutline size={24} className="shrink-0" />
            <div className="flex flex-col justify-center items-center">
                <RiAccountCircleLine size={24} className="shrink-0" />
                <Typography className="text-white" variant="subtitle1">Акаунт</Typography>
            </div>
        </div>
      </div>
    )
  }, []);

  return (
    <MuiAppBar className={clsx(
      'flex flex-row h-[70px] py-[10px] px-4 items-center justify-between',
    )}>
      {content}
    </MuiAppBar>
  )
}

export default AppBar
