import { boolean, object, string } from 'yup';

export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^&*()\-_+={}[\]|\\;:"<>,.\/?])[A-Za-z\d~`!@#$%^&*()\-_+={}[\]|\\;:"<>,.\/?]{8,}$/;
export const passwordHelperText =
  'Мінімум 8 символів, 1 велика літера, 1 знак пунктуації, 1 цифра.';

export const schema = object({
  email: string()
    .trim()
    .email('Перевірте чи адреса введена коректно')
    .max(255, 'Надто довге значення')
    .required(`Обов'язкове поле`),
  password: string()
    .trim()
    .min(8, 'Надто коротке значення')
    .max(64, 'Надто довге значення')
    .matches(PASSWORD_REGEX, passwordHelperText)
    .required(`Обов'язкове поле`),
});
