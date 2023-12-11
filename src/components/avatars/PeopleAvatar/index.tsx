'use client'
import { Avatar, Box, IconButton } from '@mui/material';
import { RxAvatar } from 'react-icons/rx';
import { FaRegEdit } from 'react-icons/fa';
import { combineSx } from '@/utils';

import styles from './styles';

import type { IPeopleAvatarProps } from './types';

const PeopleAvatar = ({
  boxSx,
  avatarSx,
  isOnline,
  src,
  alt = 'People avatar',
  onEdit,
  size = 'medium',
  isImageOffsets = false,
  svgSize,
}: IPeopleAvatarProps) => {
  return (
    <Box sx={combineSx(styles.root(size), boxSx)}>
      <Avatar
        src={src}
        sx={combineSx(styles.avatar(size, isImageOffsets), avatarSx)}
        variant="circular"
        alt={alt}
      >
        {!src && <RxAvatar className="text-black" size={svgSize || 64} />}
      </Avatar>
      {isOnline && (
        <Box sx={styles.onlineBorder(size)}>
          <Box sx={styles.onlineDot} />
        </Box>
      )}
      {onEdit && (
        <IconButton
          disableRipple
          disableFocusRipple
          onClick={onEdit}
          sx={styles.editIconButton(size)}
        >
          <FaRegEdit />
        </IconButton>
      )}
    </Box>
  );
};

export default PeopleAvatar;
