import { IntervalType } from '@/enums/interval';

export const intervalTypeMapping: Record<IntervalType, string> = {
  [IntervalType.Minutes]: 'Щохвилини',
  [IntervalType.Hourly]: 'Щогодини',
  [IntervalType.Daily]: 'Щодня',
  [IntervalType.Weekly]: 'Щотижня',
  [IntervalType.Monthly]: 'Щомісяця',
};
