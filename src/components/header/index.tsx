"use client"

import {
  IconButton,
  AppBar as MuiAppBar, Typography
} from '@mui/material';
import clsx from 'clsx';
import { useMemo, useState } from 'react';
import { RiAccountCircleLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiChat4Line } from "react-icons/ri";
import Drawer from '../drawer';
import { usePathname } from 'next/navigation';
import AnalysisFilteringPanel from '../analysis-filtering-panel';
import { HiOutlineMenu } from "react-icons/hi";

interface Props {
    isAuthorized?: boolean;
}

const Header: React.FC<Props> = ({ isAuthorized }) => {
  const path = usePathname();
  const [openDrawer, setOpenDrawer] = useState(false);
  const content = useMemo(() => {
    return (
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-2">
          <IconButton onClick={() => setOpenDrawer((prev) => !prev)}>
            <HiOutlineMenu className="text-white" size={42} /> 
          </IconButton>
          <Typography variant="h3" className="text-white">Якість життя</Typography>
        </div>
        {isAuthorized && (
            <div className="flex gap-4 items-center">
                <RiChat4Line size={24} className="shrink-0"/>
                <IoMdNotificationsOutline size={24} className="shrink-0" />
                <div className="flex flex-col justify-center items-center">
                    <RiAccountCircleLine size={24} className="shrink-0" />
                    <Typography className="text-white" variant="subtitle1">Акаунт</Typography>
                </div>
            </div>
        )}
      </div>
    )
  }, [isAuthorized]);

  const drawerContent = useMemo(() => {
    if (path == '/analysis') {
      return <AnalysisFilteringPanel />
    }
  }, [path]);

  return (
    <>
      <MuiAppBar className={clsx(
        'flex flex-row h-[70px] py-[10px] px-4 items-center justify-between',
      )}>
        {content}
      </MuiAppBar>
      <Drawer 
        isPermanent={path == '/patients' || path == '/analysis'} 
        open={openDrawer}
      >
        {drawerContent} 
      </Drawer>
    </>
  )
}

export default Header;
