import { useSession, UseSessionOptions } from 'next-auth/react';

import { UserSession } from '@/types/session';

const useTypedSession = (options?: UseSessionOptions<boolean>) => {
  const { data, status } = useSession(options);

  const typedSession = data as UserSession;

  return { data: typedSession, status };
};

export default useTypedSession;
