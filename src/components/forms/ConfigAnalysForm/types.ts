import { ISelectItem } from '@/types';
import { ShortCreateAnalysisDto } from '../CreateAnalysForm/types';
import { IntervalType } from 'core/api/baseApi';


export interface IConfigAnalysisFormData {
  regularity: ISelectItem<string> | null;
  startDate: Date;
  endDate: Date | null;
}

export interface IConfigAnalysisFormProps {
  analys: ShortCreateAnalysisDto;
  onClose: () => void;
}
