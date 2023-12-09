import type { SxProps, Theme } from '@mui/material';

export type IAvatarSize = 'tiny' | 'little' | 'small' | 'medium' | 'large' | 'huge';
export interface IPeopleAvatarProps {
  boxSx?: SxProps<Theme>;
  avatarSx?: SxProps<Theme>;
  isOnline?: boolean;
  src?: string;
  alt?: string;
  onEdit?: () => void;
  size?: IAvatarSize;
  isImageOffsets?: boolean;
}
