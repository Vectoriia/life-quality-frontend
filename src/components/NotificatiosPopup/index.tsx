'use client';

import { useState } from 'react';
import { Button } from '../buttons';
import { Popover } from '@mui/material';
import { MdRecommend } from 'react-icons/md';
import { TbAnalyzeFilled } from 'react-icons/tb';
import { IoMdNotificationsOutline } from 'react-icons/io';
import Link from 'next/link';
import useAppSelector from '@/hooks/use-app-selector';

export default function NotificationPopup({
  redirectUrl,
}: {
  redirectUrl: string;
}) {
  const { notifications } = useAppSelector((state) => state.notifications)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        sx={{ minWidth: '35px', padding: 0 }}
      >
        <IoMdNotificationsOutline size={24} className="shrink-0" />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        style={{ marginTop: '7px' }}
      >
        <div className="p-4 space-y-4">
          {notifications.map((notification) => (
            <Link
              key={notification.id}
              href={redirectUrl}
              className="no-underline text-black hover:text-black flex items-center gap-4"
            >
              {notification.notificationType === 1 ? (
                <TbAnalyzeFilled size={24} className="shrink-0" />
              ) : (
                <MdRecommend size={24} className="shrink-0" />
              )}
              <div className="flex flex-col justify-center gap-1">
                <h5 className="m-0">New message:</h5>
                <p className="m-0">{notification.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </Popover>
    </>
  );
}
