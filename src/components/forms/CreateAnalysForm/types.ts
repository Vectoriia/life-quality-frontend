import { ISelectItem } from '@/types';

export interface ICreateAnalysFormData {
  patient: string;
  analysType: ISelectItem<string> | null;
  comment?: string | null;
}

export interface ICreateAnalysFormProps {
  onClose: () => void;
}
