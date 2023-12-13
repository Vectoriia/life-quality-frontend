import { signOut } from 'next-auth/react';
import { redirect, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// import { chefApi } from '@api/chef';
import useTypedSession from '@/hooks/use-typed-session';
import toast from 'react-hot-toast';

const DEFAULT_PAGE = `/sign-in`;

const AuthCheck: React.FC = () => {
  const { data: typedData, status } = useTypedSession();
  const signInError = typedData?.signInError;
  const pathName = usePathname();
  console.log(typedData, status);

  // const [getAccountInfo, { data: userData }] =
  //   chefApi.useLazyGetCurrentAccountInfoQuery();

  useEffect(() => {
    if (signInError) {
      toast.error(signInError);
      signOut({ redirect: false });
    }
  }, [signInError]);

  useEffect(() => {
    if (status !== 'authenticated') {
      if (
        status === 'unauthenticated' &&
        pathName !== DEFAULT_PAGE
      ) {
        redirect(DEFAULT_PAGE);
      }

      return;
    }
  }, [status]);

  // useEffect(() => {
  //   if (status === 'authenticated') {
  //     getAccountInfo();
  //   }
  // }, [status, getAccountInfo]);

  return (
    <div>
    </div>
  );
};

export default AuthCheck;
