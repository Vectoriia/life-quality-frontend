import { AnalysisType } from '@/enums';

export const analysisTypeMapping: Record<AnalysisType, string> = {
  [AnalysisType.General]: 'ЗАК',
  [AnalysisType.Cholesterol]: 'Холестерин',
  [AnalysisType.Sugar]: 'Цукор',
};
