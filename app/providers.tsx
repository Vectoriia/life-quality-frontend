'use client'

import AuthCheck from '@/components/auth-check';
import { TOKEN_EXPIRATION } from '@/constants';
import { store } from 'core/store';
import { SessionProvider } from 'next-auth/react';
import { FC } from "react";
import { Provider } from 'react-redux';

interface Props extends React.PropsWithChildren{
}

export const Providers: FC<Props> = ({ children }) => {
  
  return (
    <SessionProvider refetchInterval={TOKEN_EXPIRATION - 5}>
        <Provider store={store}>
            <AuthCheck />
            {children}
        </Provider>
    </SessionProvider>
  )
}