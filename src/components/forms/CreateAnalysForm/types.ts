import { AnalysisType } from '@/enums';
import { ISelectItem } from '@/types';

export interface ShortCreateAnalysisDto {
  patient: string;
  type: AnalysisType;
  comment?: string;
}
export interface ICreateAnalysisFormData {
  patient: string;
  type: ISelectItem<string> | null;
  comment?: string | null;
}

export interface ICreateAnalysisFormProps {
  onClose: () => void;
}
