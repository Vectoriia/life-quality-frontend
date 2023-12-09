'use client';
import { Box, Typography } from '@mui/material';

import { SignInForm } from '@/components';

import styles from './styles';

const SignIn = () => {
  return (
    <Box sx={styles.contentWrapper}>
      <Box sx={styles.backRectangle}>
        <Typography variant="h2">Увійти в систему</Typography>
        <Typography variant="body2">
          Введіть свої дані для авторизації:
        </Typography>
        <Box sx={styles.formWrapper}>
          <SignInForm />
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
