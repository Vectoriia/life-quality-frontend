import { object, string } from 'yup';

export const schema = object({
  recommendation: string().trim().required(`Обов'язкове поле`),
});
