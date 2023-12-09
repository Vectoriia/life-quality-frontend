'use client';
import { Box } from '@mui/material';
import { Formik, Form, Field } from 'formik';

import { PasswordInput, TextInput, Button } from '@/components';

import { schema } from './schema';
import styles from './styles';
import useSignInForm from './useSignInForm';
import Link from 'next/link';

const SignInForm = () => {
  const { initialValues, handleSubmit } = useSignInForm();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form>
          <Box sx={styles.contentWrapper}>
            <Box sx={styles.fieldsWrapper}>
              <Field
                name="email"
                type="email"
                autoComplete="email"
                label="Електронна пошта"
                placeholder="emily.steward@example.net"
                fullWidth
                component={TextInput}
              />
              <Field
                name="password"
                autoComplete="current-password"
                placeholder="Введіть пароль"
                label="Пароль"
                fullWidth
                component={PasswordInput}
              />
            </Box>
            <Box sx={styles.additionalsWrapper}>
              <Link
                href="sign-up"
                className="no-underline text-black hover:text-blue-600"
              >
                Створити акаунт
              </Link>
              <Link
                href="forget-password"
                className="no-underline text-black hover:text-blue-600"
              >
                Відновити пароль
              </Link>
            </Box>
            <Box sx={styles.buttonsWrapper}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                type="submit"
                isLoading={isSubmitting}
              >
                Продовжити
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
