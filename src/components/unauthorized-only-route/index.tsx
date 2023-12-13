'use client'
import useTypedSession from "@/hooks/use-typed-session";
import { redirect, useRouter } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";
import Loader from "../loader";

interface Props {
  returnTo?: string;
}

const UnauthorizedOnlyRoute: React.FC<PropsWithChildren<Props>> = ({
  children,
  returnTo = '/profile',
}) => {
  const [calledPush, setCalledPush] = useState(false);
  const router = useRouter();
  const { status, data } = useTypedSession();

  useEffect(() => {
    if (calledPush || data?.signInError) {
      return;
    }

    if (status === 'authenticated') {
      router.push(returnTo);
      setCalledPush(true);
    }
  }, [status, router, returnTo, calledPush]);

  if (status !== 'unauthenticated') {
    return <Loader />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default UnauthorizedOnlyRoute
