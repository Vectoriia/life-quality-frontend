'use client'
import { useSearchParams, usePathname, redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

import useTypedSession from '@/hooks/use-typed-session';
import Loader from '../loader';

const PrivateRoute: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname()

  const { status } = useTypedSession({
    required: true,
    onUnauthenticated() {
      if (searchParams.has('returnUrl')) {
        const query = searchParams.toString();

        redirect(`/sign-in?${query}`);
      } else {
        redirect(`/sign-in?returnTo=${encodeURIComponent(`${pathname}?${searchParams}`)}`);
      }
    },
  });

  if (status === 'loading') {
    return <Loader />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default PrivateRoute;
