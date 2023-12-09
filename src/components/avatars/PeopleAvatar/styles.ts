'use client';
import { buttonBaseClasses, svgIconClasses } from '@mui/material';

import { theme } from '@/constants';

import type { IAvatarSize } from './types';

export const avatarSizesMapping: Record<
  IAvatarSize,
  { size: number; padding: number; status: number }
> = {
  tiny: { size: 12, padding: 1.64, status: 0 },
  little: { size: 16, padding: 0, status: 0 },
  small: { size: 24, padding: 0, status: 0 },
  medium: { size: 32, padding: 2, status: 8 },
  large: { size: 40, padding: 2.5, status: 12 },
  huge: { size: 50, padding: 3, status: 12 },
};

const componentsZIndex = {
  avatar: 1,
  onlineDot: 2,
};

const styles = {
  root: (size: IAvatarSize) => ({
    position: 'relative',
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'width 1s ease-in-out, height 1s ease-in-out',
    width: theme.spacing(avatarSizesMapping[size].size),
    height: theme.spacing(avatarSizesMapping[size].size),
  }),
  avatar: (size: IAvatarSize, isImageOffsets: boolean) => ({
    backgroundColor: 'transparent',
    transition: 'width 1s ease-in-out, height 1s ease-in-out',
    width: isImageOffsets
      ? theme.spacing(
          avatarSizesMapping[size].size - avatarSizesMapping[size].padding * 2
        ) //*2 to count padding from to sides
      : theme.spacing(avatarSizesMapping[size].size),
    height: isImageOffsets
      ? theme.spacing(
          avatarSizesMapping[size].size - avatarSizesMapping[size].padding * 2
        ) //*2 to count padding from to sides
      : theme.spacing(avatarSizesMapping[size].size),
    [`& .${svgIconClasses.root}`]: {
      transition: 'width 1s ease-in-out, height 1s ease-in-out',
      width: theme.spacing(
        avatarSizesMapping[size].size - avatarSizesMapping[size].padding * 2
      ),
      height: theme.spacing(
        avatarSizesMapping[size].size - avatarSizesMapping[size].padding * 2
      ),
      color: theme.palette.common.black,
    },
  }),
  onlineBorder: (size: IAvatarSize) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: theme.palette.common.white,
    borderRadius: '50%',
    zIndex: componentsZIndex.onlineDot,
    transition:
      'width 1s ease-in-out, height 1s ease-in-out, bottom 1s ease-in-out, right 1s ease-in-out',
    width: theme.spacing(avatarSizesMapping[size].status),
    height: theme.spacing(avatarSizesMapping[size].status),
    right: theme.spacing(avatarSizesMapping[size].padding),
    bottom: theme.spacing(avatarSizesMapping[size].padding),
    padding: avatarSizesMapping[size].status / 8, // /8 design relation
  }),
  onlineDot: {
    backgroundColor: theme.palette.common.green,
    borderRadius: '50%',
    width: '100%',
    height: '100%',
  },
  editIconButton: (size: IAvatarSize) => ({
    zIndex: componentsZIndex.onlineDot,
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[17],
    borderRadius: '50%',
    position: 'absolute',
    transition: 'width 1s ease-in-out, height 1s ease-in-out',
    width: theme.spacing(avatarSizesMapping[size].status),
    height: theme.spacing(avatarSizesMapping[size].status),
    svg: {
      width: '100%',
      color: theme.palette.common.black,
    },
    [`&.${buttonBaseClasses.root}`]: {
      padding: theme.spacing(2),
      transition: 'left 1s ease-in-out, top 1s ease-in-out',
      left: theme.spacing(avatarSizesMapping[size].padding),
      top: theme.spacing(avatarSizesMapping[size].padding),
    },
  }),
} as const;

export default styles;
