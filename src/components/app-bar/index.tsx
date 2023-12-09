"use client"

import {
  AppBar as MuiAppBar, Typography
} from '@mui/material';
import clsx from 'clsx';
import { useMemo } from 'react';

interface Props {
}

const AppBar: React.FC<Props> = ({ }) => {
  const content = useMemo(() => {
    return (
      <>
        <Typography variant="h3" className="text-white">Якість життя</Typography>
      </>
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
