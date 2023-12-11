import { selectItemStringSchema } from '@/validation-schemas';
import { object, string } from 'yup';

export const schema = object({
  patient: string().trim().required(`Обов'язкове поле`),
  type: selectItemStringSchema
    .typeError(`Обов'язкове поле`)
    .required(`Обов'язкове поле`),
  comment: string().trim().optional(),
});
