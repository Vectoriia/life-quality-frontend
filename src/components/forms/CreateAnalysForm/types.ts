import { AnalysisType } from '@/enums';
import { ISelectItem } from '@/types';
import { FastEntityDto } from 'core/api/baseApi';

export interface ShortCreateAnalysisDto {
  patient?: string;
  type: string;
  comment?: string;
}
export interface ICreateAnalysisFormData {
  patient?: string;
  type: ISelectItem<string> | null;
  comment?: string | null;
}

export interface ICreateAnalysisFormProps {
  initialValues: ICreateAnalysisFormData;
  onClose: () => void;
}
