import { selectItemStringSchema } from '@/validation-schemas';
import { object, date } from 'yup';

export const schema = object({
  regularity: selectItemStringSchema
    .typeError(`Обов'язкове поле`)
    .required(`Обов'язкове поле`),
  startDate: date()
    .typeError('Значення має бути датою')
    .required(`Обов'язкове поле`),
  endDate: date()
  .typeError('Значення має бути датою')
  .nullable()
  .default(null),
});
