import { deepmerge } from '@mui/utils';

import type { SxProps, Theme } from '@mui/material';

/**
 * @function - Handles multiple styles with conditions into array
 * @param params Array<SxProps<Theme> | object | boolean | null | undefined>
 * @returns merged styles objects array
 */
const combineSx = (...args: Array<SxProps<Theme> | object | boolean | null | undefined>) => {
  const sx: object[] = [];

  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === 'object') {
      sx.push(args[i] as object);
    }
  }

  return sx.reduce((acc, item) => deepmerge(acc, item), {});
};

export default combineSx;
