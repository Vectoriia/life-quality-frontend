import { useCallback, useEffect } from 'react';

import type { ISignInFormData } from './types';
import type { FormikHelpers } from 'formik';
import toast from 'react-hot-toast';
import { usePostAuthenticationLoginMutation } from 'core/api/baseApi';
import useTypedSession from '@/hooks/use-typed-session';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const useSignInForm = () => {
  const router = useRouter();

  const initialValues: ISignInFormData = {
    email: '',
    password: '',
  };
  const { data: sessionData, status } = useTypedSession();
  const [
    logInMutation,
    { data: logInData, isLoading: logInLoading, reset: resetLogInData },
  ] = usePostAuthenticationLoginMutation()

  const handleSubmit = useCallback(
    async (
      values: ISignInFormData,
      { setSubmitting, setErrors }: FormikHelpers<ISignInFormData>
    ) => {
      logInMutation({userLogInRequest: { email: values.email, password: values.password }});
    },
    [logInMutation]
  );

  useEffect(() => {
    if (
      !logInLoading &&
      logInData &&
      sessionData?.userData?.name !== logInData.name
    ) {
      let callbackUrl: string | null | undefined;
      resetLogInData();
      signIn('credentials', {
        ...logInData,
        phone: undefined,
        redirect: !callbackUrl,
      })
      router.push('/profile');
      toast('success!');
    }
  }, [logInLoading, logInData, sessionData?.userData?.name]);

  return {
    initialValues,
    handleSubmit,
  };
};
export default useSignInForm;
