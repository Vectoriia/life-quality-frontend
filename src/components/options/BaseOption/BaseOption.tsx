import { ListItem, Typography } from '@mui/material';

import { FaCheck } from 'react-icons/fa6';

import styles from './styles';

import type { IBaseOptionProps } from './types';

const BaseOption = ({ option, fieldValue, ...props }: IBaseOptionProps) => {
  return (
    <ListItem sx={styles.option} {...props}>
      <Typography sx={styles.optionText}>{option.label}</Typography>
      {fieldValue?.value === option.value && <FaCheck />}
    </ListItem>
  );
};
export default BaseOption;
