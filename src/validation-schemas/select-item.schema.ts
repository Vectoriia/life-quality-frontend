import { object, string } from 'yup';

export const selectItemStringSchema = object().noUnknown().shape({
  label: string().trim().required(),
  value: string().trim().required(),
});
