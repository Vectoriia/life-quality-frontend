import type { ISelectItem } from '@/types';
import type { ListItemProps } from '@mui/material';

export interface IBaseOptionProps extends ListItemProps {
  option: ISelectItem<string>;
  fieldValue: ISelectItem<string> | null;
}
